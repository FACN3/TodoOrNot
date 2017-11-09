// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function () {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');
  // var editTodoForm = document.getElementsByClassName('edit-todo');
  var editTodoForm = document.getElementsByClassName('edit-todo');


  var state = [
    {
      id: -3, title: 'first todo', description: 'first todo'
      , complete: false
    },
    {
      id: -2, title: 'second todo', description: 'second todo'
      , complete: false
    },
    {
      id: -1, title: 'third todo', description: 'third todo'
      , complete: false
    },
  ]; // this is our initial todoList

  // This function takes a todo,
  //it returns the DOM node representing that todo
  var createTodoNode = function (todo) {
    var todoNode = document.createElement('li');
    //add id??
    //add checkbox (event listener)
    var checkBox = document.createElement('input');
    checkBox.type ='checkbox';
    checkBox.id = todo.id;
    checkBox.classList.add('checkbox');
    checkBox.addEventListener('click', function(){
    var newstate = todoFunctions.markTodo(state, todo.id);
    update(newstate);
    document.getElementById(todo.id).checked = document.getElementById(todo.id).checked ? false : true;
  });
    todoNode.appendChild(checkBox);


    // add title
    var nodeTitle = document.createElement('h2');
    nodeTitle.classList.add('todoTitle');
    var titleText = document.createTextNode(todo.title);
    nodeTitle.appendChild(titleText);
    todoNode.appendChild(nodeTitle);

    // add span holding description
    var addDetails = document.createElement('details');
    var addDescription = document.createTextNode(todo.description);


    var editButton = document.createElement('button');
    editButton.classList.add('editButton');
    var editButtonText= document.createTextNode('edit');
    editButton.appendChild(editButtonText);
      //add editButton functionality

    var deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    var deleteButtonText = document.createTextNode('delete');
    deleteButton.appendChild(deleteButtonText);
    console.log(todo);
    deleteButton.addEventListener('click', function (event) {

      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });

    addDetails.appendChild(addDescription);
    addDetails.appendChild(editButton);
    addDetails.appendChild(deleteButton);

    var editTodo = document.createElement('form');
    editTodo.id="edit-todo";
    editTodo.classList.add('edit-todo');
    var editTitle = document.createElement('input');
    editTitle.type="text";
    editTitle.id="editTitle"+todo.id;
    editTodo.appendChild(editTitle);
    var editDescription = document.createElement('input');
    editDescription.type="text";
    editDescription.id="editDescription"+todo.id;
    editTodo.appendChild(editDescription);
    var editButton = document.createElement('input');
    editButton.type = "submit";
    editButton.value = "edit";
    editTodo.appendChild(editButton);

    editButton.addEventListener('click', function (event) {

      editObj={"id":todo.id,"title":document.getElementById('editTitle'+todo.id).value,
      "description":document.getElementById('editDescription'+todo.id).value,
      "complete": todo.complete}
      event.preventDefault();
      var newState = todoFunctions.editTodo(state, todo.id,editObj);
      update(newState);

    });

    addDetails.appendChild(editTodo);
    todoNode.appendChild(addDetails);

    return todoNode;
  };

  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      var title = document.getElementById('formTitle').value; // event.target ....
      document.getElementById('formTitle').value = '';
      var description = document.getElementById('formDescription').value;
      document.getElementById('formDescription').value = '';
      console.log(title + description);

      var newArray = {id : todoFunctions.generateId(), title : title,
      description : description, complete: false};

      // hint: todoFunctions.addTodo
      var newState = todoFunctions.addTodo(state,newArray); // ?? change this!
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function (newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function (state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function (todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
