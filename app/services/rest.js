angular.module('MyApp')
	.factory('restApi', ['$http', '$q', function($http, $q){

		var execute = function() {
			return $http({
				method: 'GET',
				url: '/data/customers.json'
			});
		};


		return {
			getCustomers: function() {

				var q = $q.defer();

				/*
				var successCallback, errorCallback;

				var returnObj = {
					success: function(cb) {
						successCallback = cb;
						return returnObj;
					},
					error: function(cb) {
						errorCallback = cb;
						return returnObj;
					}
				};

				execute()
					.success(function(response, status){
						successCallback(response, status);
					})
					.error(function(response, status){
						errorCallback(response, status);
					});

				return returnObj;
				*/

				execute()
					.success(function(response, status){
						q.resolve(response,status);
					})
					.error(function(response, status){
						q.reject(response,status)
					})
				return q.promise;
			}
		};
	}]);