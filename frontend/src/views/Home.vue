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
      <select
        name="gameGenre"
        v-model="selected"
        :required="true"
        @change="selectGenre($event)"
      >
        <option :selected="true">Välj genre</option>
        <option v-for="option in pickGenre" :value="option">{{
          option
        }}</option>
      </select>
      <div class="home__content">
        <h1>
          🦇🎃 Välj namn 🎃🦇
        </h1>
        <div class="home__inputs">
          <span>
            Spelare Ett 👻
          </span>
          <input
            type="text"
            id="playerone"
            name="player"
            v-model="players[0].name"
            placeholder="Spelare ett"
          />
        </div>
        <div class="home__inputs">
          <span>
            Spelare Två 👻
          </span>
          <input
            type="text"
            id="playertwo"
            name="player"
            v-model="players[1].name"
            placeholder="Spelare två"
          />
        </div>
      </div>
      <button
        class="home__button"
        :disabled="!players[0].name"
        @click="startGame(players)"
      >
        Start game
      </button>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "Home",

  data() {
    return {
      players: [
        { name: "", id: uuidv4() },
        { name: "", id: uuidv4() },
      ],
      pickGenre: ["halloween", "sport", "tv"],
      selected: "Välj genre",
      pick: "",
    };
  },
  methods: {
    selectGenre(e) {
      const pick = e.target.value;

      if (pick === "halloween") {
        console.log((this.pick = pick));
      } else if (pick === "sport") {
        console.log((this.pick = pick));
      } else if (pick === "tv") {
        console.log((this.pick = pick));
      }
    },
    startGame(players) {
      document.getElementById("playerone").value = "";
      document.getElementById("playertwo").value = "";
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ genre: this.pick }),
      };
      fetch("http://localhost:3000/word", requestOptions)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        })
        .catch((res) => console.error(res));

      localStorage.setItem("player-storage", JSON.stringify(players));
      this.$router.push({
        path: "game",
        query: { players: players },
      });
    },
  },
};
</script>

<style scoped>
.home {
  height: 100%;
  background-image: url("../assets/halloween.png");
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
.home__title > h1 {
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
.home__content > h1 {
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

.home__inputs > span {
  font-size: 20px;
  color: #e56400;
  font-weight: bold;
  width: 40%;
}

.home__inputs > input {
  padding: 15px;
  border: none;
  border-radius: 4px;
  background-color: black;
  color: orange;
}
.home__button {
  margin-top: 5rem;
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
