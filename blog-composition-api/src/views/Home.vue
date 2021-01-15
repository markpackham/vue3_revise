<template>
  <p>My name is {{ name }} my age is {{ age }}</p>
  <button @click="handleClick">Click me</button>
</template>

<script>
export default {
  name: "Home",
  // setup runs before created() and mounted()
  setup() {
    let name = "mark";
    let age = 20;

    const handleClick = () => {
      console.log("You clicked me");
    };

    // you don't need to do "name: name" if key and value are the same
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