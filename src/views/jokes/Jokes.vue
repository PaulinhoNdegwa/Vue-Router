<template>
  <h3 style="text-decoration: underline;">Briliantly bad jokes</h3>
  <div v-if="!loading" class="jokes">
    <JokeDetails
      v-for="joke in jokes"
      :key="joke.id"
      :joke="joke"
      @click="viewJokeDetails(joke)"
    />
  </div>
  <div v-else class="loading">Loading jokes...</div>
  <button v-if="!loading" class="reload" @click="getJokes">Reload</button>
</template>

<script>
import JokeDetails from "./JokeCard.vue";

export default {
  components: {
    JokeDetails,
  },
  data() {
    return {
      jokes: [],
      loading: false,
    };
  },
  mounted() {
    this.getJokes();
  },
  methods: {
    getJokes() {
      this.loading = true
      fetch("https://v2.jokeapi.dev/joke/Any?type=twopart&amount=10")
        .then((res) => res.json())
        .then((data) => {
          this.jokes = data.jokes
          this.loading = false
        })
        .catch((err) => {
          console.log(err)
          this.loading = false
        });
    },
    viewJokeDetails(joke) {
      this.$router.push({
        name: "JokeDetails",
        params: { id: joke.id, joke: JSON.stringify(joke) },
      });
    },
  },
};
</script>

<style>
.jokes {
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
.loading {
    width: 400px;
    background: rgb(192, 192, 192);
    font-size: 24px;
    text-align: center;
    margin: 0 auto;
    border-radius: 3px;
    padding: 7px;
}
.reload {
    margin-bottom: 30px;
    padding: 6px 10px;
    background: #058d3e;
    border: 1px #eee;
    border-radius: 3px;
    color: white;
}
</style>