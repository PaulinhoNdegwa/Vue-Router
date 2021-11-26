<template>
  <div class="joke-details">
    <h3 style="text-decoration: underline">Joke Details</h3>
    <p>Joke Id: {{ jokeId }}</p>
    <button @click="back">Back</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jokeId: this.$route.params.id,
    };
  },
  methods: {
    back(){
      this.$router.back()
    }
  }
};
</script>

<style>
.joke-details  button{
  margin: 10px 15px;
  display: inline-block;
  color: #fff;
  background: #058d3e;
  border: 0;
  padding: 5px 10px;
  border-radius: 3px;
}
</style>