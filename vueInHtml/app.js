const app = Vue.createApp({
  //   template: "<h2>I am a template</h2>",
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 30,
    };
  },
  methods: {
    changeTitle(title) {
      //this.title = "Title changes";
      this.title = title;
    },
  },
});

app.mount("#app");
