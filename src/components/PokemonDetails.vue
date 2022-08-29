<template>
  <div class="container-dialog" @click.self="$emit('close-details')">
    <div class="dialog-pokemon">
      <div class="title-details">
        <h1>{{capitalize(pokemon.name)}}</h1>
        <button class="btn-close-details" @click="$emit('close-details')">X</button>
      </div>
      <div class="image-details">
        <img height="300px" :src="renderImage(pokemon.id)" class="image-shadow"/>
      </div>
      <div class="stats-details">
<!--        <div class="title-stats-details">Attack</div>-->
<!--        <div class="values-stats-details">123</div>-->
        <progress-bar label="HP" :value="pokemon.stats.hp" color="#ffbb49"/>
        <progress-bar label="Attack" :value="pokemon.stats.attack" color="#ffbb49"/>
        <progress-bar label="Defense" :value="pokemon.stats.defense" color="#ffbb49"/>
        <progress-bar label="Special Attack" :value="pokemon.stats.specialAttack" color="#ffbb49"/>
        <progress-bar label="Special Defense" :value="pokemon.stats.specialDefense" color="#ffbb49"/>
        <progress-bar label="Speed" :value="pokemon.stats.speed" color="#ffbb49"/>
      </div>
      <div class="moves-details">
        <pokemon-move-list :moveList="pokemon.moves"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";
import PokemonMoveList from "@/components/PokemonMoveList";
export default {
  components: {PokemonMoveList, ProgressBar},
  props:{
    pokemon:{
      type: Object,
      require: true
    }
  },
  mounted() {
      this.setColorCardPokemon(this.pokemon.types)
  },
  methods:{
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
    setColorCardPokemon(types) {
      let card = document.getElementsByClassName('dialog-pokemon')[0]
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
  }
}
</script>

<style>
.dialog-pokemon{
  border:10px solid cadetblue;

  -webkit-filter: drop-shadow(50px 50px 100px #222);
  filter: drop-shadow(50px 50px 100px #000);

  width: 500px;
  height: 615px;
  background-color: whitesmoke;
  border-radius: 15px;
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  padding: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow-y: auto;
}

@media (max-width: 600px){
  .dialog-pokemon{
    border:10px solid cadetblue;

    -webkit-filter: drop-shadow(50px 50px 100px #222);
    filter: drop-shadow(50px 50px 100px #000);

    width: 310px;
    height: 580px;
    background-color: whitesmoke;
    border-radius: 15px;
    position: fixed;
    top: 2%;
    left: 50%;
    transform: translateX(-50%);
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: flex-start;
  }
}

.container-dialog{
  position: fixed;
  top:0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
}

.title-details{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  font-family: "Calibri";
}

.btn-close-details{
  font-size: 1rem;
  font-weight: bolder;
  padding: 10px;
  cursor: pointer;
  background-color: #6890f0;
}

.image-details{
  display: flex;
  justify-content: center;
  width: 100%;
}

.stats-details{
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  font-size: 1.5rem;
  font-weight: bolder;
  font-family: "Calibri Light";
}

.image-shadow{
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #222);
}

.moves-details{
  margin-top: 10px;
  width: 100%;
}
</style>
