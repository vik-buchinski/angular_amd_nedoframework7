module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        minifiedFileName: "<%= pkg.name %>.min.js",

        jshint: {
            src: 'js/**/*.js'
        },
        jscs: {
            src: "js/**/*.js",
            options: {
                "requireCurlyBraces": ["if", "else", "for", "while", "do"],
                "requireSpaceAfterKeywords": ["if", "else", "for", "while", "do", "switch", "return"],
                "requireSpacesInFunctionExpression": {
                    "beforeOpeningCurlyBrace": true
                },
                "disallowSpacesInFunctionExpression": {
                    "beforeOpeningRoundBrace": true
                },
                "requireSpacesInsideObjectBrackets": "all",
                "requireSpacesInsideArrayBrackets": "all",
                "requireSpaceBeforeBinaryOperators": ["+", "-", "/", "*", "=", "==", "===", "!=", "!=="],
                "disallowSpaceAfterPrefixUnaryOperators": ["++", "--", "+", "-"],
                "disallowSpaceBeforePostfixUnaryOperators": ["++", "--"],
                "disallowKeywords": ["with"],
                "disallowMultipleLineBreaks": true,
                "disallowKeywordsOnNewLine": ["else"],
                "requireLineFeedAtFileEnd": true,
                "disallowSpaceAfterObjectKeys": true,
                // "validateLineBreaks": "LF"
            }
        },
        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ['css/*.css']
            },
            lax: {
                options: {
                    import: false
                },
                src: ['css/*.css']
            }
        },
        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': false,
                    'spec-char-escape': false,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true
                },
                src: ['index.html', 'views/**/*.html']
            }
        },
        compress: {
            compile: {
                options: {
                    archive: '../<%= pkg.name %>.zip'
                },
                files: [
                    { expand: true, src: ['css/**', 'img/**', 'libs/**', 'res/**', 'config.xml', 'icon.png', 'index.html', "js/**/*.js"] }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-jst');
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.registerTask('build', ['compress']);
};