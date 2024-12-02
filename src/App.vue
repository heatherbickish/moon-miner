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
        <h3 class="text-light text-center mt-5">Cheese Count:{{ cheese }} </h3>
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