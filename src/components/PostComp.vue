<script>
import axios from "axios";
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      comments: [],
      author: {},
      image: {},
    };
  },
  async mounted() {
    axios
      .get("http://localhost:8000/Ong/" + this.post.autor)
      .then((response) => {
        console.log(response.data);
        this.author = response.data;
      });

    axios
      .get("http://localhost:8000/midia/" + this.post.id)
      .then((response) => {
        console.log(response.data);
        this.image = response.data;
      });
  },
};
</script>

<template>
  <div class="card mt-3 mb-3">
    <div class="card-body header pt-2 pb-2">
      <div class="logo">
        <img :src="author.image" width="80" height="80" alt="" />
        <p class="card-text ml-2">
          <strong>{{ author.name }}</strong>
        </p>
      </div>
      <div class="vertical">
        <strong>{{ post.data }}</strong>
      </div>
    </div>
    <img class="card-img-top" :src="image.midia" alt="Card image cap" />
    <div class="header border-w">
      <div>
        <div class="card-body teste2">
          <p class="card-text">
            {{ post.text }}
          </p>
          <p class="card-text pl-5"><i class="bi bi-chat"></i> 17</p>
        </div>
        <div class="text-center font-weight-bold py-2 border-w small">
          Ver mais..
        </div>
      </div>
    </div>
  </div>
</template>
