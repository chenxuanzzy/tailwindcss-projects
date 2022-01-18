const DOG_API = "https://dog.ceo/api/breeds/image/random";

Vue.component("img-component", {
  props: ["item", "index", "img"],
  template: `
        <div class="mr-4 text-center items-center">
            <img :src="img[index]" class="mb-4 rounded border-solid border-2 border-indigo-400" style="width:320px; height:320px;">
            <p>{{ item }}!</p>
        </div>
    `,
});

const app = new Vue({
  el: "#app",
  data() {
    return {
      pTag: [
        {
          name: "Love",
          index: "0",
        },
        {
          name: "Smile",
          index: "1",
        },
        {
          name: "Peace",
          index: "3",
        },
        {
          name: "Cuddles",
          index: "4",
        },
      ],
      imgURL: [],
    };
  },
  methods: {
    getImg() {
      axios
        .get(DOG_API)
        .then((res) => {
          this.imgURL.push(res.data.message);
        })
        .catch((err) => {
          alert("Can't Found Api.");
          console.log(err);
        });
    },
  },
  created() {
    for (let i = 0; i < this.pTag.length; i++) {
      this.getImg();
    }
  },
});
