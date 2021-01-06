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
          img: "./assets/1.jpg",
          isFav: true,
        },
        {
          title: "name of the wind2",
          author: "patrick rothfus2",
          img: "./assets/2.jpg",
          isFav: false,
        },
        {
          title: "name of the wind3",
          author: "patrick rothfus3",
          img: "./assets/3.jpg",
          isFav: false,
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
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
