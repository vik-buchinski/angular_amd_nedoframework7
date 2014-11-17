(function() {
    require.config({
        baseUrl: "js",
        // alias libraries paths
        paths: {
            "angular": "../libs/angular",
            "angular-route": "../libs/angular-route",
            'angular-animate': '../libs/angular-animate',
            "angularAMD": "../libs/angularAMD",
            "Framework7": "../libs/framework7",

            "constants": "utils/constants",

            "FirstController": "controllers/firstController",
            "SecondController": "controllers/secondController"
        },

        // Add angular modules that does not support AMD out of the box, put it in a shim
        shim: {
            "angularAMD": ["angular"],
            "angular-route": ["angular"],
            "angular-animate": ["angular"],
            "Framework7": { exports: "Framework7" }
        },
        waitSeconds: 0,

        // kick start application
        deps: ["app"]
    });

    require(['Framework7'], function(Framework7) {
        f7 = new Framework7({
            modalTitle: "AngularTestApp",
            swipePanel: "left",
            animateNavBackIcon: true
        });

        return {
            f7: f7
        };
    });
})();
