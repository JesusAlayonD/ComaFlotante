<script setup>
import { ref } from 'vue';

// Crear referencias reactivas para los campos
const signo = ref('');
const exponente = ref('');
const mantiza = ref('');
const binario = ref('');
const notacion = ref('');
const real = ref('');

function validarEntradaBinaria(event) {
    // Solo permitir la entrada de las teclas '0' y '1'
    const charCode = event.which ? event.which : event.keyCode;
    
    if (charCode !== 48 && charCode !== 49) { // 48 es '0' y 49 es '1'
        event.preventDefault(); // Evita que se escriban otros caracteres
    }
}

// Función para convertir coma flotante a decimal
function convertirAReal() {
    if (signo.value && exponente.value && mantiza.value) {
        // Convertir exponente de binario a decimal
        const exponenteDecimal = parseInt(exponente.value, 2) - 127; // Ajustar el exponente

        // Convertir mantiza a notación científica
        const notacionCientifica = `1.${mantiza.value}x10^${exponenteDecimal}`;
        const notacionPrint = `1.${mantiza.value}x2^${exponenteDecimal}`;
        
        notacion.value = notacionPrint;

        // Convertir la notación científica a binario
        const binarioNormal = notacionCientificaANormal(notacionCientifica);
        binario.value = binarioNormal;

        // Convertir binario normal a número decimal
        real.value = binarioANumeroDecimal(binarioNormal, signo.value);
    }
}

// Función para convertir notación científica a binario normal
function notacionCientificaANormal(notacion) {
    const match = notacion.match(/1\.(\d+)x10\^(-?\d+)/);
    if (!match) return '';

    const [_, mantizaParte, exponenteParte] = match;
    const exponenteDecimal = parseInt(exponenteParte);

    // Construir la mantiza en formato binario
    let mantizaBinaria = '1.' + mantizaParte.padEnd(23, '0'); // Mantiza con 23 dígitos
    
    // Determinar la posición del punto binario en base al exponente
    let puntoPosicion = exponenteDecimal;

    if (puntoPosicion >= 0) {
        // Mover el punto binario a la derecha
        if (puntoPosicion < mantizaBinaria.length - 2) {
            mantizaBinaria = mantizaBinaria.slice(0, puntoPosicion + 2) + '.' + mantizaBinaria.slice(puntoPosicion + 2);
        } else {
            mantizaBinaria = mantizaBinaria + '0'.repeat(puntoPosicion - (mantizaBinaria.length - 2));
        }
        mantizaBinaria = mantizaBinaria.replace(/0+$/, '').replace(/\.$/, '');
        mantizaBinaria = mantizaBinaria.replace('.', '');
    } else {
        // Mover el punto binario a la izquierda
        mantizaBinaria = '0.1' + '0'.repeat(-puntoPosicion - 1) + mantizaBinaria.slice(2);
        mantizaBinaria = mantizaBinaria.replace(/0+$/, '').replace(/\.$/, '');
        
    }

    // Eliminar ceros innecesarios al final

    console.log(mantizaBinaria);
    return mantizaBinaria
}

// Función para convertir binario normal a número decimal
function binarioANumeroDecimal(binario, signo) {
    let decimal = 0;
    const [integerPart, fractionalPart = ''] = binario.split('.');

    // Convertir la parte entera del binario a decimal
    for (let i = 0; i < integerPart.length; i++) {
        decimal += parseInt(integerPart[i]) * Math.pow(2, integerPart.length - i - 1);
    }

    // Convertir la parte fraccionaria del binario a decimal
    for (let i = 0; i < fractionalPart.length; i++) {
        decimal += parseInt(fractionalPart[i]) * Math.pow(2, - (i + 1));
    }

    // Aplicar el signo
    return (signo === '1' ? -decimal : decimal).toString();
}



// Función para limpiar todos los campos
function limpiarCampos() {
    signo.value = '';
    exponente.value = '';
    mantiza.value = '';
    binario.value = '';
    notacion.value = '';
    real.value = '';
}
</script>

<template>
    <div class="">

        <div class="converter-wrapper">
            <form name="property_form">
                <h1>Conversión de Coma Flotante IEEE 754 a Decimal</h1>
            </form>
            <form>
                <RouterLink to="/infocd" class="custom-button">¿Cómo funciona la prueba?</RouterLink><br>
                <label for="decimal">Introduzca un número en coma flotante</label>
            </form>
            <div class="form-horizontal">
                <div>
                    <label for="signo">Signo</label>
                    <input type="text" id="signo" @keypress="validarEntradaBinaria" step="1" maxlength="1" pattern="[01]*" v-model="signo">
                </div>
                <div>
                    <label for="exponente">Exponente</label>
                    <input type="text" @keypress="validarEntradaBinaria" id="exponente" step="1" maxlength="8" pattern="[01]*" v-model="exponente">
                </div>
                <div>
                    <label for="mantiza">Mantiza</label>
                    <input type="text" @keypress="validarEntradaBinaria" id="mantiza" step="1" maxlength="23" pattern="[01]*" v-model="mantiza">
                </div>
            </div>
            <form>
                <button type="button" class="custom-button" @click="convertirAReal">Convertir</button><br>
                <label for="notacion">Notación científica</label>
                <input type="text" id="notacion" v-model="notacion" disabled><br>
                <label for="binario">Número binario</label>
                <input type="text" id="binario" v-model="binario" disabled>
                <br>
                <label for="real">Resultado en número real</label>
                <input type="text" id="real" v-model="real" disabled>
                <div class="form-buttons">
                    <button type="button" class="custom-button" @click="limpiarCampos">Limpiar</button>
                    <RouterLink to="/" class="custom-button">Salir</RouterLink>
                </div>
            </form>
        </div>

    </div>
</template>
