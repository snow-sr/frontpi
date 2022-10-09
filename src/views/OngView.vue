<script>
import navbarC from "../components/NavBar.vue";
import axios from "axios";
import postComp from "../components/PostComp.vue";

export default {
  components: {
    navbarC,
    postComp,
  },
  data() {
    return {
      ong: {},
      thisOngPosts: [],
    };
  },
  async mounted() {
    console.log();
    axios
      .get("http://localhost:8000/Ong/" + this.$route.params.id)
      .then((response) => {
        console.log(response.data);
        this.ong = response.data;
      });

    axios.get("http://localhost:8000/Post/").then((response) => {
      this.thisOngPosts = response.data.filter(
        (post) => post.autor == this.$route.params.id
      );
      console.log(this.thisOngPosts);
    });
  },
};
</script>

<template>
  <navbarC />
  <div class="teste mt-3 text-center">
    <div>
      <header class="container">
        <img :src="ong.image" class="sol" alt="" />
      </header>
      <main class="mx-auto text-center">
        <h1>{{ ong.name }}</h1>
      </main>

      <div>
        <main class="container mt-4">
          <div>
            <post-comp
              v-for="post in thisOngPosts"
              :key="post.id"
              :post="post"
            />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style>
.logo-head {
  width: 350px;
}
div.teste {
  min-height: 90vh;
  min-width: 90vw;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 1700px) {
  .logo-head {
    width: auto;
  }
}
</style>
