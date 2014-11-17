define(function() {
    return [
        "$scope", function($scope) {
            /*$scope.pageClass = 'page-home';
            $scope.pageName = "firstPage";
            $scope.goSecondPage = function() {
                alert("going to second page");
            };
            $scope.showPageName = function(pageName) {
                console.log(pageName);
            };*/
            $scope.closePanel = function() {
                f7.closePanel();
            }
        }
    ];
});
