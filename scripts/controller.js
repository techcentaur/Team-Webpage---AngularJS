angular
	.module('ngReps')
	.controller('controller', function($scope, factory){
		$scope.reps;
		$scope.secys;
		factory.getdata().then(function(data){
			$scope.secys = data.data;
		});
		factory.getdata2().then(function(data){
			$scope.reps = data.data;
		},function(error){
			confirm("Error occured while collecting data! sorry for the inconvinience! please try again");
		});

	});