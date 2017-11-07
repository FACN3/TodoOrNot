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
var logic = require('./logic');

tape('adding one object to existing array', function(t) {
  var actual=todoFunctions.addTodo(state, newState);
  var expected = state1
  t.equal(actual,expected,'addTodo array should have 4 objects');
  t.end();
});
