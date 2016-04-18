/// <reference path="./typings/tsd.d.ts" />
var Folder;
(function (Folder) {
    Folder[Folder["ArraysLists"] = 0] = "ArraysLists";
    Folder[Folder["ArraysListsIteration"] = 1] = "ArraysListsIteration";
    Folder[Folder["CommandLineArguments"] = 2] = "CommandLineArguments";
    Folder[Folder["ExtensionMethods"] = 3] = "ExtensionMethods";
    Folder[Folder["FalsyValues"] = 4] = "FalsyValues";
    Folder[Folder["Functions"] = 5] = "Functions";
    Folder[Folder["HashMaps"] = 6] = "HashMaps";
    Folder[Folder["HashMapsIteration"] = 7] = "HashMapsIteration";
    Folder[Folder["HelloWorld"] = 8] = "HelloWorld";
    Folder[Folder["Ifs"] = 9] = "Ifs";
    Folder[Folder["Interpolation"] = 10] = "Interpolation";
    Folder[Folder["Loops"] = 11] = "Loops";
    Folder[Folder["SimpleClass"] = 12] = "SimpleClass";
    Folder[Folder["Variables"] = 13] = "Variables";
})(Folder || (Folder = {}));
var Language;
(function (Language) {
    Language[Language["Dart"] = 0] = "Dart";
    Language[Language["Go"] = 1] = "Go";
    Language[Language["Java"] = 2] = "Java";
    Language[Language["JavaScript"] = 3] = "JavaScript";
    Language[Language["Kotlin"] = 4] = "Kotlin";
    Language[Language["Perl"] = 5] = "Perl";
    Language[Language["PHP"] = 6] = "PHP";
    Language[Language["Python"] = 7] = "Python";
    Language[Language["Ruby"] = 8] = "Ruby";
    Language[Language["Scala"] = 9] = "Scala";
    Language[Language["TypeScript"] = 10] = "TypeScript";
})(Language || (Language = {}));
var HtmlService = (function () {
    function HtmlService() {
        this.getLanguageStyling = function (language) {
            switch (language) {
                case Language.Dart:
                    return "language-dart";
                case Language.Go:
                    return "language-go";
                case Language.Java:
                    return "language-java";
                case Language.JavaScript:
                    return "language-javascript";
                case Language.Kotlin:
                    return "language-kotlin";
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
                case Language.Dart:
                    return "example.dart";
                case Language.Go:
                    return "example.go";
                case Language.Java:
                    return "Example.java";
                case Language.JavaScript:
                    return "exampleJs.js";
                case Language.Kotlin:
                    return "example.kt";
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
                case Folder.Loops:
                    return "loops";
                case Folder.SimpleClass:
                    return "simple_class";
                case Folder.Variables:
                    return "variables";
            }
        };
        this.languageMenuItems = [
            { language: Language.Dart, text: "Dart" },
            { language: Language.Go, text: "Go" },
            { language: Language.Java, text: "Java" },
            { language: Language.JavaScript, text: "JavaScript" },
            { language: Language.Kotlin, text: "Kotlin" },
            { language: Language.Perl, text: "Perl" },
            { language: Language.PHP, text: "PHP" },
            { language: Language.Python, text: "Python" },
            { language: Language.Ruby, text: "Ruby" },
            { language: Language.Scala, text: "Scala" },
            { language: Language.TypeScript, text: "TypeScript" },
        ];
        this.folderMenuItems = [
            { folder: Folder.ArraysLists, text: "Arrays/Lists" },
            { folder: Folder.ArraysListsIteration, text: "Arrays/Lists Iteration" },
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
            { folder: Folder.Loops, text: "Loop Statements" },
            { folder: Folder.Variables, text: "Variables" }
        ];
        this.getCode = function (language, folder) {
            $.get("node_modules/programmersguidetothegalaxy/" + _this.getFolder(folder) + "/" + _this.getLanguage(language), function (data) {
                _this.currentCode = data;
                _this.htmlService.updateCodeExample(language, data);
            });
        };
        this.currentLanguage = this.languageMenuItems[1];
        this.currentFolder = this.folderMenuItems[2];
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