<script>

</script>

<template>
  <div class="container mt-3 text-center">
    <header class="container">
    <img src="../assets/sol.png" class="sol" alt="">
  </header>
  <main class="row">
    <div class="col-10 mx-auto text-center">
      <img src="../assets/logo.jpg" alt="">
      <img src="../assets/text-header.png" class="margin-negative" alt="">
    </div>
    <div class="col-6 mt-3 mx-auto">
      <router-link to="/login" class="mt-4 btn btn-info btn-rounded">
        Entre ou Cadastre-se
      </router-link>
    </div>
  </main>
  </div>
</template>

<style>
  .btn-rounded {
    border-radius: 30px;
    padding: .5em 2em;
  }
  .margin-negative {
    margin-top: -2em;
  }
  .sol {
    width: 95px;
    margin: 0 auto;
  }
</style>
