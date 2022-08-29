<template>
  <div>
    <div class="nav">
      <router-link to="/pokedex/1" class="btn-generation">1ª Geração</router-link>
      <router-link to="/pokedex/2" class="btn-generation">2ª Geração</router-link>
      <router-link to="/pokedex/3" class="btn-generation">3ª Geração</router-link>
      <router-link to="/pokedex/4" class="btn-generation">4ª Geração</router-link>
      <router-link to="/pokedex/5" class="btn-generation">5ª Geração</router-link>
    </div>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nav {
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-generation {
  text-decoration: none;
  background-color: lightskyblue;
  border-radius: 10px;
  padding: 1rem;
  margin-right: 10px;
  margin-top: 10px;
  font-family: "Calibri Light";
}

.btn-generation:hover {
  background-color: lightblue;
}

.active-link {
  background-color: #78c850;
}
</style>
