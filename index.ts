/// <reference path="./typings/tsd.d.ts" />

enum Folder {
  ArraysLists,
  ArraysListsIteration,
  CommandLineArguments,
  ExtensionMethods,
  FalsyValues,
  Functions,
  HashMaps,
  HashMapsIteration,
  HelloWorld,
  Ifs,
  Interpolation,
  Loops,
  SimpleClass,
  Variables
}

enum Language {
  Dart,
  Go,
  Java,
  JavaScript,
  Perl,
  Python,
  Ruby,
  Scala,
  TypeScript
}

interface LanguageMenuItem {
  language:Language,
  text:string;
}

interface FolderMenuItem {
  folder:Folder;
  text:string;
}

class HtmlService {
  createFolderMenuItem(folderMenuItem:FolderMenuItem):string {
    return `
      <li class='folder-menu-item' id='folder-${folderMenuItem.folder}' onclick='inputService.updateFolder(${JSON.stringify(folderMenuItem)}, "#folder-${folderMenuItem.folder}")'>
        <a href='#'>${folderMenuItem.text}</a>
      </li>
    `;
  }

  createLanguageMenuItem(languageMenuItem:LanguageMenuItem):string {
    return `
      <li id='language-${languageMenuItem.language}' onclick='inputService.updateLanguage(${JSON.stringify(languageMenuItem)}, "#language-${languageMenuItem.language}")'>
        <a href='#'>${languageMenuItem.text}</a>
      </li>
    `
  }

  updateSelectedFolder(folderId:string) {
    $('.folder-menu-item').removeClass('active');
    $(folderId).addClass('active');
  }

  updateSelectedLanguage(languageItemText:string) {
    $('#current-language').text(languageItemText);
  }

  private getLanguageStyling = (language:Language) => {
    switch(language) {
      case Language.Dart:
        return "language-dart";
      case Language.Go:
        return "language-go";
      case Language.Java:
        return "language-java";
      case Language.JavaScript:
        return "language-javascript";
      case Language.Perl:
        return "language-perl";
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


  updateCodeExample(language:Language, data:string) {
    var outerCode = $('#code-container');
    var innerCode = $('#inner-code');
    outerCode.toggle();
    innerCode.text(data);
    innerCode.text(data);
    innerCode.removeClass();
    innerCode.addClass(this.getLanguageStyling(language));
    Prism.highlightAll(true, () => outerCode.toggle());

  }
}

class CodeService {
  constructor(public htmlService:HtmlService) {}

  private getLanguage = (language:Language) => {
    switch(language) {
      case Language.Dart:
        return "example.dart";
      case Language.Go:
        return "example.go";
      case Language.Java:
        return "Example.java";
      case Language.JavaScript:
        return "exampleJs.js";
      case Language.Perl:
        return "example.pl";
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

  private getFolder = (folder:Folder) => {
    switch(folder) {
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

  languageMenuItems:Array<LanguageMenuItem> = [
    {language:Language.Dart, text:"Dart"},
    {language:Language.Go, text:"Go"},
    {language:Language.Java, text:"Java"},
    {language:Language.JavaScript, text:"JavaScript"},
    {language:Language.Perl, text:"Perl"},
    {language:Language.Python, text:"Python"},
    {language:Language.Ruby, text:"Ruby"},
    {language:Language.Scala, text:"Scala"},
    {language:Language.TypeScript, text:"TypeScript"},
  ];

  folderMenuItems:Array<FolderMenuItem> = [
    {folder:Folder.ArraysLists, text:"Arrays/Lists"},
    {folder:Folder.ArraysListsIteration, text:"Arrays/Lists Iteration"},
    {folder:Folder.SimpleClass, text:"Classes"},
    {folder:Folder.CommandLineArguments, text:"Command Line Arguments"},
    {folder:Folder.ExtensionMethods, text:"Extension Methods"},
    {folder:Folder.FalsyValues, text:"Falsy Values"},
    {folder:Folder.Functions, text:"Functions"},
    {folder:Folder.HashMaps, text:"Hash Maps"},
    {folder:Folder.HashMapsIteration, text:"Hash Maps Iteration"},
    {folder:Folder.HelloWorld, text:"Hello World"},
    {folder:Folder.Ifs, text:"If Statements"},
    {folder:Folder.Interpolation, text:"Interpolation"},
    {folder:Folder.Loops, text:"Loop Statements"},
    {folder:Folder.Variables, text:"Variables"}
  ];

  getCode = (language:Language, folder:Folder) => {
    $.get(`node_modules/programmersguidetothegalaxy/${this.getFolder(folder)}/${this.getLanguage(language)}`, (data) => {
      this.currentCode = data;
      this.htmlService.updateCodeExample(language, data);
    });
  };

  currentLanguage:LanguageMenuItem = this.languageMenuItems[1];
  currentFolder:FolderMenuItem = this.folderMenuItems[2];
  currentCode:string = "";

  updateCode = () => {
    this.getCode(this.currentLanguage.language, this.currentFolder.folder);
  };

  updateFolder = (folderMenuItem:FolderMenuItem) => {
    this.currentFolder = folderMenuItem;
    this.updateCode();
  };

  updateLanguage = (languageMenuItem:LanguageMenuItem) => {
    this.currentLanguage = languageMenuItem;
    this.updateCode();
  };
}

class InputService {
  constructor(public codeService:CodeService) {}
  updateFolder = (folderMenuItem:FolderMenuItem, folderId:string) => {
    this.codeService.updateFolder(folderMenuItem);
    this.codeService.htmlService.updateSelectedFolder(folderId);
  };

  updateLanguage = (languageMenuItem:LanguageMenuItem) => {
    this.codeService.updateLanguage(languageMenuItem);
    this.codeService.htmlService.updateSelectedLanguage(languageMenuItem.text)
  };

  initialize() {
    $('#folder-nav').append(this.codeService.folderMenuItems.map(this.codeService.htmlService.createFolderMenuItem).join(''));
    $('#language-nav').append(this.codeService.languageMenuItems.map(this.codeService.htmlService.createLanguageMenuItem).join(''));
    $('#current-language').text(this.codeService.currentLanguage.text);
    $(`#folder-${this.codeService.currentFolder.folder}`).addClass('active');
    this.codeService.updateCode();
  }
}

var inputService = new InputService(new CodeService(new HtmlService()));

$(() => {
  inputService.initialize();
});
