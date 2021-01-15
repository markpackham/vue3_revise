<template>
  <h1>Job Details Page</h1>
  <p>The job id is {{ id }}</p>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      // no longer to do this now we are handling "id" as props
      // we can do this since we set "props" to "true" in router/index.js
      //   id: this.$route.params.id,
    };
  },
};
</script>

<style>
</style>