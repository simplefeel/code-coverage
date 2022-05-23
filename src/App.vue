<template>
  <div>sss <HelloWorld message="hello world"></HelloWorld></div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111;
  margin: 20% auto;
}

@media only screen and (min-width: 768px) {
  #app {
    margin: 5% auto;
  }
}
</style>
