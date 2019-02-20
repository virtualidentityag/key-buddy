<template>
  <div class="inputToggle">
    <label class="inputToggle__switch">
      <input class="inputToggle__input" type="checkbox">
      <span class="inputToggle__slider inputToggle__slider--round"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "InputToggle"
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.inputToggle__switch {
  position: relative;
  display: inline-block;
  width: 65px;
  height: 37px;
}

.inputToggle__input {
  opacity: 0;
  width: 0;
  height: 0;
}

.inputToggle__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
}

.inputToggle__slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: rgba(247, 247, 247, 0.555);
  transition: 0.4s;
}

.inputToggle__input:checked + .inputToggle__slider:before {
  background: linear-gradient(to top right, #ffbc8f, #ff82c4, #ff4ff1);
}

.inputToggle__input:focus + .inputToggle__slider {
  box-shadow: 0 0 1px #2196f3;
}

.inputToggle__input:checked + .inputToggle__slider:before {
  transform: translateX(26px);
}

/* Rounded slider */
.inputToggle__slider--round {
  border-radius: 34px;
  border: 2px solid #fff;
}

.inputToggle__slider--round:before {
  border-radius: 50%;
}
</style>
