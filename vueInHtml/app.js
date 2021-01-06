const app = Vue.createApp({
  //   template: "<h2>I am a template</h2>",
  data() {
    return {
      url: "https://www.google.com",
      showBooks: true,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfus",
          img: "https://lithub.com/wp-content/uploads/2018/12/81A9dFqIEEL.jpg",
        },
        {
          title: "name of the wind2",
          author: "patrick rothfus2",
          img: "https://lithub.com/wp-content/uploads/2018/12/91yOw4ZHA3L.jpg",
        },
        {
          title: "name of the wind3",
          author: "patrick rothfus3",
          img:
            "https://lithub.com/wp-content/uploads/2018/12/SexographiesbyGabrielaWiener-9781632061591-683x1024.jpg",
        },
      ],
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
  },
});

app.mount("#app");
