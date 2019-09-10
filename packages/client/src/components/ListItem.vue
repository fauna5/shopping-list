<template>
  <div class="list-item" >
    <input type="checkbox" :checked="complete" v-on:click="updateStatus"/>
    <h2 :class="{strikethrough: this.complete}">{{this.title}}</h2>
  </div>
</template>

<script>
import { UPDATE } from '../store/actions';
export default {
  name: 'list-item',
  props: {
    title: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    updateStatus() {
      this.$store.dispatch(UPDATE, { id: this.id, complete: !this.complete });
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0px;
}
.list-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px lightgray solid;
  margin: 4px 0px;
}
.list-item:hover {
  background: #eeeeee;
}
.list-item > input {
  transform: scale(1.4);
  cursor: pointer;
}
.list-item > h2 {
  font-size: 20px;
  font-weight: normal;
  padding-left: 10px;
}
.strikethrough {
  text-decoration: line-through;
}
</style>