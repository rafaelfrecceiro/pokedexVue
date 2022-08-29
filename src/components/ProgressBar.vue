<template>
  <div class="container-bar">
    <div class="label-bar">{{ label }}</div>
    <div class="bar">
      <div class="bar-fill" :style="setStyle"></div>
      <div class="value-bar">{{ value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: Number
    },
    maxValue: {
      type: Number,
      default: 200
    },
    color:{
      type: String,
      default: 'orange'
    }
  },
  computed: {
    setStyle() {
      let perc = (100 * this.value) / this.maxValue
      return {'width': perc + '%', 'background-color': this.color}
    },
  }
}
</script>

<style scoped>
.container-bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
}

.bar {
  width: 200px;
  height: 30px;
  border-radius: 7px;
  background-color: whitesmoke;
  position: relative;
  box-shadow: 2px 2px dimgray;
}

.bar-fill {
  height: 100%;
  border-radius: 7px 0px 0px 7px;
}

.value-bar {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.label-bar {
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 1px 1px lightslategrey;
}

@media (max-width: 600px){
  .bar {
    width: 100px;
    height: 25px;
    border-radius: 7px;
    background-color: whitesmoke;
    position: relative;
    box-shadow: 2px 2px dimgray;
  }

  .label-bar {
    font-size: 1rem;
    font-weight: bold;
    text-shadow: 1px 1px lightslategrey;
  }

  .value-bar {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.2rem;
  }
}
</style>
