<template>
    <div>
        <form action="/">
            <div class="input">
                <label for="input1">Type in username: </label>
                <input  id="input1" placeholder="Username">
            </div>
            <div class="input">
                <label for="input2">Type in email: </label>
                <input class="input" id="input2" placeholder="Email">
            </div>
        </form>
        <p><router-link to="/">Back to home</router-link></p>
    </div>
</template>

<style>
    .input {
        margin-top: 30px;
    }
</style>