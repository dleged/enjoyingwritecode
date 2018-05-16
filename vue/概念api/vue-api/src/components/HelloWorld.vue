<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <input :id="'input' + num1" type="text" name="" :value="num1">
        <button type="button" name="button" @click="num1+=1">+</button>
        <button type="button" name="button" v-on:click="num1-=1">-</button>
      </li>
      <li>
          <input v-bind:id="'input' + num2" type="text" name="" :value="num2">
          <button type="button" name="button" @click="num2+=1">+</button>
          <button type="button" name="button" v-on:click="num2-=1">-</button>
        </li>
        <br/>
        <li>
          <label for="">之➕：</label><span>{{num1 + num2}}</span>
        </li>
        <li>
          <label for="">之➖：</label><span>{{num1 - num2}}</span>
        </li>
        <li>
          <label for="">之✖️：</label><span>{{num1 * num2}}</span>
        </li>
        <li>
          <label for="">之➗：</label><span>{{num2 == 0 ? 0 :num1/num2}}</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num1: 0,
      num2: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
