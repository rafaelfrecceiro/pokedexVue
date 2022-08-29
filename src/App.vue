<template>
  <div>
    <div class="topbar">
      <router-link to="/player" class="btn-nav">Player</router-link>
      <router-link to="/pokedex" class="btn-nav">Pokedex</router-link>
    </div>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.topbar{
  height: 70px;
  width: 100%;
  background-color: #b8b8d0;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
}

.btn-nav {
  text-decoration: none;
  background-color: palevioletred;
  border-radius: 10px;
  padding: 1rem;
  margin-right: 10px;
  margin-top: 10px;
  font-weight: bold;
  font-family: Calibri;
}

.btn-nav:hover {
  background-color: lightblue;
}

.active-link{
  background-color: #78c850;
}
</style>
