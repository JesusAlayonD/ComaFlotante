<script setup>
import './style.css'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="container">

        <div class="converter-wrapper">
            <form name="property_form">
                <h1>Conversión <br>Coma Flotante</h1>
            </form>
            <div class="converter-w">
                <div class="converter-side-a">
                    <form>
                        <h2>Convertir de Decimal a Coma Flotante</h2>
                        <RouterLink to="/dc" class="custom-button">Convertir</RouterLink>
                    </form>
                </div>

                <div class="converter-side-b">
                    <form>
                        <h2>Convertir de Coma Flotante a Decimal</h2>
                        <RouterLink to="/cd" class="custom-button">Convertir</RouterLink>
                    </form>
                </div>
            </div>

        </div>

    </div>
</template>