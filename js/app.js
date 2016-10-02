var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', { //See explanation 1
      controller: 'HomeController',
      templateUrl: 'views/home.html'
    })
    .when('/photos/:id', { //See explanation 2
      controller: 'PhotoController',
      templateUrl: 'views/photo.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

// Explanation 1

// A gallery of images is displayed. How does it work?

// 1. The app.config() method, we use Angular's $routeProvider to define the application routes.

// 2. We used .when() to map the URL / to the controller HomeController and the template home.html. The HomeController uses the service js/services/photos.js to fetch the array of all photos from https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json and stores it into $scope.photos. The home.html uses ng-repeat to loop through each item in the photos array and display each photo.

// 3. Otherwise if a user accidentally visits a URL other than /, we just redirect to / using .otherwise().

// Explanation 2

// 1. We mapped a URL to PhotoController and photo.html. We added a variable part named id to the URL, like this: /photos/:id.

// 2. In PhotoController, we used Angular's $routeParams to retrieve id from the URL by using $routeParams.id. Notice that we injected both $routeParams and the photos service into the PhotoController dependency array to make them available to use inside the controller.

// 3. Then to fetch an individual photo, we first used the photos service to fetch the array of photos from the server, and then used $routeParams.id to access the specific photo by its index.

// 4.As before, any properties attached to $scope become available to use in the view. This means in photo.html, we can display the photo's detail using expressions as done before.

// Notice that when you click on links, the app doesn't do a full reload. Only the part of the view specified by <div ng-view></div> changes.
