<script setup>
import { computed, ref } from "vue";
import { AppState } from './AppState.js'
import { cheeseService } from "./services/CheeseService.js";

// const cheese = ref(0)
const cheese = computed(()=> AppState.cheese)


function mineCheese(){
  cheeseService.mineCheese()
}

</script>


<template>
<header>
  <div>
    <h1 class="text-center text-light my-3">Moon Miner</h1>
  </div>
</header>
<main class="container-fluid">
  <section class="row">
    <div class="col-12">
      <div class="text-center mt-5">
        <img @click="mineCheese()" role="button" src="https://em-content.zobj.net/source/facebook/92/new-moon-with-face_1f31a.png" alt="">
      </div>
    </div>
  </section>
  <section class="row">
    <div class="col">
      <div>
        <h3 class="text-light text-center my-5">Cheese: {{ cheese }} </h3>
      </div>
    </div>
  </section>
  <section class="row justify-content-center">
    <div class="col-md-4">
      <div class="text-center m-3 p-3">
        <button class="btn btn-outline-warning mdi mdi-magic-staff fs-3 px-5"> Probe</button>
      </div>
      <div class="text-center m-3">
        <button class="btn btn-outline-warning mdi mdi-cloud-braces fs-3 px-4"> Chunker</button>
      </div>
    </div>
    <div class="col-md-4">
      <div class="text-center m-3 p-3">
        <button class="btn btn-outline-warning mdi mdi-knife-military fs-3"> Slice n Dicer</button>
      </div>
      <div class="text-center m-3">
        <button class="btn btn-outline-warning mdi mdi-chip fs-3"> Turbo Grater</button>
      </div>
    </div>
  </section>

</main>
</template>


<style lang="scss">
@import "./assets/scss/main.scss";

img{
  height: 20rem;
  user-select: none;
  cursor: pointer;
}

</style>