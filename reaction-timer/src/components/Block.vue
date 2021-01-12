<template>
  <div class="block" v-if="showBlock">Click me</div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
    }, this.delay);
  },
  //   // updated only works if stuff in data() is changed
  //   updated() {},
  //   // will only show when our component is removed from Vue
  //   unmounted() {
  //     console.log("Unmounted");
  //   },
  methods: {},
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>