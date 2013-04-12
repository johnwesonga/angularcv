		// Create an application module for our demo.
		var Riadd = angular.module( "Riadd", ['mongolabResourceHttp', 'l10n', 'l10n-tools', 'my-l10n-en',
		 'my-l10n-fr','ui.bootstrap'] );

		Riadd.constant('MONGOLAB_CONFIG', {API_KEY:'gghTz5cH_W7_71ZFld_BIai1gckrKps-', DB_NAME:'riadd'});
		
		angular.module('my-l10n-en', ['l10n']).config(['l10nProvider', function(l10n){
    	l10n.add('en-us', {
        		document: {
            			home: 'Home',
            			work: 'Work',
            			contact: 'Contact'
        			},
        			locale: {
        				toggleLocale: 'Translate to French'
        			}
    			});
		}]);

		angular.module('my-l10n-fr', ['l10n']).config(['l10nProvider', function(l10n){
    	l10n.add('fr-fr', {
        		document: {
            			home: 'Maison',
            			work: 'Amis',
            			contact: 'Contacter'
        			},
        			locale: {
        				toggleLocale: 'Traduire en anglais'
        			}
    			});
		}])
		
		// Configure the routing. The $routeProvider will be
		// automatically injected into the configurator.
		Riadd.config(
			function( $routeProvider ){

				// Typically, when defining routes, you will map the
				// route to a Template to be rendered; however, this
				// only makes sense for simple web sites. When you
				// are building more complex applications, with
				// nested navigation, you probably need something more
				// complex. In this case, we are mapping routes to
				// render "Actions" rather than a template.
				$routeProvider
					.when(
						"/home",
						{
							action: "home.default", resolve:{
								tags:function(Tags){return Tags.all();}
							}
						}
					)
					.when(
						"/work",
						{
							action: "work"
						}
					)
					.when(
						"/contact/:username",
						{
							action: "contact.form"
						}
					)
					.when(
						"/education",
						{
							action: "education"
						}
					)
					.otherwise(
						{
							redirectTo: "/home"
						}
					)
				;

			}
		);