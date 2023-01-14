<script setup>
import Form from '../components/Form.vue'
</script>

<template>
    <div class="front-page">
        <button type="button" class="btn btn-sm" :class="$store.state.formButton"
            @click="$store.commit('toggleForm', $store.state.formOpen)">Checkout <i class="fa"
                :class="$store.state.formIcon" aria-hidden="true"></i></button>
        <div class="container">
            <div class="py-5 text-center">
                <img class="d-block mx-auto mb-4" src="@/assets/logo.svg" alt="" width="72" height="72">
                <h2>Vietnam Culture Restaurant</h2>
                <p class="lead">{{ $store.state.formMsg }}</p>
            </div>
            <Form v-if="$store.state.formOpen" />
        </div>
    </div>
</template>

<style scoped>
.front-page {
    margin: 5px;
}
</style>