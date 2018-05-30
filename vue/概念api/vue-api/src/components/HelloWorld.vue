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
        <input type="text" name="" :value="num2">
        <button type="button" name="button" v-on:click="num2+=1">+</button>
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
      <li>
        fullName: <input v-model="fullName"> <br>
        firstName: <input v-model="firstName"> <br>
        lastName: <input v-model="lastName"> <br>
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
      num2: 0,
      firstName: '范',
      lastName: '端端'
    }
  },
  computed: {
    fullName: {
      get(){
        console.log('触发get get get 方法');
        return this.firstName + this.lastName;
      },
      set(val){//更改fullName，会触发set方法
        console.log('触发set set set 方法');
        this.firstName = val[0];
        this.lastName = val.substr(1,val.length);
      }
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
