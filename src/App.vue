<template>
  <div id="app">
    <div id="container">
      <div id="textfield">
        <textarea v-model="text"></textarea>
      </div>
      <div id="result">
        <div class="list-item" v-for="token in tokens">
          <span class="list-item-token">{{ token.val }}</span><span class="list-item-type">{{ token.type }}</span>
        </div>
      </div>
    </div>
    <div id="runbtn" v-on:click="analyze">Run</div>
  </div>
</template>

<script>
import { getAnalyzed } from './lex-analyzer'

export default {
  name: 'app',
  data () {
    return {
      text: '',
      tokens: []
    }
  },
  methods: {
    analyze: function () {
      this.tokens = getAnalyzed ( this.text );
    }
  }
}
</script>

<style>

#container {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

#textfield {
  display: inline-block;
  width: 40%;
  height: 30rem;
  border: 2px solid gray;
}

#textfield textarea {
  width: 99%;
  height: 99%;
  border: none;
  resize: none;
  outline: none;
}

#result {
  display: inline-block;
  width: 40%;
  height: 30rem;
  border: 2px solid gray;
  overflow: auto;
}

.list-item {
  border: 1px solid lightgray;
  width: 100%;
  height: 1.6rem;
  line-height: 1.6rem;
  box-sizing: border-box;
}

.list-item-token {
  float: left;
  margin-left: 1rem;
}

.list-item-type {
  float: right;
  margin-right: 1rem;
}

#runbtn {
  color: #fff;
  background-color: grey;
  width: 6rem;
  line-height: 2rem;
  font-size: larger;
  text-align: center;
  margin: 2rem auto;
  cursor:default;
}

#runbtn:hover {
  background-color: #585857;
}

</style>
