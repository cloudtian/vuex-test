<template>
    <div>
        <ul>
            all todos: 
            <li v-for="todo in todos" :key="todo.id">
                {{todo.text}}
            </li>
        </ul>
        <ul>
            已完成的todos:
            <li v-for="todo in doneTodos" :key="todo.id">
                {{todo.text}}
            </li>
        </ul>
        <div>已完成的todos个数：{{doneTodosCount}}</div>
        <div>获取id=2的数据：{{getTodoById(2)}}</div>
    </div>
</template>
<script>
import {mapGetters, mapState} from 'vuex';

export default {
  name: 'Todos',

//   computed: {
//       todos () {
//           return this.$store.state.todos;
//       },
//       doneTodos () {
//           return this.$store.getters.doneTodos;
//       },
//       doneTodosCount () {
//           return this.$store.getters.doneTodosCount;
//       }
//   },

  // 使用mapGetters获取getter属性
  computed: {
      ...mapState([
          'todos'
      ]),
      ...mapGetters([
         'doneTodos',
         'doneTodosCount'            
      ])
  },

  methods: {
      getTodoById (id) {
          return this.$store.getters.getTodoById(id);
      }
  }
};
</script>
