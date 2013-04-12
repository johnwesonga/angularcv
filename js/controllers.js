'use strict';
// Define our root-level controller for the application.
		Riadd.controller(
			"AppController",
			function( $scope, $route, $routeParams, Tags, l10n){

				$scope.toggleLocale = function(){
					l10n.setLocale(l10n.getLocale() == 'en-us' ? 'fr-fr' : 'en-us', $scope);
				};

				//l10n.get('document.title')
				// Update the rendering of the page.
				var render = function(){
					$scope.tags = Tags;

					// Pull the "action" value out of the
					// currently selected route.
					var renderAction = $route.current.action;

					// Also, let's update the render path so that
					// we can start conditionally rendering parts
					// of the page.
					var renderPath = renderAction.split( "." );

					// Grab the username out of the params.
					//
					// NOTE: This will be undefined for every route
					// except for the "contact" route; for the sake
					// of simplicity, I am not exerting any finer
					// logic around it.
					var username = ($routeParams.username || "");

					// Reset the booleans used to set the class
					// for the navigation.
					var isHome = (renderPath[ 0 ] == "home");
					var isFriends = (renderPath[ 0 ] == "friends");
					var isContact = (renderPath[ 0 ] == "contact");

					// Store the values in the model.
					$scope.renderAction = renderAction;
					$scope.renderPath = renderPath;
					$scope.username = username;
					$scope.isHome = isHome;
					$scope.isFriends = isFriends;
					$scope.isContact = isContact;

				};

				// Listen for changes to the Route. When the route
				// changes, let's set the renderAction model value so
				// that it can render in the Strong element.
				$scope.$on(
					"$routeChangeSuccess",
					function( $currentRoute, $previousRoute ){

						// Update the rendering.
						render();

					}
				);

			}
		);