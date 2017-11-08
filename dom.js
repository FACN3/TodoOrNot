// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function () {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');
  console.log
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
    var editStatus
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
    //add deleteButton functionality

    addDetails.appendChild(addDescription);
    addDetails.appendChild(editButton);
    addDetails.appendChild(deleteButton);
    todoNode.appendChild(addDetails);
    // this adds the delete button. PROVIDED FUNCTION
    // var deleteButtonNode = document.createElement('button');
    // deleteButtonNode.addEventListener('click', function (event) {
    //   var newState = todoFunctions.deleteTodo(state, todo.id);
    //   update(newState);
    // });
    // addDetails.appendChild(deleteButtonNode);
    // add markTodo button
    // add classes for css
    return todoNode;
  };

  // (function foo() {
  // })()
  // var foo = (function(){
  //
  // })()
  // foo;

  // bind create todo form
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
