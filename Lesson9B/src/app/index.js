var myApp = angular.module('contactList', ['ui.router']);

myApp.config( function( $stateProvider, $urlRouterProvider ) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/add-contact");
  //
  // Now set up the states
  $stateProvider
    .state('add-contact', {
      url: "/add-contact",
      templateUrl: "assets/partials/add-contact.html",
      controller: 'ContactController'
    })
    .state('edit-contact', {
      url: "/edit-contact",
      templateUrl: "assets/partials/edit-contact.html",
        controller: "EditController" 
    })

  .state('delete-contact', {
      url: "/delete-contact",
      templateUrl: "assets/partials/delete-contact.html",
        controller: "DeleteController" 
    })


    .state('show-contact', {
      url: "/show-contact",
      templateUrl: "assets/partials/show-contact.html",
        controller: "ShowController" 
    });
});

myApp.factory('ContactDTO', function() {
  function ContactDTO() {
  }
  return ContactDTO;
 });

myApp.service("ContactService",function() {

  this.contactsArray = [];

  this.addContact = function (person) {
    
    this.contactsArray.push(person);

    console.log(this.contactsArray);
  },

  this.deleteContact = function (person) {
    
    this.contactsArray.splice(person);

    console.log(this.contactsArray);
  }

});


myApp.controller('ContactController', function($scope,ContactDTO,ContactService) {

  $scope.person = new ContactDTO();

  $scope.addContact = function() {
    
    ContactService.addContact($scope.person);

    $scope.person = new ContactDTO();

  }

});

myApp.controller('ShowController', function($scope,ContactService) {

 $scope.contacts = ContactService.contactsArray;

});

myApp.controller('EditController', function($scope,ContactService) {

 $scope.contacts = ContactService.contactsArray;

});

myApp.controller('DeleteController', function($scope,ContactService) {

 $scope.contacts = ContactService.contactsArray;

});


// myApp.controller('FullController', function(){
// 	var self = this;


// 	self.contacts = [];

// 	self.newContact = {
// 		firstName: "",
// 		lastName: "",
// 		description: "",
// 		telephoneNumber: "",
// 		email: ""
// 	}

// 	self.addContact = function(){
// 		self.contacts.push( self.newContact );

// 		console.log( self.contacts );

// 		self.newContact = {
// 			firstName: "",
// 			lastName: "",
// 			description: "",
// 			telephoneNumber: "",
// 			email: ""
// 		}
// 	};

// });


