var Column = function(title) {
  this.title = title;
};

var Board = function() {
  this.todo = new Column('Todo');
  this.doing = new Column('Doing');
  this.done = new Column('Done');
};

Board.prototype.getColumns = function() {
  return [
    {
      title: 'Todo1'
    },
    {
      title: 'Doing'
    },
    {
      title: 'Done'
    }
  ];
}
