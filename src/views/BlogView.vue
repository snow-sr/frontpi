<script>
import axios from "axios";
import postComp from "../components/PostComp.vue";

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
  },
};
</script>

<template>
  <div>
    <header class="header py-2 container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <button
          class="navbar-toggler mb-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/blog" class="nav-link">
                <i class="bi bi-house"></i> Blog
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                <i class="bi bi-person-circle"></i> Perfil
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="logo">
        <img src="../assets/logo-inline.png" class="w-25" alt="" />
      </div>
      <div class="d-none d-md-flex ondas2">
        <img src="../assets/ondas2.png" class="w-25" alt="" />
      </div>
    </header>
    <main class="container mt-4">
      <div>
        <post-comp v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </main>
  </div>
  <div class="small text-center w-100 bg-0 text-light py-3">
    <p class="mb-0">
      <i class="bi bi-c-circle"></i>
      Copyright - 2016 Preservese Blog
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
