<script>

</script>

<template>
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
        <button type="button" name="" id="" class="btn btn-block btn-info btn-rounded">
          Entrar
        </button>
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
        <button type="button" name="" id="" class="btn btn-block btn-dark btn-rounded">
          Cadastrar-se
        </button>
      </div>  
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
    width: 50%;
    border-bottom: 1px solid #000;
  }
  .sol img {
    width: 140px;
    margin: 0 auto;
  }
  .py-10 {
    padding: 2em 2em 15em;
  }
</style>
