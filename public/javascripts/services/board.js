angular.module('easyKanbanApp')
    .factory('BoardService', function BoardService() {
      return new Board();

    });
