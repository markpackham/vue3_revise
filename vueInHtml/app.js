const app = Vue.createApp({
  //   template: "<h2>I am a template</h2>",
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 30,
    };
  },
  methods: {
    // changeTitle(title) {
    //   //this.title = "Title changes";
    //   this.title = title;
    // },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvents(e) {
      console.log(e);
    },
  },
});

app.mount("#app");
