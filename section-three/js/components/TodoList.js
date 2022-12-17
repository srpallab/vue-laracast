export default {
    template: `
	<h1 class="text-lg font-bold" v-show="todos.length">{{ title }}</h1>
        <ul>
 	    <label v-for="todo in todos" :key="todo.id"  class="flex">
		<input type="checkbox" v-model="todo.complete" />
		<li class="ml-2" >{{ todo.name }}</li>
	    </label>
        </ul>
    `,
    props: {
	todos: Array,
	title: String
    }
}
