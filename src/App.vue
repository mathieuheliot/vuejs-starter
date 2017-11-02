
<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <input type="text" v-model="title" placeholder="Change your title" />
    <button type="button" v-on:click.once="callMethod">Tell me</button>
    <h2>My tasks</h2>
    <ul class="tasks">
      <li v-for="task in tasks">
        <span class="task task--date" v-if="task.label === 'Date with Pamela'">
          {{ task.label }}
        </span>
        <span class="task" v-else>
          {{ task.label }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

    data: function() {
      return {
          title: 'Title de mon application',
          tasks: [
            { label: 'Clean my room' },
            { label: 'Go to grocery' },
            { label: 'Date with Pamela' },
            { label: 'Go to restroom' }
          ]
      }
    },

    methods: {

      callMethod: function( event ) {
        alert('Hello : ' + this.title)
      }
    }
}
</script>

<style lang="scss">
#app {
    text-align: center;

    .tasks {
      text-align: left;
      color: blue;

      .task.task--date {
        color: red;
      }
    }
}
</style>
