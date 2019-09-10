<template>
  <div>
    <ul class="shopping-list">
      <!-- TODO handle empty state -->
      <li v-for="item in this.list" :key="item.title">
        <list-item
          :title="item.title"
          :complete="item.complete"
          :id="item.id"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ListItem from './ListItem';

export default {
  name: 'list',
  components: {
    ListItem,
  },
  computed: {
    ...mapState({
      list: state => state.list,
    }),
  },
};
</script>

<style scoped>
.shopping-list {
  list-style-type: none;
  padding: 0px;
  margin: 0px 5px;
}
</style>