<template>
  <div id="app">
    {{/* BEM */}}
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
}

#app {
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-color: rgb(9, 62, 111);
}
</style>
