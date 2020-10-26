<template>
  <div class="about">
    <h1>This is an about page</h1>
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
    name: "About"
  }
</script>