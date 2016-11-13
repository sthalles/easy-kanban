angular.module('easyKanbanApp').controller('BoardController', ['$scope', 'BoardService', function($scope, BoardService) {
  $scope.boardColumns = [
    {
      id: 1,
      title: 'To do',
      isSelected: true
    },
    {
      id: 2,
      title: 'Doing',
      isSelected: false
    },
    {
      id: 3,
      title: 'Done',
      isSelected: false
    }
  ];


  $scope.selectColumn = function(column, $event) {
    console.log($event.currentTarget);
    for (var i = 0; i < $scope.boardColumns.length; i++) {
      if ($scope.boardColumns[i].isSelected == true) {
        $scope.boardColumns[i].isSelected = false;
        break;
      }
    }
    column.isSelected = true;
  };

  $scope.tasks = [{
    name: 'Tasks 1',
    description: 'Mockup tasks 1',
    tag: 'bug',
    column: 2
  },
  {
    name: 'Tasks 4',
    description: 'Mockup tasks 4',
    tag: 'bug',
    column: 2
  }, {
    name: 'Tasks 5',
    description: 'Mockup tasks 5',
    tag: 'bug',
    column: 2
  },
  {
    name: 'Tasks 2',
    description: 'Mockup tasks 2',
    tag: 'feature',
    column: 1
  },
  {
    name: 'Tasks 3',
    description: 'Mockup tasks 3',
    tag: 'improvement',
    column: 3
  },
  {
    name: 'Tasks 6',
    description: 'Mockup tasks 6',
    tag: 'improvement',
    column: 3
  }];

}]);
