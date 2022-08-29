<template>
  <div style="width: 100%" class="badge-pokemon">
    <div class="badge" :style="setColorBadge">{{ capitalize(type) }}</div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed:{
    setColorBadge(){
      let linearA
      switch (this.type) {
        case 'grass':
          linearA = 'background-color: var(--colorGrass); filter: saturate(2)'
          break;
        case 'fire':
          linearA = 'background-color: var(--colorFire); filter: saturate(2)'
          break;
        case 'water':
          linearA = 'background-color: var(--colorWater); filter: saturate(2)'
          break;
        case 'poison':
          linearA = 'background-color: var(--colorPoison); filter: saturate(2)'
          break;
        case 'flying':
          linearA = 'background-color: var(--colorFlying); filter: saturate(2)'
          break;
        case 'normal':
          linearA = 'background-color: var(--colorNormal); filter: saturate(2)'
          break;
        case 'fighting':
          linearA = 'background-color: var(--colorFighting); filter: saturate(2)'
          break;
        case 'electric':
          linearA = 'background-color: var(--colorElectric); filter: saturate(2)'
          break;
        case 'ground':
          linearA = 'background-color: var(--colorGround); filter: saturate(2)'
          break;
        case 'psychic':
          linearA = 'background-color: var(--colorPsychic); filter: saturate(2)'
          break;
        case 'rock':
          linearA = 'background-color: var(--colorRock); filter: saturate(2)'
          break;
        case 'ice':
          linearA = 'background-color: var(--colorIce); filter: saturate(2)'
          break;
        case 'bug':
          linearA = 'background-color: var(--colorBug); filter: saturate(2)'
          break;
        case 'dragon':
          linearA = 'background-color: var(--colorDragon); filter: saturate(2)'
          break;
        case 'ghost':
          linearA = 'background-color: var(--colorGhost); filter: saturate(2)'
          break;
        case 'dark':
          linearA = 'background-color: var(--colorDark); filter: saturate(2)'
          break;
        case 'steel':
          linearA = 'background-color: var(--colorSteel); filter: saturate(2)'
          break;
        case 'fairy':
          linearA = 'background-color: var(--colorFairy); filter: saturate(2)'
          break;
      }

      return linearA
    }
  },
  methods:{
    capitalize(str){
      let firstLetter = str.charAt(0)
      let restString = str.substring(1, str.length)
      return firstLetter.toUpperCase() + restString
    }
  }
}
</script>

<style>
.badge {
  width: 60px;
  height: 22px;
  border-radius: 25px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.badge-pokemon{
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  padding-bottom: 5px;
}
</style>
