angular.module('MyApp')
	.controller('AppController', ['$scope', 'restApi', function($scope, restApi) {
		$scope.customers = [];
		$scope.company = '';
		$scope.selectedCustomer = '';
		/*
		restApi.getCustomers()
			.success(function(response, status) {
				//console.log(JSON.stringify(response));
				$scope.customers = angular.copy(response.customers);
			})
			.error(function(response, status) {
				alert("Error retrieving customers from rest call !!!!");
			});
		*/

		$scope.promise = restApi.getCustomers();
		$scope.promise.then(
			function(response, status) {
				console.log('Promise resolved successfully -->>> ' + JSON.stringify(response));
				$scope.customers = angular.copy(response.customers);
			}, 
			function(response, status) {
				alert("Error retrieving customers from rest call !!!!");
			});

		$scope.submitCustomerForm = function(isValid) {
			// check to make sure the form is completely valid
			if (isValid) {
				alert('Thank you for submitting the form . Form is valid');
			}

		};

		$scope.$watch(
			function(){
				return $scope.selectedCustomer;
			},
			function(newVal, oldVal){
				$scope.company = $scope.selectedCustomer.company;
			}
		);

		$scope.resetCompany = function() {
			$scope.customerForm.affectedCompany.$pristine = false;
			$scope.company = '';
		};

		$scope.resetAffectedCustomer = function() {
			$scope.customerForm.affectedCustomer.$pristine = false;
			$scope.selectedCustomer='';
		};

	}]);