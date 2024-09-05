<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="container">

        <div class="converter-wrapper">
            <form name="property_form">
                <h1>¿Cómo funciona?</h1>
                <span>Primero, introduzca su número en coma flotante IEEE 754 en Signo, Exponente y Mantiza (No es
                    necesario rellenar los 23 digitos).</span>
                    <img src="../../public/cd1.png" alt="Coma flotante">
                <span>El número introducido será convertido a notación científica.</span>
                <img src="../../public/cd2.png" alt="Notacion cientifica">
                <span>La notación científica será convertida a número binario.</span>
                <img src="../../public/cd3.png" alt="Número binario">
                <span>Y finalmente el número binario será convertido a número real</span>
                <img src="../../public/cd4.png" alt="Número real">
                <span>Y así es como obtenemos nuestro número real.</span>
                <br>
                <RouterLink to="/cd" class="custom-button">Regresar</RouterLink>
            </form>

        </div>

    </div>
</template>