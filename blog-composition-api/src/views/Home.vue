<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>
  </div>
</template>

<script>
// ref vs reactive
// reactive save you from having to use .value
// reactive can't use primitive values inside it, they won't update
// best use refs over reactive in the future because of this limitation
import { ref, reactive } from "vue";

export default {
  name: "Home",
  setup() {
    const ninjaOne = ref({ name: "mark", age: 20 });
    const ninjaTwo = reactive({ name: "timmy", age: 40 });

    const updateNinjaOne = () => {
      ninjaOne.value.age = 21;
    };

    const updateNinjaTwo = () => {
      ninjaTwo.age = 45;
    };

    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>