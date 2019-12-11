<template>
  <div class="observation">
    <span class="label">{{ observation.label }}</span>
    <div class="inputRow">
      <input v-if="type === 'numeric'" type="number" v-model="observation.observation" min="0">
      <template v-if="type === 'selection'">
        <div class="options">
          <template v-for="option in observation.options">
            <label v-bind:key="option.label">
              <input type="radio" v-model="observation.selection" :value="option"/>
              {{ option.label }}
            </label>
          </template>
        </div>
      </template>
      <template v-if="type === 'spo2'">
        <div style="flex-grow: 1">
          <div class="scaleWrapper">
            <select v-model="observation.scale">
              <option :value="1">Scale 1</option>
              <option :value="2">Scale 2</option>
            </select>
            <input type="number" v-model="observation.observation" max="100">
          </div>
          <label><input type="checkbox" v-model="observation.oxygen"/> Oxygen</label>
          </div>
      </template>
      <NewsIndicator :score="observation.getScore()" class="news"/>
    </div>
  </div>
</template>

<script>
import NewsIndicator from './NewsIndicator'
import Observation from '../score/Observation'
import NumericObservation from '@/score/NumericObservation'
import SelectionObservation from '@/score/SelectionObservation'
import Spo2Observation from '@/score/Spo2Observation'

export default {
  name: 'Observation',
  props: {
    observation: Observation
  },
  computed: {
    type () {
      if (this.observation instanceof Spo2Observation) {
        return 'spo2'
      } else if (this.observation instanceof NumericObservation) {
        return 'numeric'
      } else if (this.observation instanceof SelectionObservation) {
        return 'selection'
      }
      return null
    }
  },
  components: { NewsIndicator }
}
</script>

<style scoped>
  input {
    font-size: 1.3em;
    flex-grow: 1;
    padding-left: 0.3em;
  }

  .inputRow {
    display: flex;
    justify-content: space-between;
  }

  .news {
    flex-shrink: 1;
    justify-self: flex-end;
    align-self: flex-start;
  }

  .label {
    font-size: 1em;
    margin-bottom: 0.3em;
    display: inline-block;
  }

  .observation {
    margin-bottom: 1em;
  }

  .options {
    display: flex;
    flex-direction: row;
    align-self: center;
  }

  .scaleWrapper {
    display: flex;
    align-items: stretch;
  }
</style>
