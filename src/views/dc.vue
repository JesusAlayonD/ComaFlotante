<script setup>
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
                    <input type="text" id="decimal"> <button class="custom-button">Convertir</button>
                </div>
                <br>
                <label for="decimal">Número binario</label>
                <input type="text" id="binario" disabled><br>
                <label for="decimal">Notación científica</label>
                <input type="text" id="notacion" disabled>
            </form>
            <label>Resultado en Coma Flotante</label>
            <div class="form-horizontal">
                <div>
                    <label for="signo">Signo</label>
                    <input type="text" id="signo" disabled>
                </div>
                <div>
                    <label for="exponente">Exponente</label>
                    <input type="text" id="exponente" disabled>
                </div>
                <div>
                    <label for="mantiza">Mantiza</label>
                    <input type="text" id="mantiza" disabled>
                </div>
            </div>
            <form>
                <div class="form-buttons">
                    <button class="custom-button">Limpiar</button>
                    <RouterLink to="/" class="custom-button">Salir</RouterLink>
                </div>
            </form>

        </div>

    </div>
</template>