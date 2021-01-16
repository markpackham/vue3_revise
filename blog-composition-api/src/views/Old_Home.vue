<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>Search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <button @click="handleClick">Stop watching (check console.log)</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";

export default {
  name: "Old_Home",
  setup() {
    const search = ref("");
    const names = ref(["mario", "lugi", "toad", "peach", "bowser", "koopa"]);

    const stopWatch = watch(search, () => {
      // will not run unless change occurs
      console.log("watch function ran");
    });

    const stopEffect = watchEffect(() => {
      // this will run right away (handy to get stuff from a database)
      console.log("watchEffect function ran", search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };

    return { names, search, matchingNames, handleClick };
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