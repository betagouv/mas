'use strict';

angular.module('masApp')
  .service('apis', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var INDEX_NAME = "mas";
    var PARAMS = {
      facets: [ 'Tags.name', 'Provider.name','Disponibility.desc', 'Access.desc', 'UsageLimitation.desc'],
      // disjunctiveFacets: ['particulier', 'entreprise'],
      hitsPerPage: 20,
      maxValuesPerFacet: 5,
      getRankingInfo: true
    };
    
    var algolia = algoliasearch('QZ81AZLZUG', '6eb1bd16ced3bec22dc77160762829b8');
  // algolia.initIndex(INDEX_NAME).setSettings({"ranking":["asc(id)"]}) // erreur avec le http (qu'en https ?)
    
    // var algolia = algoliasearch('QZ81AZLZUG', '6eb1bd16ced3bec22dc77160762829b8');

    var getAlgolia = function($http, callback) {
      getConfig($http, function(config) { 
        // console.log(config);
        // var algolia = algoliasearch('QZ81AZLZUG', '6eb1bd16ced3bec22dc77160762829b8');
        var algolia = algoliasearch(config.algoliaConfig.appId, config.algoliaConfig.secret);
        console.log(algolia);
        callback(algolia);
      });
    }

    var search = function($http, q, callback) {
      getAlgolia($http, function(algolia) {

        var index = algolia.initIndex(INDEX_NAME);
      
          index.search(q, function(error, content) {
            if (error) {
              return null;
            }
        callback(content);
        });
      });

    };

    var getSearchHelper = function() {
      return algoliasearchHelper(algolia, INDEX_NAME, PARAMS);
    };

    // Public API here
    return {
      getAlgolia: getAlgolia,
      search: search,
      getSearchHelper: getSearchHelper
    };
  });
