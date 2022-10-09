<script setup>
import axios from "axios";
var error = false;

let toBeCreated = {
  email: "",
  password: "",
  passwordConfirmation: "",
  city: "",
};

function createNewUser() {
  console.log(toBeCreated);
}
</script>

<template>
  <div class="teste">
    <div class="container text-center">
      <header class="container sol">
        <img src="../assets/logo.jpg" alt="" />
      </header>
      <main>
        <div class="row">
          <div class="col-6 border-right border-dark pt-5">
            <h2>Entrar</h2>
          </div>
          <div class="col-6 pt-5">
            <h2>Cadastre-se</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-6 border-right border-dark py-10">
            <div class="form-group">
              <input
                type="email"
                class="form-control btn-rounded px-4"
                name="email"
                id="email"
                placeholder="email:"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control btn-rounded px-4"
                name="password"
                id="password"
                placeholder="senha:"
              />
            </div>
            <router-link to="/blog" class="btn btn-block btn-info btn-rounded">
              Entrar
            </router-link>
            <div>
              <img src="../assets/ondas.png" alt="" />
            </div>
          </div>
          <div class="col-6 py-10">
            <div v-if="error == 'password_error_not_match'" class="">
              <p class="text-danger">Senhas não conferem</p>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control btn-rounded px-4"
                name="nome"
                id="nome"
                placeholder="nome completo:"
                v-model="toBeCreated.name"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control btn-rounded px-4"
                name="email_create"
                id="email_create"
                placeholder="email:"
                v-model="toBeCreated.email"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control btn-rounded px-4"
                name="password_create"
                id="password_create"
                placeholder="senha:"
                v-model="toBeCreated.password"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control btn-rounded px-4"
                name="password_create_2"
                id="password_create_2"
                placeholder="confirmar senha:"
                v-model="toBeCreated.passwordConfirmation"
              />
            </div>
            <div class="form-group">
              <select
                class="form-control btn-rounded px-4"
                id="exampleFormControlSelect1"
                v-model="toBeCreated.city"
              >
                <option>Cidade</option>
                <option>Joinville</option>
                <option>Itapema</option>
                <option>Araquari</option>
              </select>
            </div>
            <button
              @click="createNewUser()"
              class="btn btn-block btn-dark btn-rounded"
            >
              Cadastrar-se
            </button>
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
