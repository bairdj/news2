<template>
  <div id="app">
    <Table class="table"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Table from './components/Table.vue'

@Component({
  components: {
    Table
  }
})
export default class App extends Vue {}
</script>

<style>
body, html {
  font-family: 'Segoe UI', sans-serif;
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

body, html {
  margin: 0;
  padding: 0;
}
</style>
