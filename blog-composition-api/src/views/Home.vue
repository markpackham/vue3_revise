<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from "../components/PostList.vue";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([
      { title: "welcome to the blog", body: "Lorem ipsum", id: 1 },
      { title: "top 5 CSS tips", body: "Lorem ipsum", id: 2 },
    ]);

    return { posts };
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