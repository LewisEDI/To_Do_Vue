import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: "#app",
		data: {
			todos: [
				{task: "Buy shopping", isComplete: false},
				{task: "Clean bathroom", isComplete: false},
				{task: "Car's MOT", isComplete: false}

			],
			newTask: ""
		},
		methods: {
				saveNewTask: function() {
					this.todos.push({
						task: this.newTask,
						isComplete: false
					});
					this.newTask = "";

				},
				completeTask: function(index) {
					this.todos[index].isComplete = true;
				}
		}
	});
});
