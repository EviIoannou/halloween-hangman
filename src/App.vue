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
  flex-direction: column;
}
</style>
