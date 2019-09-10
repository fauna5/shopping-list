<template>
  <div id="app">
    <div class="conatiner">
      <div class="header">
        <img src="./assets/logo.svg"/>
        <h1>Shopping List</h1>
      </div>
      <item-input/>
      <list class="list"/>
    </div>
  </div>
</template>

<script>
import List from './components/List';
import ItemInput from './components/ItemInput';

export default {
  name: 'app',
  components: {
    ItemInput,
    List,
  },
};
</script>

<style scoped>
  .conatiner {
    max-width: 600px;
    margin: auto;
  }
  .header {
    height: 40px;
    background-color: #1795d4;
    color: #dff9ff;
    font-size: 12px;
    font-weight: normal;
    position: relative;
  }
  .header h1 {
    text-align: center;
    margin: 0px;
    padding-top: 7px;
  }
  .header img {
    height: 25px;
    position: absolute;
    top: 8px;
    left: 5px;
  }
</style>
