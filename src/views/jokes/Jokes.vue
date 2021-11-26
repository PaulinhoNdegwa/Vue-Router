<template>
  <h3>Briliant Jokes</h3>
  <div class="jokes">
    <JokeDetails
      v-for="joke in myjokes"
      :key="joke.id"
      :joke="joke"
      @click="viewJokeDetails(joke)"
    />
  </div>
</template>

<script>
import JokeDetails from "./JokeCard.vue";
import jokes from "../../data";

export default {
  components: {
    JokeDetails,
  },
  data() {
    return {
      myjokes: jokes,
    };
  },
  methods: {
    viewJokeDetails(joke) {
      this.$router.push({
        name: "JokeDetails",
        params: { id: joke.id , joke: joke},
      });
    },
  },
};
</script>

<style>
.jokes {
  padding: 20px 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
</style>