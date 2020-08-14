<template>
  <div id="app" >
    <img alt="Vue logo" :class="{'my-class': (showSpan && true)}" :style="{background: showSpan ? '#000':'transparent'}" :src="src">
    <HelloWorld :msg="message" ref="helloWorld" @updateValue2="updateValue" />
    {{message}}
    {{computedText}}
    <button @click="changeText()">Change text</button>
    <span class="span-test" v-if="showSpan">span din APP</span>
    <ul>
      <li v-for="(number, index) in numbers" :key="number">{{number}} - {{index}}</li>
    </ul>
    <ul>
      <li v-for="(ob, key) of obj" :key="key">{{ob}} - {{key}}</li>
    </ul>
    <template v-for="number in numbers">
      <div :key="number">
        <span >acest div {{number}}</span>
        <span >acest div 2 {{number}}</span>
      </div>
    </template>
    <div ref="myDiv">
      {{valInput}}
      <input  type="text" placeholder="text aici" v-model="valInput">
      <input  type="checkbox" :value="number" v-model="checkboxValue" v-for="number in numbers" :key="number">
    </div>
    <Comp :prp="prp" />
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld';
  import Comp from './components/Comp';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Comp
  },
  data() {
    return {
      message: 'My message',
      secondText: ' second text',
      src: './assets/logo.png',
      showSpan: true,
      numbers: [1, 2, 3],
      obj: {
        id: 1,
        name: 'Num de test'
      },
      valInput: '',
      checkboxValue: [],
      prp: 0
    }
  },
  methods: {
    changeText() {
      this.message = 'Altceva';
      this.showSpan = false;
    },
    updateValue(val) {
      this.prp = val;
    }
  },
  computed: {
    computedText() {
      return this.message + this.secondText;
    }
  },
  watch: {
    message(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  },
  created() {
    console.log('created');
    console.log(this.$store);
  },
  mounted() {
    console.log('mounted');
  },
  destroy() {
    console.log('destroy');
  },
  updated() {
    console.log('updated');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
