<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand");
body {
  margin: 0;
}
#app {
    background: linear-gradient(to top right, #a39dff, #55a7fc, #50e9be);
    font-family: "Quicksand", sans-serif;
    min-height: 100vh;
	overflow: auto;
}
#app > div {
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.container {
  /* display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 0.5fr auto 1fr;
  grid-gap: 0;
  grid-auto-rows: minmax(0, auto); */
  max-width: 768px;
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
