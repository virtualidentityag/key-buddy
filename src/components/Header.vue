<template>
  <div class="header">
    <header>
      <nav>
        <ul>
          <li class="header__key">
            <router-link to="/home">home</router-link>
          </li>
          <li class="header__logout">
            <router-link to="/logout">logout</router-link>
          </li>
          <li class="header__settings">
            <router-link to="/settings">settings</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  margin: 0;
  padding: 15px 15px 30px 10px;
  color: #fff;
  border-bottom: 1px solid #fff;
}
li {
  float: left;
  list-style: none;
  padding: 0 5px;
}
.header__logout,
.header__settings {
  float: right;
}
</style>
