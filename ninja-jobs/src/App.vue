<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </div>

  <button @click="redirect">Redirect To Home</button>
  <button @click="back">Go Back</button>
  <button @click="forward">Go Forward</button>

  <router-view />
</template>

<script>
export default {
  methods: {
    redirect() {
      // send them to homepage or anypage you want to replace the route name with
      this.$router.push({ name: "Home" });
    },
    back() {
      // $router is for moving around, $route is for getting params
      // go backwards 1 page in your browser history
      this.$router.go(-1);
    },
    forward() {
      // go forwards 1 page
      this.$router.go(1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 960px;
  margin: 0 auto;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}
#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>