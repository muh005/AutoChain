angular.module('myApp')
	.controller('indexCtrl', function($scope, Auth, House, $state){
		$scope.isLoggedIn = Auth.isLoggedIn();
		$scope.username = Auth.isLoggedIn().name;
		$scope.logOut = function() {
			Auth.logOut();
		};

		$scope.isShow = false;
		$scope.showHowToUse = function() {
			$scope.isShow = !$scope.isShow;
		};
		$scope.closeHowToUse = function() {
			$scope.isShow = false;
		};
		$scope.id = Auth.get();
		//search
		$scope.search = function() {
			$state.go('list',{where: $scope.where, peopleNum: $scope.peopleNumber});
		};
	});
