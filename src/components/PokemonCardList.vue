<template>
  <div class="container-list">
    <pokemon-card :pokemonsList="setPokemonList"/>
  </div>
</template>

<script>
import {
  pokemons1,
  pokemons2,
  pokemons3,
  pokemons4,
  pokemons5,
  pokemons6,
  pokemons7,
  pokemons8
} from '@/db'
import PokemonCard from "@/components/PokemonCard";

export default {
  components: {
    PokemonCard
  },
  computed:{
    setPokemonList(){
      if(this.$route.params.id == 1) return pokemons1
      else if(this.$route.params.id == 2) return pokemons2
      else if(this.$route.params.id == 3) return pokemons3
      else if(this.$route.params.id == 4) return pokemons4
      else if(this.$route.params.id == 5) return pokemons5
      else if(this.$route.params.id == 6) return pokemons6
      else if(this.$route.params.id == 7) return pokemons7
      else if(this.$route.params.id == 8) return pokemons8
      else return pokemons1
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
</style>
