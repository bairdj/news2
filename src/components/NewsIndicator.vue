<template>
    <div class="score" v-bind:class="scoreClass">
      {{ score }}
    </div>
</template>

<script>
export default {
  name: 'NewsIndicator',
  props: {
    score: Number
  },
  computed: {
    scoreClass () {
      if (this.score >= 3) {
        return 'red'
      } else if (this.score === 2) {
        return 'orange'
      } else if (this.score === 1) {
        return 'yellow'
      }
      return 'white'
    }
  }
}
</script>

<style scoped>
  .score {
    display: inline-block;
    font-size: 1.3em;
    font-weight: bold;
    padding: 7px;
    border: 1px solid black;
    border-radius: 2px;
  }
  .red {
    background-color: #f59681;
  }

  .orange {
    background-color: #fdc889;
  }

  .yellow {
    background-color: #fff1ab;
  }

  .white {
    background-color: white;
  }
</style>
