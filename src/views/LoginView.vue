<script>

</script>

<template>

<div class="teste">
  <div class="container  text-center">
    <header class="container sol">
      <img src="../assets/logo.jpg" alt="">
    </header>
  <main>
    <div class="row">
      <div class="col-6 border-right border-dark pt-5">
        <h2>
          Entrar
        </h2>
      </div>
      <div class="col-6 pt-5">
        <h2>
          Cadastre-se
        </h2>
      </div>
    </div>
    <div class="row">
      <div class="col-6 border-right border-dark py-10">
        <div class="form-group">
          <input type="email" class="form-control btn-rounded px-4" name="email" id="email" placeholder="email:" >
        </div>
        <div class="form-group">
          <input type="password" class="form-control btn-rounded px-4" name="password" id="password" placeholder="senha:">
        </div>
        <router-link to="/blog" class="btn btn-block btn-info btn-rounded">
          Entrar
        </router-link>
        <div>
          <img src="../assets/ondas.png" alt="">
        </div>
      </div>
      <div class="col-6 py-10">
        <div class="form-group">
          <input type="text" class="form-control btn-rounded px-4" name="nome" id="nome" placeholder="nome completo:">
        </div>
        <div class="form-group">
          <input type="email" class="form-control btn-rounded px-4" name="email_create" id="email_create" placeholder="email:">
        </div>
        <div class="form-group">
          <input type="password_create" class="form-control btn-rounded px-4" name="password_create" id="password_create" placeholder="senha:">
        </div>
        <div class="form-group">
          <input type="password_create_2" class="form-control btn-rounded px-4" name="password_create_2" id="password_create_2" placeholder="confirmar senha:">
        </div>
        <div class="form-group">
          <select class="form-control btn-rounded px-4" id="exampleFormControlSelect1">
            <option>Cidade</option>
            <option>Joinville</option>
            <option>Itapema</option>
            <option>Araquari</option>
          </select>
        </div>
        <router-link to="/blog" class="btn btn-block btn-dark btn-rounded">
          Cadastrar-se
        </router-link>
      </div>  
    </div>
  </main>
  </div>
  </div>
</template>

<style scoped>
  .sol {
    width: 50%;
    border-bottom: 1px solid #000;
  }
</style>
