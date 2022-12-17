import TodoList from './TodoList.js';

export default {
    components: { TodoList },
    template: `
	<todo-list :todos="filter.inProgress" title="TODO Works"></todo-list>
	<todo-list :todos="filter.complete" title="Completed Works"></todo-list>
    `,
    
    data() {
	let jobs = [
	    { name: "Learn Vue JS from Laracast", complete: false, id: 1 },
	    { name: "Vue JS MAP With Firebase", complete: false, id: 2 },
	    { name: "Domain Name verify", complete: false, id: 3 },
	    { name: "Windmill downloads button remove", complete: false, id: 4},
	    { name: "Vacsine card Download", complete: false, id: 5},
	];
	return {jobs}
    },
    computed: {
	filter(){
	    return {
		inProgress: this.jobs.filter(jobs => !jobs.complete),
		complete: this.jobs.filter(jobs => jobs.complete)
	    }
	}
    }
}
