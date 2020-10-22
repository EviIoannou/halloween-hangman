<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <WordLength amount="3"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import WordLength from "@/components/WordLength.vue";


export default {
  name: "Home",
  components: {
    HelloWorld,
    WordLength
  }
};
</script>
