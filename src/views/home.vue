<script setup>
import "./style.css"
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="container">

        <div class="converter-wrapper-home">
            <form name="property_form">
                <h1>Conversión de Coma Flotante de 32 bits<br>IEEE 754</h1>
                <br>
                <RouterLink to="/desarrollo" class="custom-button">Desarrolló
                </RouterLink><br>
            </form>
            <div class="converter-w">
                <div class="converter-side-a">
                    <form>
                        <h2>Convertir de Decimal a Coma Flotante de 32 bits</h2>
                        <RouterLink to="/dc" class="custom-button">Convertir</RouterLink>
                    </form>
                </div>

                <div class="converter-side-a">
                    <form>
                        <h2>Convertir de Coma Flotante de 32 bits a Decimal</h2>
                        <RouterLink to="/cd" class="custom-button">Convertir</RouterLink>
                    </form>
                </div>
            </div>

        </div>

    </div>
</template>