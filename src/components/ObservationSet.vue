<template>
    <div>
      <Observation v-for="observation in observationSet.observations" v-bind:key="observation.label"
      :observation="observation"/>
      <h3>Total: {{ totalScore }}</h3>
    </div>
</template>

<script>
import ObservationSet from '../score/ObservationSet'
import Observation from '@/components/Observation'

export default {
  name: 'ObservationSet',
  components: { Observation },
  props: {
    observationSet: ObservationSet
  },
  computed: {
    totalScore () {
      return this.observationSet.getTotalScore()
    }
  }
}
</script>

<style scoped>
</style>
