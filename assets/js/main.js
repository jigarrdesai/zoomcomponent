
"use strict";
var myapps = angular.module('R3apps', ['ngAnimate', 'ui.bootstrap']);
myapps.directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ ModalTitle }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });

//End Sidebar Slider 
 
myapps.controller('MainCtrl', function($scope) {
	$scope.showConfirmationModal = false;
    $scope.toggleConfirmationModal = function() {
        $scope.ModalTitle = "Confirmation";
        $scope.showConfirmationModal = !$scope.showModal;
    };
	// Panel Wizard 
	
	$scope.PanelWizard =  function ($scope, $http){
  
  $scope.goNext = function(i){
    
  	$('[href=#step'+(i+1)+']').tab('show');
  	return false;
    
  }
  
}
// For Pagination
	$scope.PaginationCtrl = function ($scope, $log) {
	$scope.totalItems = 64;
	 $scope.currentPage = 4;
	$scope.setPage = function (pageNo) {
	$scope.currentPage = pageNo;
	}};
// End For Pagination

$scope.CampaignList = function () {
    $scope.campaignitems = [
    {
        "id": 1,
        "name": "Merge2CSV",
		"date" : "24/05/2016",
		"class" : "pink"
    },
    {
        "number": 2,
        "name": "Mongo Filter Dashboard",
		"date" : "24/05/2016",
		"class" : "green"
    },
	{
        "number": 3,
        "name": "Crawling Test",
		"date" : "24/05/2016",
		"class" : "blue"
    },
    {
        "number": 4,
        "name": "Social",
		"date" : "24/05/2016",
		"class" : "yellow"
    },
	{
        "number": 1,
        "name": "Merge2CSV",
		"date" : "24/05/2016",
		"class" : "pink"
    },
    {
        "number": 2,
        "name": "Mongo Filter Dashboard",
		"date" : "24/05/2016",
		"class" : "green"
    },
	{
        "number": 3,
        "name": "Crawling Test",
		"date" : "24/05/2016",
		"class" : "blue"
    },
    {
        "number": 4,
        "name": "Social",
		"date" : "24/05/2016",
		"class" : "yellow"
    }];
	
	};

});


(function($) {

  'use strict';

  $(document).on('show.bs.tab', '.nav-tabs-responsive [data-toggle="tab"]', function(e) {
    var $target = $(e.target);
    var $tabs = $target.closest('.nav-tabs-responsive');
    var $current = $target.closest('li');
    var $parent = $current.closest('li.dropdown');
		$current = $parent.length > 0 ? $parent : $current;
    var $next = $current.next();
    var $prev = $current.prev();
    var updateDropdownMenu = function($el, position){
      $el
      	.find('.dropdown-menu')
        .removeClass('pull-xs-left pull-xs-center pull-xs-right')
      	.addClass( 'pull-xs-' + position );
    };

    $tabs.find('>li').removeClass('next prev');
    $prev.addClass('prev');
    $next.addClass('next');
    
    updateDropdownMenu( $prev, 'left' );
    updateDropdownMenu( $current, 'center' );
    updateDropdownMenu( $next, 'right' );
  });

})(jQuery); 


        
// Panel Wizard 

$(document).ready(function() {

  // use jQuery to update progress bar
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    
    //update progress
    var step = $(e.target).data('step');
    var percent = (parseInt(step) / 5) * 100;
    
    $('.progress-bar').css({width: percent + '%'});
    $('.progress-bar').text("Step " + step + " of 5");
    
  });

});

// End Panel Wizard     

