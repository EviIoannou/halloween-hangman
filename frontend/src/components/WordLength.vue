<template>
<div v-if="word">
    <table>
        <tr>
            <!-- plats att fylla i bokstäver för framtida spelet -->
            <!-- <td :key="letter" v-for="letter in word">{{letter}}</td> -->
        </tr>
        <tr>
        <td :key="letter" v-for="letter in word">_</td>
        </tr>
    </table>
    </div>
</template>

<script>
export default {
    created() {
        fetch("http://localhost:3000/word")
        .then(response => response.json())
        .then(result => {
            this.word = result;
            // console.log(result);
        });
    },
    data() {
        return {
        word: [],
        };
    },
  name: "WordLength",
};
</script>

<style scoped>
    td{
        padding-left: 10px;
        font-size: xx-large;
    }
</style>