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
body {
  margin: 0;
}
@font-face {
  font-family: "Quicksand";
  font-weight: 400;
  font-style: normal;
  src: local('Quicksand Regular'), local('Quicksand-Regular'),
       url('/quicksand-v9-latin-regular.woff2') format('woff2'),
       url('/quicksand-v9-latin-regular.woff') format('woff');
  font-display: swap;
}
#app {
    background: linear-gradient(to top right, #a39dff, #55a7fc, #50e9be);
    font-family: "Quicksand", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
