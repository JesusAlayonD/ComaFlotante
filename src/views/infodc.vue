<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="container">

        <div class="converter-wrapper">
            <form name="property_form">
                <h1>¿Cómo funciona?</h1>
                <span>Primero, introduzca un numero real, ya sea entero o decimal.</span>
                <span>El número introducido será convertido a binario.</span>
                <span>Una vez convertido a binario, se desarrollara en notación científica con base 2.</span>
                <span>Y finalmente será desglosado en Signo, Exponente y Mantiza. Donde el signo será 0 si es un número
                    positivo, y 1 si es negativo, el exponente será el número que muestre la notación mas 127 y la
                    mantiza es el número despues del punto en la notación científica.</span>
                <span>Y así es como obtienes tu número de punto flotante IEEE 754.</span>
                <br>
                <RouterLink to="/dc" class="custom-button">Regresar</RouterLink>
            </form>

        </div>

    </div>
</template>