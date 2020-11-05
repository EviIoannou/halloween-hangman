<template>
  <div id="app">
    <router-view :socket="ws"></router-view>
  </div>
</template>
<script>
import io from 'socket.io-client';
    export default{
        data () {
            return {
            ws: null
            }
        },
        created () {
            this.ws = io('http://localhost:3000')
            this.ws.on('connect', () => {
            console.log('Connected')
            })
        },
        name: "App" 
    }

</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
}

#app h1, h2{
  font-family: 'Julee', sans-serif;
}

#app button, input {
  font-family: 'Montserrat', sans-serif;
}
</style>
