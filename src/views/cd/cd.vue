<script setup>
</script>

<template>
    <div class="">

        <div class="converter-wrapper">
            <form name="property_form">
                <h1>Conversión de Coma Flotante a Decimal</h1>
            </form>
            <form>
                <label for="decimal">Introduzca un número en coma flotante</label>
            </form>
            <div class="form-horizontal">
                <div>
                    <label for="signo">Signo</label>
                    <input type="text" size=1 id="signo">
                </div>
                <div>
                    <label for="exponente">Exponente</label>
                    <input type="text" id="exponente">
                </div>
                <div>
                    <label for="mantiza">Mantiza</label>
                    <input type="text" id="mantiza">
                </div>
            </div>
            <form>
                <button class="custom-button2">Convertir</button><br>
                <label for="decimal">Número decimal</label>
                <input type="text" id="decimal" disabled>
                <br>
                <label for="decimal">Número binario</label>
                <input type="number" id="binario" disabled><br>
                <label for="decimal">Resultado en número real</label>
                <input type="number" id="notacion" disabled>
                <button class="custom-button2">Limpiar</button>
                <RouterLink to="/" class="custom-button2">Salir</RouterLink>
            </form>
        </div>

    </div>
</template>
