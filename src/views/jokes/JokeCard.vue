<template>
  <div class="joke" :class="{'unsafe': !joke.safe}" >
    <p>{{ joke.setup }}</p>
    <span>{{ joke.delivery }}</span>
  </div>
</template>

<script>
export default {
    props: ['joke']
}
</script>

<style>
.joke {
  border: 1px #888 solid;
  border-radius: 5px;
  width: 250px;
  margin: 15px 15px;
  padding: 10px 15px;
}
.joke p {
  font-weight: 600;
}
.joke span {
  font-style: italic;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 10px;
}
.unsafe {
    border: 1px crimson solid;
}
</style>