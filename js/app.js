define(["angularAMD", "constants", "angular-route", "angular-animate"], function(angularAMD, constants) {
    var app = angular.module(constants.APP_NAMESPACE_NAME, ["ngRoute", "ngAnimate"]);

    /**
     * Configure Angular ngApp with route and cache the needed providers
     */
    app.config(function($routeProvider) {
        $routeProvider
            .when("/first", angularAMD.route({
                templateUrl: "../views/first_page.html",
                controllerUrl: "./controllers/firstController"
            }))
            .when("/second", angularAMD.route({
                templateUrl: "../views/second_page.html",
                controllerUrl: "./controllers/secondController"
            }))
            .otherwise({ redirectTo: "/first" });
    });

    // Bootstrap Angular when DOM is ready
    return angularAMD.bootstrap(app);
});
