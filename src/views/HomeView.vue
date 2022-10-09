<script></script>

<template>
  <div class="teste mt-3 text-center">
    <div>
      <header class="container">
        <img src="../assets/sol.png" class="sol" alt="" />
      </header>
      <main class="mx-auto text-center">
        <img
          src="../assets/logo.jpg"
          class="d-block logo-head mx-auto"
          alt=""
        />
        <img src="../assets/text-header.png" class="margin-negative" alt="" />
        <div class="mt-3 mx-auto">
          <router-link to="/login" class="mt-4 btn btn-info btn-rounded">
            Entre ou Cadastre-se
          </router-link>
        </div>
      </main>
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
