<template>
   <div class="box">
     <h3>NEWS 2</h3>
     <ObservationSet :observation-set="observations"/>
     <span id="reset" @click="reset">Reset</span>
   </div>
</template>

<script>
import RespirationRate from '../score/RespirationRate'
import HeartRate from '../score/HeartRate'
import News2 from '../score/News2'
import ObservationSet from '@/components/ObservationSet'

export default {
  name: 'Table.vue',
  components: { ObservationSet },
  data () {
    return {
      observations: new News2()
    }
  },
  methods: {
    reset () {
      this.observations = new News2()
    }
  }
}
</script>

<style scoped>
.box {
  border: 1px solid grey;
  border-radius: 5px;
  padding: 1em;
  box-shadow: 0 0 10px #838A8A;
}

h3 {
  margin: 0.2em 0;
}

#reset {
  display: inline-block;
  background-color: #4274ba;
  color: #FFF;
  font-size: 0.8em;
  padding: 0.3em 1em;
  border-radius: 2px;
  cursor: pointer;
}
</style>
