<script setup>
import { computed, ref } from "vue";
import { AppState } from './AppState.js'
import { cheeseService } from "./services/CheeseService.js";

// const cheese = ref(0)
const cheese = computed(()=> AppState.cheese)

const clickUpgrade = computed(()=>AppState.clickUpgrade)
const autoUpgrade = computed(()=> AppState.autoUpgrade)


function mineCheese(){
  cheeseService.mineCheese()
}


function buyClick(upgradeName){
console.log('buying click')
cheeseService.buyClick(upgradeName)
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
      <div v-for="upgrade in clickUpgrade" :key="upgrade.name" class="text-light text-center">
        <h3>{{upgrade.name}}</h3>
        <p>{{ upgrade.price }}c</p>
        <p>+{{ upgrade.multiplier }}</p>
        <button @click="buyClick()" class="btn btn-outline-warning fs-5 mb-5 px-4">Buy {{ upgrade.name }}</button>
      </div>
    </div>
    <div class="col-md-4">
      <div v-for="upgrade in autoUpgrade" :key="upgrade.name"  class="text-center text-light">
        <h3>{{upgrade.name}}</h3>
        <p>{{ upgrade.price }}c</p>
        <p>+{{ upgrade.multiplier }}</p>
        <button class="btn btn-outline-warning fs-5 mb-5">Buy {{ upgrade.name }}</button>
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