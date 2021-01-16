<template>
  <!-- <p ref="paragraphTag">My name is {{ name }} my age is {{ age }}</p> -->
  <p>My name is {{ name }} my age is {{ age }}</p>
  <button @click="handleClick">Click me</button>
  <button @click="age++">Add 1 to age</button>
  <input type="text" v-model="name" />
</template>

<script>
import { ref } from "vue";

export default {
  name: "Home",
  // setup runs before created() and mounted()
  setup() {
    const name = ref("mark");
    const age = ref(20);

    // const paragraphTag = ref(null);

    // const handleClick = () => {
    //   paragraphTag.value.classList.add("test");
    //   paragraphTag.value.textContent = "Hello World";
    // };

    const handleClick = () => {
      name.value = "timmy";
      age.value = 21;
    };

    // you don't need to do "name: name" if key and value are the same
    // return { name, age, handleClick, paragraphTag };
    return { name, age, handleClick };
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