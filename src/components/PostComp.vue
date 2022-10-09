<script>
import axios from "axios";
import dayjs from "dayjs";
import locale_pt_br from "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

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
    // arruma a data do post
    this.post.data = dayjs(this.post.data).locale(locale_pt_br).fromNow();
    // pega as informações da ong
    axios
      .get("http://localhost:8000/Ong/" + this.post.autor)
      .then((response) => {
        console.log(response.data);
        this.author = response.data;
      });

    // pega as informações da imagem do post
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
        <!-- redirect to ong page with author id as query -->
        <router-link :to="'/ong/' + author.id">
          <p class="card-text ml-2">
            <strong>{{ author.name }}</strong>
          </p>
        </router-link>
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
