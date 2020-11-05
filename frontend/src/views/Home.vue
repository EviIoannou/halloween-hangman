<template>
  <div class="home">
    {{/* BEM */}}
    <div class="home__title">
      <h1>😈 Halloween Hängagubbe 😈</h1>
      <p>
        Välkommen till Halloween Hängagubbe. Detta är en spökig upplevelse och
        ta dig an och möt din vän.
      </p>
    </div>
    <div class="home__cont">
      <div class="home__content">
        <h1>
          🦇🎃 Välj namn 🎃🦇
        </h1>
        <div class="home__inputs">
          <span>
            Spelare 👻
          </span>
          <input type="text" id="playerArea" name="player" v-model="playerName" placeholder="Användarnamn" />
        </div>
      </div>
      <button class="home__button" :disabled="!playerName" @click="startGame(playerName)">
        Start game
      </button>
      <button class="home__button" :disabled="!playerName" @click="joinGame(playerName)">
        Join game
      </button>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Home',

    data() {
      return {
        playerName: ''
      }
    },
    methods: {
      async startGame(player) {
        document.getElementById('playerArea').value = ''
        // document.getElementById('playertwo').value = ''
        await this.socket.emit('start-game', player)
        await console.log('sendning player' + player)
        await this.socket.on('created-game', gameId => {
          this.$router.push({
            path: 'game',
            query: {
              game: gameId
            }
          })
        })

      }
    },
    props:['socket']
  }

</script>

<style scoped>
  .home {
    height: 100%;
    background-image: url('../assets/halloween.png');
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    background-size: cover;
    flex-direction: column;
  }

  .home__title {
    height: 20%;
    color: #e56400;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  .home__title>h1 {
    padding-bottom: 50px;
  }

  .home__cont {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }

  .home__content {
    width: 600px;
    border: 2px solid #e56400;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.241);
    padding: 100px;
  }

  .home__content>h1 {
    margin-bottom: 3rem;
    text-align: center;
    color: #e56400;
  }

  .home__inputs {
    width: 100%;
    align-items: center;
    margin-bottom: 10px;
    display: flex;
  }

  .home__inputs>span {
    font-size: 20px;
    color: #e56400;
    font-weight: bold;
    width: 40%;
  }

  .home__inputs>input {
    padding: 15px;
    border: none;
    border-radius: 4px;
    background-color: black;
    color: orange;
  }

  .home__button {
    margin-top: 1rem;
    padding: 1.5rem;
    background-color: #e56400;
    color: black;
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 4px 4px 4px rgba(82, 36, 31, 0.5);
    border-radius: 4px;
  }
</style>

const lte = (num) => { prop(från wrongcount ex) props.wrongcount >= num }