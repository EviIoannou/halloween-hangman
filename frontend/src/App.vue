<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  height: 100vh;
  /* background-image: url('./assets/bg.jpg'); */
  background-repeat: no-repeat;
  width: 100%;
  background-position: center;
  background-size: cover;
  font-family: 'Montserrat', sans-serif;
}

#app h1{
  font-family: 'Julee', sans-serif;
}

#app button {
  font-family: 'Montserrat', sans-serif;
}
</style>
