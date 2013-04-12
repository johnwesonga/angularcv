'use strict';

/* Services */

Riadd.factory('Tags', function($mongolabResourceHttp){
			return $mongolabResourceHttp('tags');

});