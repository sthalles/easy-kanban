(function () {

  angular.module('easyKanbanApp').controller('BoardController', ['$scope', 'BoardService', function ($scope, BoardService) {
    $scope.boardColumns = [
      {
        id: 1,
        title: 'To do',
        isSelected: true,
        color: 'red'
      }, {
        id: 2,
        title: 'Doing',
        isSelected: false,
        color: 'blue'
      }, {
        id: 3,
        title: 'Done',
        isSelected: false,
        color: 'yellow'
      }];

    $scope.selectColumn = function (column, $event) {
      console.log($event.currentTarget);
      for (var i = 0; i < $scope.boardColumns.length; i++) {
        if ($scope.boardColumns[i].isSelected == true) {
          $scope.boardColumns[i].isSelected = false;
          break;
        }
      }
      column.isSelected = true;
    };

    $scope.createNewTask = function (newTask) {
      $scope.tasks.push({
        name: newTask.name,
        description: newTask.description,
        tag: 'bug',
        creator: 'Thalles',
        assignedTo: 'Thalles',
        column: 1
      });

      // clear out the review so the product will be reset
      this.task = {}
    };

    $scope.handleDragStart = function (ev) {
      //debugger;
      this.style.opacity = '0.4';
      ev.dataTransfer.setData('text/plain', ev.target.id);
      // Set the drag effect to move
      ev.dataTransfer.dropEffect = "move";
    };

    $scope.handleDragEnd = function (ev) {
      this.style.opacity = '1.0';
    };

    $scope.handleDrop = function (ev) {
      ev.preventDefault();
      ev.stopPropagation();

      // Get the id of the target and add the moved element to the target's DOM
      var data = ev.dataTransfer.getData("text");

      if (ev.target.hasAttribute("droppable")) {
        ev.target.appendChild(document.getElementById(data));
      }
    };

    $scope.handleDragOver = function (ev) {
      ev.preventDefault(); // Necessary. Allows us to drop.
      ev.dataTransfer.dropEffect = 'move'; // See the section on the DataTransfer object.
      return false;
    };

    $scope.tasks = [
      {
        id: '1',
        name: 'Tasks 1',
        description: 'Mockup tasks 1',
        tag: 'bug',
        creator: 'Thalles',
        assignedTo: 'Thalles',
        column: 2,
        points: 5
      }, {
        id: '2',
        name: 'Tasks 4',
        description: 'Mockup tasks 4',
        tag: 'bug',
        creator: 'Thalles',
        assignedTo: 'Thalles',
        column: 2,
        points: 8
      }, {
        id: '3',
        name: 'Tasks 5',
        description: 'Mockup tasks 5',
        tag: 'bug',
        creator: 'Thalles',
        assignedTo: 'Thalles',
        column: 2,
        points: 4
      }, {
        id: '4',
        name: 'Tasks 2',
        description: 'Mockup tasks 2',
        tag: 'feature',
        creator: 'Thalles',
        assignedTo: 'Thalles',
        column: 1,
        points: 3
      }, {
        id: '4',
        name: 'Tasks 3',
        description: 'Mockup tasks 3',
        tag: 'improvement',
        creator: 'Thalles',
        assignedTo: 'Thalles',
        column: 3,
        points: 10
      }
    ];

  }]);

})();