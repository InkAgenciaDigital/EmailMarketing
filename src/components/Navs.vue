<template lang="html">
  <div class="wrapper" id="navbarSupportedContent">
    <div class="sidebar-wrapper">
      <ul class="sidebar-nav">
        <li class="sidebar-brand">
          <a href="#">MarketMail</a>
        </li>
        <li class="nav-item active">
            <router-link
            :to="{name: 'Login'}"
            class="nav-link fa-tachometer-alt"> Home</router-link>
        </li>
        <li class="nav-item">
            <router-link
                :to="{name: 'PrincipalEmpresa'}"
                class="nav-link"> Persona</router-link>
        </li>
        <li class="nav-item">
            <router-link
                :to="{name: 'PrincipalProyecto'}"
                class="nav-link"> Proyecto</router-link>
        </li>
        <li class="nav-item">
             <router-link
                :to="{ name: 'PrincipalMedio'}"
                class="nav-link"> Medio</router-link>
        </li>
        <li class="nav-item">
             <router-link
                :to="{ name: 'PrincipalComportamiento'}"
                class="nav-link"> Comportamientos</router-link>
        </li>
        <li class="nav-item">
             <router-link
                :to="{name: 'PrincipalObjetivo'}"
                class="nav-link"> Objetivos</router-link>
        </li>
        <li class="nav-item">
             <router-link
                :to="{name: 'PrincipalProceso'}"
                class="nav-link"> Proceso</router-link>
        </li>
        <li class="nav-item">
             <router-link
                :to="{name: 'Lista'}"
                class="nav-link"> Lista de contenido</router-link>
        </li>
        <li class="nav-item">
             <router-link
                :to="{name: 'Planificacion'}"
                class="nav-link"> Planificación</router-link>
        </li>
        <li class="nav-item">
             <router-link
                :to="{name: 'Calendario'}"
                class="nav-link"> Calendario</router-link>
        </li>
      </ul>
    </div>
    <div class="">
      <header class="header navbar-light bg-faded">
        <div class="container-fluid">
          <div class="row text-center">
            <button type="button" name="button" class="btn hamburguer-btn" id="menu"><span class="navbar-toggler-icon"></span></button>
            <span class="page-title">MarketMail</span>
            <div class="profile-pic">
            </div>
          </div>
        </div>
      </header>

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

</style>

<!-- <template>

        <nav class="navbar navbar-expand-lg navbar-dark alt" style="background-color: #344675;">

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link
                        :to="{name: 'Login'}"
                        class="nav-link"
                    > Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link
                        :to="{name: 'PrincipalEmpresa'}"
                        class="nav-link"
                    > Persona</router-link>
                </li>
                <li class="nav-item">
                    <router-link
                        :to="{name: 'PrincipalProyecto'}"
                        class="nav-link"
                    > Proyecto</router-link>
                </li>
                <li class="nav-item">
                     <router-link
                        :to="{ name: 'PrincipalMedio'}"
                        class="nav-link"
                    > Medio</router-link>
                </li>
                <li class="nav-item">
                     <router-link
                        :to="{ name: 'PrincipalComportamiento'}"
                        class="nav-link"
                    > Comportamientos</router-link>
                </li>
                <li class="nav-item">
                     <router-link
                        :to="{name: 'PrincipalObjetivo'}"
                        class="nav-link"
                    > Objetivos</router-link>
                </li>
                <li class="nav-item">
                     <router-link
                        :to="{name: 'PrincipalProceso'}"
                        class="nav-link"
                    > Proceso</router-link>
                </li>
                <li class="nav-item">
                     <router-link
                        :to="{name: 'Lista'}"
                        class="nav-link"
                    > Lista de contenido</router-link>
                </li>
                <li class="nav-item">
                     <router-link
                        :to="{name: 'Planificacion'}"
                        class="nav-link"
                    > Planificación</router-link>
                </li>
                <li class="nav-item">
                     <router-link
                        :to="{name: 'Calendario'}"
                        class="nav-link"
                    > Calendario</router-link>
                </li>
                <li class="nav-item">
                    <a href="login.html" class="btn btn-outline-light">Salir</a>
                </li>
                </ul>

            </div>
        </nav>
</template>

<style>
.alt{
    padding: 1%;
    padding-left: 18%;
}
.alt1{
    padding: 1%;
    padding-left: 2%;
}


</style> -->
