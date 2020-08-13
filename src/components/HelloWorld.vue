<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <span class="span-test">span din Hello World</span>
    <button @click="clicked">Buton din hello</button>
    <keep-alive>
      <component :is="currentComponent" :prp="5">acesta este un div</component>
    </keep-alive>
    <CompWithSlot>
      <p slot="footer">Pentru footer</p>
      <p>din hello</p>
      <p slot="title">Pentru title</p>
      <p>din hello</p>
    </CompWithSlot>
  </div>
</template>

<script>
  // import Global from "../Global";
  import CompWithSlot from "@/components/CompWithSlot";
  import Comp from "@/components/Comp";

export default {
  name: 'HelloWorld',
  components: {
    CompWithSlot,
    Comp
  },
  props: {
    msg: {
      type: String
    },
    test: {
      type: Number,
      default: 10
    },
    arr: {
      type: [Array, Object],
      default: () => []
    }
  },
  data() {
    return {
      myValue: 'valoare',
      currentComponent: 'CompWithSlot'
    }
  },
  methods: {
    testMethod() {
      console.log('FROM HELLO WORLD');
    },
    clicked() {
      console.log(this.$store);
      this.$store.dispatch('setCounter', 5)
      .then(() => {
        console.log('am terminat');
      });
      // Global.$emit('updateValue', 5);
      this.$emit('updateValue2', 5);
      this.currentComponent = 'Comp';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

  .span-test {
    color: blue;
  }
</style>
