export default {

    template: `
	<form class="border border-gray-600 mt-10 text-black" @submit.prevent="add">
	    <input class="w-72" type="text" v-model="newTodo"  />
	    <input type="submit" value="ADD" class="px-2 text-white"/>
	</form>
    `,
    methods: {
	add(){
	    this.$emit('add', this.newTodo);
	    this.newTodo = '';
	}
    },
    data(){
	return { newTodo: '' }
    }
}
