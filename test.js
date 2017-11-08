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
