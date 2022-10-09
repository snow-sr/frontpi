<script></script>

<template>
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
</template>
