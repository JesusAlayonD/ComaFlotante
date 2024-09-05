<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="container">

        <div class="converter-wrapper">
            <form name="property_form">
                <h1>¿Cómo funciona?</h1>
                <span>Primero, introduzca un numero real, ya sea entero o decimal.</span>
                <img src="../../public/dc1.png" alt="Número decimal">
                <span>El número introducido será convertido a binario.</span>
                <img src="../../public/dc2.png" alt="Número binario">
                <span>Una vez convertido a binario, se desarrollara en notación científica con base 2.</span>
                <img src="../../public/dc3.png" alt="Notación científica	">
                <span>Y finalmente será desglosado en Signo, Exponente y Mantiza. Donde el signo será 0 si es un número
                    positivo, y 1 si es negativo, el exponente será el número que muestre la notación mas 127 y la
                    mantiza es el número despues del punto en la notación científica.</span>
                <img src="../../public/dc4.png" alt="Coma flotante">
                <span>Y así es como obtienes tu número de punto flotante IEEE 754.</span>
                <br>
                <RouterLink to="/dc" class="custom-button">Regresar</RouterLink>
            </form>

        </div>

    </div>
</template>