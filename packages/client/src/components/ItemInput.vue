<template>
  <div>
    <input class="item-input" placeholder="add to list" v-model="itemTitle" v-on:keyup="name"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ListItem from './ListItem';
import { ADD } from '../store/actions';

export default {
  name: 'item-input',
  data() {
    return {
      itemTitle: '',
    }
  },
  methods: {
    name: function(e) {
      if(e.code === 'Enter'){
        this.$store.dispatch(ADD, this.itemTitle)
      }
    }
  },
};
</script>

<style scoped>
.item-input {
  width: calc(100% - 33px);
  background: #EEE;
  font-size: 18px;
  padding: 10px;
  outline: none;
  margin: 10px 5px 5px 5px;
  border: 1px solid #ddd
}
</style>