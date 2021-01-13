<template>
  <p>Reaction time: {{ score }}ms</p>
  <p>Rank: {{ rank }}</p>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Fast fingers";
    } else if (this.score < 400) {
      this.rank = "Ok reflexes";
    } else {
      this.rank = "Slow reactor";
    }
  },
};
</script>

<style>
</style>