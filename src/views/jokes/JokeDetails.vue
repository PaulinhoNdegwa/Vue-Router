<template>
  <div class="joke-details">
    <h3 style="text-decoration: underline">Joke Details</h3>
    <div class="joke-details-card" :class="{'unsafe': !joke.safe}">
      <h4 style="text-decoration: underline">{{ joke.category }} Joke</h4>
      <p>{{ joke.setup }}</p>
      <span>{{ joke.delivery }}</span>
      <div class="flags">
        <span class="flag" v-for="flag in Object.keys(joke.flags)" :key="flag">{{flag}}</span>
      </div>
    </div>
    <button @click="back">Back</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jokeId: this.$route.params.id,
      joke: JSON.parse(this.$route.params.joke),
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>

<style>
.joke-details button {
  margin: 10px 15px;
  display: inline-block;
  color: #fff;
  background: #058d3e;
  border: 0;
  padding: 5px 10px;
  border-radius: 3px;
}
.joke-details-card {
  border: 1px #888 solid;
  border-radius: 4px;
  width: 500px;
  margin: 0 auto;
  padding: 20px 20px;
}
.unsafe {
    border: 1px crimson solid;
}
.joke-details-card p {
  font-weight: 600;
}
.joke-details-card span {
  font-style: italic;
  font-size: 15px;
  display: inline-block;
  margin-bottom: 10px;
}
.flag {
  margin: 10px 5px;
  background: rgb(167, 166, 166);
  color: rgb(59, 59, 59);
  border-radius: 2.5px;
  padding: 2px 6px;
  font-size: 11px;
}
</style>