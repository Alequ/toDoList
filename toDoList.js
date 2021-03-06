var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function () {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    //Get number of completed todos
    for (var i = 0; i <totalTodos; i++){
      if (this.todos[i].completed ===true){
        completedTodos++;
      }
    }
    //case 1: If everything it's true, make everything false
    if (completedTodos === totalTodos) {
      for (var i = 0; i <totalTodos; i++){
        this.todos[i].completed = false;
        }
    //case 2: Otherwise,make everything true
      }  else {
        for (var i = 0; i<totalTodos; i++){
          this.todos[i].completed = true;
      }
    }
  }

};

var handlers = {
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  },
  addTodo: function(){
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
  },
  changeTodo: function(){
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoTextInput.value = "";
    changeTodoPositionInput = "";
    view.displayTodos();
  },
  deleteTodo: function(){
    var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput= "";
    view.displayTodos();
  },
  toggleCompleted: function(){
    var toggleCompletedInput = document.getElementById("toggleCompletedInput");
    todoList.toggleCompleted(toggleCompletedInput.valueAsNumber);
    toggleCompletedInput="";
    view.displayTodos();
  }

};

var view = {
  displayTodos: function() {
      var todosUl = document.querySelector("ul");
      todosUl.innerHTML="";
      for(var i = 0; i<todoList.todos.length; i++){
        var todoLi = document.createElement("li");
        var todo = todoList.todos[i];
        var todoTextWithCompletition = "";

        if(todo.completed === true){
          todoTextWithCompletition= "(x) "+ todo.todoText;
        } else {
          todoTextWithCompletition= "( ) "+ todo.todoText;
        }

        todoLi.id = i;
        todoLi.textContent = todoTextWithCompletition;
        todoLi.appendChild(this.createDeleteButton());
        todosUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function(){
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  }
};
