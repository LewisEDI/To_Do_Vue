import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: "#app",
		data: {
			todos: [
				{task: "Buy shopping", isComplete: false, isHighPri: false},
				{task: "Clean bathroom", isComplete: false, isHighPri: true},
				{task: "Car's MOT", isComplete: false, isHighPri: true}

			],
			newTask: "",
      priority: false
		},
		methods: {
				saveNewTask: function() {
					this.todos.push({
						task: this.newTask,
						isComplete: false,
            isHighPri: this.priority
					});
					this.newTask = "";

				},
				completeTask: function(index) {
					this.todos[index].isComplete = true;
				}
		}
	});
});
