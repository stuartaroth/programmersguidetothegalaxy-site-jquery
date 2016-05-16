/// <reference path="./typings/tsd.d.ts" />
var Folder;
(function (Folder) {
    Folder[Folder["ArraysLists"] = 0] = "ArraysLists";
    Folder[Folder["ArraysListsIteration"] = 1] = "ArraysListsIteration";
    Folder[Folder["ArraysListsManipulation"] = 2] = "ArraysListsManipulation";
    Folder[Folder["CommandLineArguments"] = 3] = "CommandLineArguments";
    Folder[Folder["ExtensionMethods"] = 4] = "ExtensionMethods";
    Folder[Folder["FalsyValues"] = 5] = "FalsyValues";
    Folder[Folder["Functions"] = 6] = "Functions";
    Folder[Folder["HashMaps"] = 7] = "HashMaps";
    Folder[Folder["HashMapsIteration"] = 8] = "HashMapsIteration";
    Folder[Folder["HelloWorld"] = 9] = "HelloWorld";
    Folder[Folder["Ifs"] = 10] = "Ifs";
    Folder[Folder["Interpolation"] = 11] = "Interpolation";
    Folder[Folder["Lambdas"] = 12] = "Lambdas";
    Folder[Folder["Loops"] = 13] = "Loops";
    Folder[Folder["SimpleClass"] = 14] = "SimpleClass";
    Folder[Folder["TernaryOperators"] = 15] = "TernaryOperators";
    Folder[Folder["Variables"] = 16] = "Variables";
    Folder[Folder["VariadicFunctions"] = 17] = "VariadicFunctions";
})(Folder || (Folder = {}));
var Language;
(function (Language) {
    Language[Language["CSharp"] = 0] = "CSharp";
    Language[Language["Clojure"] = 1] = "Clojure";
    Language[Language["CoffeeScript"] = 2] = "CoffeeScript";
    Language[Language["Dart"] = 3] = "Dart";
    Language[Language["Go"] = 4] = "Go";
    Language[Language["Groovy"] = 5] = "Groovy";
    Language[Language["Java"] = 6] = "Java";
    Language[Language["JavaScript"] = 7] = "JavaScript";
    Language[Language["Kotlin"] = 8] = "Kotlin";
    Language[Language["Nim"] = 9] = "Nim";
    Language[Language["Perl"] = 10] = "Perl";
    Language[Language["PHP"] = 11] = "PHP";
    Language[Language["Python"] = 12] = "Python";
    Language[Language["Ruby"] = 13] = "Ruby";
    Language[Language["Scala"] = 14] = "Scala";
    Language[Language["Swift"] = 15] = "Swift";
    Language[Language["TypeScript"] = 16] = "TypeScript";
})(Language || (Language = {}));
var HtmlService = (function () {
    function HtmlService() {
        this.getLanguageStyling = function (language) {
            switch (language) {
                case Language.CSharp:
                    return "language-csharp";
                case Language.Clojure:
                    return "language-clojure";
                case Language.CoffeeScript:
                    return "language-coffeescript";
                case Language.Dart:
                    return "language-dart";
                case Language.Go:
                    return "language-go";
                case Language.Groovy:
                    return "language-groovy";
                case Language.Java:
                    return "language-java";
                case Language.JavaScript:
                    return "language-javascript";
                case Language.Kotlin:
                    return "language-kotlin";
                case Language.Nim:
                    return "language-nim";
                case Language.Perl:
                    return "language-perl";
                case Language.PHP:
                    return "language-php";
                case Language.Python:
                    return "language-python";
                case Language.Ruby:
                    return "language-ruby";
                case Language.Scala:
                    return "language-scala";
                case Language.Swift:
                    return "language-swift";
                case Language.TypeScript:
                    return "language-typescript";
            }
        };
    }
    HtmlService.prototype.createFolderMenuItem = function (folderMenuItem) {
        return "\n      <li class='folder-menu-item' id='folder-" + folderMenuItem.folder + "' onclick='inputService.updateFolder(" + JSON.stringify(folderMenuItem) + ", \"#folder-" + folderMenuItem.folder + "\")'>\n        <a href='#'>" + folderMenuItem.text + "</a>\n      </li>\n    ";
    };
    HtmlService.prototype.createLanguageMenuItem = function (languageMenuItem) {
        return "\n      <li id='language-" + languageMenuItem.language + "' onclick='inputService.updateLanguage(" + JSON.stringify(languageMenuItem) + ", \"#language-" + languageMenuItem.language + "\")'>\n        <a href='#'>" + languageMenuItem.text + "</a>\n      </li>\n    ";
    };
    HtmlService.prototype.updateSelectedFolder = function (folderId) {
        $('.folder-menu-item').removeClass('active');
        $(folderId).addClass('active');
    };
    HtmlService.prototype.updateSelectedLanguage = function (languageItemText) {
        $('#current-language').text(languageItemText);
    };
    HtmlService.prototype.updateCodeExample = function (language, data) {
        var innerCode = $('#inner-code');
        innerCode.text(data);
        innerCode.removeClass();
        innerCode.addClass(this.getLanguageStyling(language));
        Prism.highlightAll(false);
    };
    return HtmlService;
}());
var CodeService = (function () {
    function CodeService(htmlService) {
        var _this = this;
        this.htmlService = htmlService;
        this.getLanguage = function (language) {
            switch (language) {
                case Language.CSharp:
                    return "Example.cs";
                case Language.Clojure:
                    return "example.clj";
                case Language.CoffeeScript:
                    return "exampleCoffee.coffee";
                case Language.Dart:
                    return "example.dart";
                case Language.Go:
                    return "example.go";
                case Language.Groovy:
                    return "example.groovy";
                case Language.Java:
                    return "Example.java";
                case Language.JavaScript:
                    return "exampleJs.js";
                case Language.Kotlin:
                    return "example.kt";
                case Language.Nim:
                    return "exampleNim.nim";
                case Language.Perl:
                    return "example.pl";
                case Language.PHP:
                    return "example.php";
                case Language.Python:
                    return "example.py";
                case Language.Ruby:
                    return "example.rb";
                case Language.Scala:
                    return "Example.scala";
                case Language.Swift:
                    return "Example.swift";
                case Language.TypeScript:
                    return "example.ts";
            }
        };
        this.getFolder = function (folder) {
            switch (folder) {
                case Folder.ArraysLists:
                    return "arrays_lists";
                case Folder.ArraysListsIteration:
                    return "arrays_lists_iteration";
                case Folder.ArraysListsManipulation:
                    return "arrays_lists_manipulation";
                case Folder.CommandLineArguments:
                    return "command_line_arguments";
                case Folder.ExtensionMethods:
                    return "extension_methods";
                case Folder.FalsyValues:
                    return "falsy_values";
                case Folder.Functions:
                    return "functions";
                case Folder.HashMaps:
                    return "hash_maps";
                case Folder.HashMapsIteration:
                    return "hash_maps_iteration";
                case Folder.HelloWorld:
                    return "hello_world";
                case Folder.Ifs:
                    return "ifs";
                case Folder.Interpolation:
                    return "interpolation";
                case Folder.Lambdas:
                    return "lambdas";
                case Folder.Loops:
                    return "loops";
                case Folder.SimpleClass:
                    return "simple_class";
                case Folder.TernaryOperators:
                    return "ternary_operators";
                case Folder.Variables:
                    return "variables";
                case Folder.VariadicFunctions:
                    return "variadic_functions";
            }
        };
        this.languageMenuItems = [
            { language: Language.CSharp, text: "C#" },
            { language: Language.Clojure, text: "Clojure" },
            { language: Language.CoffeeScript, text: "CoffeeScript" },
            { language: Language.Dart, text: "Dart" },
            { language: Language.Go, text: "Go" },
            { language: Language.Groovy, text: "Groovy" },
            { language: Language.Java, text: "Java" },
            { language: Language.JavaScript, text: "JavaScript" },
            { language: Language.Kotlin, text: "Kotlin" },
            { language: Language.Nim, text: "Nim" },
            { language: Language.Perl, text: "Perl" },
            { language: Language.PHP, text: "PHP" },
            { language: Language.Python, text: "Python" },
            { language: Language.Ruby, text: "Ruby" },
            { language: Language.Scala, text: "Scala" },
            { language: Language.Swift, text: "Swift" },
            { language: Language.TypeScript, text: "TypeScript" },
        ];
        this.folderMenuItems = [
            { folder: Folder.ArraysLists, text: "Arrays/Lists" },
            { folder: Folder.ArraysListsIteration, text: "Arrays/Lists Iteration" },
            { folder: Folder.ArraysListsManipulation, text: "Arrays/Lists Manipulation" },
            { folder: Folder.SimpleClass, text: "Classes" },
            { folder: Folder.CommandLineArguments, text: "Command Line Arguments" },
            { folder: Folder.ExtensionMethods, text: "Extension Methods" },
            { folder: Folder.FalsyValues, text: "Falsy Values" },
            { folder: Folder.Functions, text: "Functions" },
            { folder: Folder.HashMaps, text: "Hash Maps" },
            { folder: Folder.HashMapsIteration, text: "Hash Maps Iteration" },
            { folder: Folder.HelloWorld, text: "Hello World" },
            { folder: Folder.Ifs, text: "If Statements" },
            { folder: Folder.Interpolation, text: "Interpolation" },
            { folder: Folder.Lambdas, text: "Lambdas" },
            { folder: Folder.Loops, text: "Loop Statements" },
            { folder: Folder.TernaryOperators, text: "Ternary Operators" },
            { folder: Folder.Variables, text: "Variables" },
            { folder: Folder.VariadicFunctions, text: "Variadic Functions" }
        ];
        this.getCode = function (language, folder) {
            $.get("node_modules/programmersguidetothegalaxy/" + _this.getFolder(folder) + "/" + _this.getLanguage(language), function (data) {
                _this.currentCode = data;
                _this.htmlService.updateCodeExample(language, data);
            });
        };
        this.currentLanguage = this.languageMenuItems[1];
        this.currentFolder = this.folderMenuItems[3];
        this.currentCode = "";
        this.updateCode = function () {
            _this.getCode(_this.currentLanguage.language, _this.currentFolder.folder);
        };
        this.updateFolder = function (folderMenuItem) {
            _this.currentFolder = folderMenuItem;
            _this.updateCode();
        };
        this.updateLanguage = function (languageMenuItem) {
            _this.currentLanguage = languageMenuItem;
            _this.updateCode();
        };
    }
    return CodeService;
}());
var InputService = (function () {
    function InputService(codeService) {
        var _this = this;
        this.codeService = codeService;
        this.updateFolder = function (folderMenuItem, folderId) {
            _this.codeService.updateFolder(folderMenuItem);
            _this.codeService.htmlService.updateSelectedFolder(folderId);
        };
        this.updateLanguage = function (languageMenuItem) {
            _this.codeService.updateLanguage(languageMenuItem);
            _this.codeService.htmlService.updateSelectedLanguage(languageMenuItem.text);
        };
    }
    InputService.prototype.initialize = function () {
        $('#folder-nav').append(this.codeService.folderMenuItems.map(this.codeService.htmlService.createFolderMenuItem).join(''));
        $('#language-nav').append(this.codeService.languageMenuItems.map(this.codeService.htmlService.createLanguageMenuItem).join(''));
        $('#current-language').text(this.codeService.currentLanguage.text);
        $("#folder-" + this.codeService.currentFolder.folder).addClass('active');
        this.codeService.updateCode();
    };
    return InputService;
}());
var inputService = new InputService(new CodeService(new HtmlService()));
$(function () {
    inputService.initialize();
});
//# sourceMappingURL=index.js.map