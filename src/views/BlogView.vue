<template>
    <div>
        <header class="header py-2 container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <button class="navbar-toggler mb-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                <img src="../assets/logo-inline.png" class="w-25" alt="">
            </div>
            <div class="d-none d-md-flex ondas2">
                <img src="../assets/ondas2.png" class="w-25" alt="">
            </div>
        </header>
        <main class="container mt-4">
            <div class="card mt-3 mb-3">
                <div class="card-body header pt-2 pb-2">
                    <div class="logo">
                        <img src="../assets/perfil.jpg" width="40px" alt="">
                        <p class="card-text ml-2"><strong>José Paulinho</strong><span> - projeto tortuga (penha)</span></p>
                    </div>
                    <div class="vertical">
                        <strong>2h</strong>
                    </div>
                </div>
                <img class="card-img-top" src="../assets/praias.jpg" alt="Card image cap">
                <div class="header border-w">
                    <div>
                        <div class="card-body teste2">
                            <p class="card-text">
                                Evento de arrecadação de lixo realizado pelo projeto Tortuga nessa sexta na praia do Poá foi sucesso! Que possamos fazer mais pelo nosso planeta.
                            </p>
                            <p class="card-text pl-5"><i class="bi bi-chat"></i> 17</p>
                        </div>
                        <div class="text-center font-weight-bold py-2 border-w small">
                            Ver mais..
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mt-3 mb-3">
                <div class="card-body header pt-2 pb-2">
                    <div class="logo">
                        <img src="../assets/perfil2.jpg" width="40px" alt="">
                        <p class="card-text ml-2"><strong>Larissa Manoela</strong><span> - projeto criança feliz (sc)</span></p>
                    </div>
                    <div class="vertical">
                        <strong>03/02/2022</strong>
                    </div>
                </div>
                <img class="card-img-top" src="../assets/praia2.jpg" alt="Card image cap">
                <div class="header border-w">
                    <div>
                        <div class="card-body teste2">
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae molestias ipsa ipsam dolorem at maxime nam ea consequatur aliquam qui placeat.</p>
                            <p class="card-text pl-5"><i class="bi bi-chat"></i> 23</p>
                        </div>
                        <div class="text-center font-weight-bold py-2 border-w small">
                            Ver mais..
                        </div>
                    </div>
                </div>
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
<script>
export default {
    
}
</script>
<style scoped>
    .teste2 {
        display: flex;
        justify-content: space-between;
    }
    .bg-0 {
        background-color: #000;
    }
    @media screen and (min-width:1024px) {
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