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
];

var deleteState = [
  {
    id: -3, title: 'first todo', description: 'first todo'
    , complete: false
  },
  {
    id: -2, title: 'second todo', description: 'second todo'
    , complete: false
  },
];

var state1 = [
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
  {
    id: 0, title: 'fourth  todo', description: 'fourth todo'
    , complete: false
  },

];

var newState = {
  id: 0, title: 'fourth  todo', description: 'fourth todo'
  , complete: false
};

var test = require('tape');
var todoFunctions = require('./logic');

test('adding one object to existing array', function(t) {
  var actual=todoFunctions.addTodo(state, newState);
  var expected = newState
  // t.equal(actual,expected,'addTodo array should have 4 objects');
  t.equal(actual[actual.length-1],newState,'addTodo array should have 4 objects')
  t.end();
});

// DELETE test

test('deleting last array from existing object', function(t){
  var actual=todoFunctions.deleteTodo(state,-1);
  var expected=deleteState.length
  t.equal(actual.length,2,'deleteTodo array should have 2 objects')
  t.end();
});

var beforeDelete = [
  {
      id: -3, title: 'first todo', description: 'first todo'
      , complete: false
    },
    {
      id: -1, title: 'third todo', description: 'third todo'
      , complete: false
    }
  ];
  var afterDelete = [
    {
        id: -3, title: 'first todo', description: 'first todo'
        , complete: false
      }
    ];
  
var idToDelte = -1;

test('deleting last array from existing object', function(t){
  var actual = todoFunctions.deleteTodo(beforeDelete,idToDelte);
  var expected = afterDelete;
  t.deepEqual(actual,expected,'deleteTodo array should have 2 objects')
  t.end();
});


/// test for markTodo



var beforeChange = [
  {
      id: -3, title: 'first todo', description: 'first todo'
      , complete: false
    },
  ];
  var afterChange = [
    ];
  
var idToChange = -3;

test('deleting last array from existing object', function(t){
  var actual = todoFunctions.deleteTodo(beforeChange,idToChange);
  var expected = afterChange;
  t.deepEqual(actual,expected,'object should be changed')
  t.end();
});
