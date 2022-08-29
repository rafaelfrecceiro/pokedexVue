<template>
    <div class="move-list-container">
      <div class="move" :class="setStripedLine()" v-for="(move, index) in moveListSorted" :key="index">
        <div class="name-move">{{ capitalize(move.name) }}</div>
        <div class="level-move">{{ move.level }}</div>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    moveList:{
      type: Array
    }
  },
  data(){
    return {
      moveListLocal: [],
      striped: 1
    }
  },
  created() {
    this.moveListLocal = [...this.moveList]
  },
  computed:{
    moveListSorted(){
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      let newMoveList = []
      this.moveListLocal.forEach(move => {
        if(move.level >= 1){
          newMoveList.push(move)
        }
      })

      return Object.assign([], newMoveList.sort((a, b) => (a.level > b.level) ? 1 : -1))
    }
  },
  methods:{
    capitalize(str){
      let firstLetter = str.charAt(0)
      let restString = str.substring(1, str.length)
      return firstLetter.toUpperCase() + restString
    },
    setStripedLine(){
      let style = {}
      if(this.striped % 2 == 0){
        style = {'striped': true}
      }else{
        style = {'nonstriped': true}
      }
      this.striped++
      return style
    }
  }
}
</script>

<style>
.move-list-container{
 width: 100%;
}

.name-move{
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Calibri";
  width: 200px;
}

.level-move{
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Calibri Light";
}

.move{
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-radius: 4px;
  padding: 10px;
}

.nonstriped{
  background-color: whitesmoke;
}

.striped{
  background-color: navajowhite;
}
</style>
