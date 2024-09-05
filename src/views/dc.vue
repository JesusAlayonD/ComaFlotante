<script setup>
import { ref } from 'vue';

// Crear referencias reactivas para los campos
const decimal = ref('');
const binario = ref('');
const notacion = ref('');
const signoV = ref('');
const exponenteV = ref('');
const mantizaV = ref('');

function validarEntradaDecimal(event) {
    const teclaPresionada = event.key;
    const valorActual = event.target.value;

    // Permitir: números (0-9), un único punto decimal (.), y teclas de control (backspace, delete, flechas)
    const teclasPermitidas = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', '.'];

    // Verificar si el carácter es un número
    const esNumero = teclaPresionada >= '0' && teclaPresionada <= '9';

    // Si la tecla presionada no es un número ni una tecla permitida, bloquearla
    if (!esNumero && !teclasPermitidas.includes(teclaPresionada)) {
        event.preventDefault();
        return;
    }

    // Si se presiona un punto, evitar más de un punto decimal
    if (teclaPresionada === '.' && valorActual.includes('.')) {
        event.preventDefault();
    }
}

// Función para convertir el número decimal (con parte fraccionaria) a binario
function convertirABinario() {
    if (decimal.value) {
        // Separar la parte entera y la parte fraccionaria
        const [parteEntera, parteFraccionaria] = decimal.value.split('.');

        // Convertir la parte entera a binario
        const binEntero = parseInt(parteEntera).toString(2);

        // Convertir la parte fraccionaria a binario
        const binFraccionario = convertirFraccionABinario(parteFraccionaria).slice(0, 25); // Limitar a 25 bits después del punto

        // Unir ambas partes
        binario.value = binEntero + (binFraccionario ? '.' + binFraccionario : '');
        
        // Convertir a notación científica personalizada
        notacion.value = convertirANotacionCientifica(binario.value);

        if(decimal.value > 0){
            signoV.value = '0';
        } else {
            signoV.value = '1';
        }
    }
}

// Función para convertir la parte fraccionaria a binario
function convertirFraccionABinario(fraccion) {
    let fraccionDecimal = parseFloat('0.' + fraccion);
    let binFraccionario = '';
    let maxIteraciones = 20; // Limitar el número de iteraciones para evitar ciclos infinitos

    while (fraccionDecimal > 0 && maxIteraciones > 0) {
        fraccionDecimal *= 2;
        if (fraccionDecimal >= 1) {
            binFraccionario += '1';
            fraccionDecimal -= 1;
        } else {
            binFraccionario += '0';
        }
        maxIteraciones--;
    }

    return binFraccionario;
}

// Función para completar el exponente binario a 8 bits
function ajustarExponente(exponente) {
    const exponenteAjustado = (exponente + 127).toString(2); // Ajustar con 127 y convertir a binario
    return exponenteAjustado.padStart(8, '0'); // Completar con ceros si tiene menos de 8 bits
}

// Función para ajustar la mantiza a 23 dígitos
function ajustarMantiza(mantiza) {
    return mantiza.padEnd(23, '0').slice(0, 23); // Completar con ceros o cortar a 23 bits
}

// Función para convertir el binario a notación científica personalizada
// Función para convertir el binario a notación científica personalizada
function convertirANotacionCientifica(bin) {
    const puntoPos = bin.indexOf('.');
    const primeraPosicion = bin.indexOf('1');
    if (primeraPosicion === -1) return '0';

    let mantiza, exponente;

    if (puntoPos === -1 || puntoPos > primeraPosicion) {
        mantiza = bin.slice(primeraPosicion + 1).replace('.', '');
        exponente = puntoPos > primeraPosicion ? puntoPos - primeraPosicion - 1 : bin.length - primeraPosicion - 1;
    } else {
        mantiza = bin.slice(primeraPosicion + 1).replace('.', '');
        exponente = primeraPosicion - puntoPos;
        exponente = -exponente;
    }

    // Ajustar mantiza y limitarla a 25 dígitos
    mantizaV.value = ajustarMantiza(mantiza).slice(0, 25);
    exponenteV.value = ajustarExponente(exponente);

    return `1.${mantizaV.value}x2^${exponente}`;
}

// Función para limpiar todos los campos
function limpiarCampos() {
    decimal.value = '';
    binario.value = '';
    notacion.value = '';
    signoV.value = '';
    exponenteV.value = '';
    mantizaV.value = '';
}
</script>
<template>
    <div class="">

        <div class="converter-wrapper">
            <form name="property_form">
                <h1>Conversión de Decimal a Coma Flotante de 32 bits IEEE 754</h1>
            </form>
            <form>
                <RouterLink to="/infodc" class="custom-button">¿Cómo funciona la prueba?
                </RouterLink><br>
                <label for="decimal">Introduzca el número decimal</label>
                <div class="form-horizontal">
                    <input type="text" id="decimal" @keydown="validarEntradaDecimal" v-model="decimal"> <button type="button" class="custom-button" @click="convertirABinario">Convertir</button>
                </div>
                <br>
                <label for="decimal">Número binario</label>
                <input type="text" id="binario" v-model="binario" disabled><br>
                <label for="decimal">Notación científica</label>
                <input type="text" id="notacion" v-model="notacion" disabled>
            </form>
            <label>Resultado en Coma Flotante</label>
            <div class="form-horizontal">
                <div>
                    <label for="signo">Signo</label>
                    <input type="text" id="signo" v-model="signoV" disabled>
                </div>
                <div>
                    <label for="exponente">Exponente</label>
                    <input type="text" id="exponente" v-model="exponenteV" disabled>
                </div>
                <div>
                    <label for="mantiza">Mantiza</label>
                    <input type="text" id="mantiza" v-model="mantizaV" disabled>
                </div>
            </div>
            <form>
                <div class="form-buttons">
                    <button type="button" class="custom-button" @click="limpiarCampos">Limpiar</button>
                    <RouterLink to="/" class="custom-button">Salir</RouterLink>
                </div>
            </form>

        </div>

    </div>
</template>