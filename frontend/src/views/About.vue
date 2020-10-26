<template>
  <div class="about">
    <h1>This is an about page</h1>
    <li v-for="player in players" :key="player.id">
      {{ player.name }}
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      players: this.$route.query.players
    }
  }
}
</script>

<style>
.about {
  color: black;
}
</style>
