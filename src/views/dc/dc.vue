<script setup>
import './style.css'
</script>

<template>
    <div class="">

        <div class="converter-wrapper">
            <form name="property_form">
                <h1>Conversión de Decimal a Coma Flotante</h1>
            </form>
            <form>
                <label for="decimal">Introduzca el número decimal</label>
                <div class="form-horizontal">
                    <input type="text" id="decimal"> <button class="custom-button">Convertir</button>
                </div>
                <br>
                <label for="decimal">Número binario</label>
                <input type="number" id="binario" disabled><br>
                <label for="decimal">Notación científica</label>
                <input type="number" id="notacion" disabled><br><br>
                <label for="decimal">Resultado en Coma Flotante</label>
            </form>
            <div class="form-horizontal">
                <div>
                    <label for="signo">Signo</label>
                    <input type="number" size=1 id="signo" disabled>
                </div>
                <div>
                    <label for="exponente">Exponente</label>
                    <input type="number" id="exponente" disabled>
                </div>
                <div>
                    <label for="mantiza">Mantiza</label>
                    <input type="number" id="mantiza" disabled>
                </div>
            </div>
            <form>
                <button class="custom-button2">Limpiar</button>
                <RouterLink to="/" class="custom-button2">Salir</RouterLink>
            </form>

        </div>

    </div>
</template>