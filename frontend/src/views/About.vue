<template>
  <div class="about">
    <h1>This is an about page</h1>
    <li v-for="player in players" :key="player.id">
      {{ player.name }}
    </li>
    <!-- Testing component with letter buttons and validation; will be in "game.vue" later -->
    <WordValidation />
  </div>
</template>

<script>
  import WordValidation from "@/components/WordValidation.vue"
export default {
      components: {
      WordValidation
    },
    name: "About",
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

