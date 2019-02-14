<template>
  <div class="header">
    <header>
      <nav>
        <ul>
          <li class="header__key">
            <router-link to="/" class="header__link">home</router-link>
          </li>
          <li class="header__logout">
            <router-link to="/logout" class="header__link">logout</router-link>
          </li>
          <li class="header__settings">
            <router-link to="/settings" class="header__link">settings</router-link>
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
  border-bottom: 1px solid #fff;
}
li {
  float: left;
  list-style: none;
  padding: 0 5px;
}
.header__link {
  color: #fff;
  text-decoration: none;
}
.header__logout,
.header__settings {
  float: right;
}
</style>
