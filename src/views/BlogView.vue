<script>
import axios from "axios";
import postComp from "../components/PostComp.vue";
import navBar from "../components/NavBar.vue";

export default {
  name: "Home",
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    axios.get("http://localhost:8000/Post/").then((response) => {
      console.log(response.data);
      this.posts = response.data;
    });
  },
  components: {
    postComp,
    navBar,
  },
};
</script>

<template>
  <navBar />
  <div>
    <main class="container mt-4">
      <div>
        <post-comp v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </main>
  </div>
  <div class="small text-center w-100 bg-0 text-light py-3">
    <p class="mb-0">
      <i class="bi bi-c-circle"></i>
      Copyright - 2022 Preservese Blog
    </p>
  </div>
</template>

<style scoped>
.teste2 {
  display: flex;
  justify-content: space-between;
}
.bg-0 {
  background-color: #000;
}
@media screen and (min-width: 1024px) {
  .header {
    border-bottom: 2px solid #000;
  }
  .card {
    border-width: 2.5px;
    border-color: #000;
    border-bottom: none;
  }
  .border-w {
    border-top: 2px solid #000;
  }
}
</style>
