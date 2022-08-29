<template>
  <div class="container-cards">
    <div class="card" v-for="(pokemon, index) in pokemonsList" :key="pokemon.id" style="" @click="setPokemonIdDetail(index)">
      <div class="stats-card">
        <div class="title-pokemon-card">#{{ pokemon.id }} {{ capitalize(pokemon.name) }}</div>
        <div class="stats-pokemon-card">
          <pokemon-badge-type :type="type" v-for="(type, index) in pokemon.types" :key="index"/>
        </div>
      </div>
      <div class="image-pokemon">
        <img height="130px" :src="renderImage(pokemon.id)" class="image-shadow"/>
      </div>
    </div>
    <pokemon-details
        v-if="showDetails"
        class="detail-dialog-pokemon"
        @close-details="closeDetails()"
        :pokemon="getPokemonIdDetail"/>
  </div>
</template>

<script>
import PokemonBadgeType from "@/components/PokemonBadgeType";
import PokemonDetails from "@/components/PokemonDetails";
export default {
  components: {PokemonDetails, PokemonBadgeType},
  props: {
    pokemonsList: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      showDetails: false,
      pokemonDetailsID: 0
    }
  },
  mounted() {
    this.$log('PokemonCard', 'mounted()', 'Atualizando cores dos cards')
    this.pokemonsList.forEach((pokemon, index) => {
      this.setColorCardPokemon(index, pokemon.types)
    })
  },
  computed: {
    getPokemonIdDetail(){
        return this.pokemonsList[this.pokemonDetailsID]
    }
  },
  methods: {
    setPokemonIdDetail(id){
      this.$log('PokemonCard','setPokemonIdDetail()', this.pokemonsList['pokemonDetailsID'])
      this.pokemonDetailsID = id
      this.showDetails = true
      document.getElementById('body').classList.remove('start-scrolling')
      document.getElementById('body').classList.add('stop-scrolling')
    },
    setColorCardPokemon(id, types) {
      let card = document.getElementsByClassName('card')[id]
      if (types.length == 1) {
        switch (types[0]) {
          case 'grass':
            card.style.backgroundColor = 'var(--colorGrass)'
            break;
          case 'fire':
            card.style.backgroundColor = 'var(--colorFire)'
            break;
          case 'water':
            card.style.backgroundColor = 'var(--colorWater)'
            break;
          case 'poison':
            card.style.backgroundColor = 'var(--colorPoison)'
            break;
          case 'flying':
            card.style.backgroundColor = 'var(--colorFlying)'
            break;
          case 'normal':
            card.style.backgroundColor = 'var(--colorNormal)'
            break;
          case 'fighting':
            card.style.backgroundColor = 'var(--colorFighting)'
            break;
          case 'electric':
            card.style.backgroundColor = 'var(--colorElectric)'
            break;
          case 'ground':
            card.style.backgroundColor = 'var(--colorGround)'
            break;
          case 'psychic':
            card.style.backgroundColor = 'var(--colorPsychic)'
            break;
          case 'rock':
            card.style.backgroundColor = 'var(--colorRock)'
            break;
          case 'ice':
            card.style.backgroundColor = 'var(--colorIce)'
            break;
          case 'bug':
            card.style.backgroundColor = 'var(--colorBug)'
            break;
          case 'dragon':
            card.style.backgroundColor = 'var(--colorDragon)'
            break;
          case 'ghost':
            card.style.backgroundColor = 'var(--colorGhost)'
            break;
          case 'dark':
            card.style.backgroundColor = 'var(--colorDark)'
            break;
          case 'steel':
            card.style.backgroundColor = 'var(--colorSteel)'
            break;
          case 'fairy':
            card.style.backgroundColor = 'var(--colorFairy)'
            break;
        }
      } else {
        let linearA, linearB
        switch (types[0]) {
          case 'grass':
            linearA = 'var(--colorGrass)'
            break;
          case 'fire':
            linearA = 'var(--colorFire)'
            break;
          case 'water':
            linearA = 'var(--colorWater)'
            break;
          case 'poison':
            linearA = 'var(--colorPoison)'
            break;
          case 'flying':
            linearA = 'var(--colorFlying)'
            break;
          case 'normal':
            linearA = 'var(--colorNormal)'
            break;
          case 'fighting':
            linearA = 'var(--colorFighting)'
            break;
          case 'electric':
            linearA = 'var(--colorElectric)'
            break;
          case 'ground':
            linearA = 'var(--colorGround)'
            break;
          case 'psychic':
            linearA = 'var(--colorPsychic)'
            break;
          case 'rock':
            linearA = 'var(--colorRock)'
            break;
          case 'ice':
            linearA = 'var(--colorIce)'
            break;
          case 'bug':
            linearA = 'var(--colorBug)'
            break;
          case 'dragon':
            linearA = 'var(--colorDragon)'
            break;
          case 'ghost':
            linearA = 'var(--colorGhost)'
            break;
          case 'dark':
            linearA = 'var(--colorDark)'
            break;
          case 'steel':
            linearA = 'var(--colorSteel)'
            break;
          case 'fairy':
            linearA = 'var(--colorFairy)'
            break;
        }
        switch (types[1]) {
          case 'grass':
            linearB = 'var(--colorGrass)'
            break;
          case 'fire':
            linearB = 'var(--colorFire)'
            break;
          case 'water':
            linearB = 'var(--colorWater)'
            break;
          case 'poison':
            linearB = 'var(--colorPoison)'
            break;
          case 'flying':
            linearB = 'var(--colorFlying)'
            break;
          case 'normal':
            linearB = 'var(--colorNormal)'
            break;
          case 'fighting':
            linearB = 'var(--colorFighting)'
            break;
          case 'electric':
            linearB = 'var(--colorElectric)'
            break;
          case 'ground':
            linearB = 'var(--colorGround)'
            break;
          case 'psychic':
            linearB = 'var(--colorPsychic)'
            break;
          case 'rock':
            linearB = 'var(--colorRock)'
            break;
          case 'ice':
            linearB = 'var(--colorIce)'
            break;
          case 'bug':
            linearB = 'var(--colorBug)'
            break;
          case 'dragon':
            linearB = 'var(--colorDragon)'
            break;
          case 'ghost':
            linearB = 'var(--colorGhost)'
            break;
          case 'dark':
            linearB = 'var(--colorDark)'
            break;
          case 'steel':
            linearB = 'var(--colorSteel)'
            break;
          case 'fairy':
            linearB = 'var(--colorFairy)'
            break;
        }

        card.style.backgroundImage = 'linear-gradient(45deg, '+ linearA +', '+ linearB +')'
      }
    },
    renderImage(id) {
      let numStr = id.toString()
      if (numStr.length == 1) {
        numStr = '00' + numStr
      } else if (numStr.length == 2) {
        numStr = '0' + numStr
      }
      return require('@/assets/pokemons/ger'+ this.$route.params.id +'/' + numStr + ".png")
    },
    capitalize(str){
      let firstLetter = str.charAt(0)
      let restString = str.substring(1, str.length)
      return firstLetter.toUpperCase() + restString
    },
    closeDetails(){
      this.showDetails = false
      document.getElementById('body').classList.remove('stop-scrolling')
      document.getElementById('body').classList.add('start-scrolling')
    }
  }
}
</script>

<style>
:root {
  --colorGrass: #78c850;
  --colorWater: #6890f0;
  --colorFire: #f08030;
  --colorPoison: #9d449b;
  --colorFlying: #a890f0;
  --colorNormal: #a8a878;
  --colorFighting: #c03028;
  --colorElectric: #f8d030;
  --colorGround: #e0c068;
  --colorPsychic: #f85888;
  --colorRock: #b8a038;
  --colorIce: #98d8d8;
  --colorBug: #a8b820;
  --colorDragon: #7038f8;
  --colorGhost: #705898;
  --colorDark: #705848;
  --colorDragon: #7038f8;
  --colorSteel: #b8b8d0;
  --colorFairy: #ee99ac;
}

.container-cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 100px;
}

.card {
  width: 250px;
  height: 150px;
  border-radius: 15px;
  margin-right: 10px;
  margin-left: 15px;
  margin-bottom: 25px;
  background-color: var(--colorGrass);
  display: flex;
  justify-content: flex-end;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: 0.25s;
}

.card:hover{
  transform: scale(105%);
}

.card:hover .image-pokemon{
  transform: scale(140%) rotate(10deg);
}

.stats-card {
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 60%;
}

.image-pokemon{
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  transition: 0.25s;
}

.title-pokemon-card{
  font-family: Calibri;
  color: white;
  width: 100%;
  padding-top: 20px;
  padding-left: 15px;
  font-size: 1.5rem;
}

.stats-pokemon-card{
  font-family: Calibri;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  flex-wrap: wrap;
}

.image-shadow{
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #222);
}

.stop-scrolling{
  overflow-y: hidden;
}

.start-scrolling{
  overflow-y: auto;
}
</style>
