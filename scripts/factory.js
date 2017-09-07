angular
	.module('ngReps')
	.factory('factory', function($http){
		function getdata() {
			return $http.get('data/secydata.json');
		}
		function getdata2 (){
			return $http.get('data/repdata.json');
		}
		return {
		getdata, getdata2 : getdata, getdata2
		}
	});