(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{287:function(e,t,o){"use strict";o.r(t);var s=o(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"ui-dialogs-and-sidebars"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ui-dialogs-and-sidebars"}},[e._v("#")]),e._v(" UI Dialogs and Sidebars")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://developers.google.com/apps-script/guides/dialogs",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developers.google.com/apps-script/guides/dialogs"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Scripts that are "),o("a",{attrs:{href:"https://developers.google.com/apps-script/scripts_containers",target:"_blank",rel:"noopener noreferrer"}},[e._v("bound"),o("OutboundLink")],1),e._v(" to Google Docs, Sheets, or Forms can display several types of user-interface elements — pre-built alerts and prompts, plus dialogs and sidebars that contain custom "),o("a",{attrs:{href:"https://developers.google.com/apps-script/guides/html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTML service"),o("OutboundLink")],1),e._v(" pages. Typically, these elements are opened from "),o("a",{attrs:{href:"https://developers.google.com/apps-script/guides/menus",target:"_blank",rel:"noopener noreferrer"}},[e._v("menu items"),o("OutboundLink")],1),e._v(". (Note that in Google Forms, user-interface elements are visible only to an editor who opens the form to modify it, not to a user who opens the form to respond.)")]),e._v(" "),o("h2",{attrs:{id:"alert-dialogs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alert-dialogs"}},[e._v("#")]),e._v(" Alert dialogs")]),e._v(" "),o("p",[o("img",{attrs:{src:"alert-5a178902-ddb2-4e1b-bffc-34cbdf841375.png",alt:""}})]),e._v(" "),o("p",[e._v('An alert is a pre-built dialog box that opens inside a Google Docs, Sheets, Slides, or Forms editor. It displays a message and an "OK" button; a title and alternative buttons are optional. It is similar to calling '),o("code",[e._v("[window.alert()](https://developer.mozilla.org/en-US/docs/Web/API/window.alert)")]),e._v(" in client-side JavaScript within a web browser.")]),e._v(" "),o("p",[e._v("Alerts suspend the server-side script while the dialog is open. The script resumes after the user closes the dialog, but "),o("a",{attrs:{href:"https://developers.google.com/apps-script/guides/jdbc",target:"_blank",rel:"noopener noreferrer"}},[e._v("JDBC"),o("OutboundLink")],1),e._v(" connections do not persist across the suspension.")]),e._v(" "),o("p",[e._v("As shown in the example below, Google Docs, Forms, Slides, and Sheets all use the method "),o("code",[e._v("[Ui.alert()](https://developers.google.com/apps-script/reference/base/ui#alert(String))")]),e._v(', which is available in three variants. To override the default "OK" button, pass a value from the '),o("code",[e._v("[Ui.ButtonSet](https://developers.google.com/apps-script/reference/base/button-set)")]),e._v(" enum as the "),o("code",[e._v("buttons")]),e._v(" argument. To evaluate which button the user clicked, compare the return value for "),o("code",[e._v("alert()")]),e._v(" to the "),o("code",[e._v("[Ui.Button](https://developers.google.com/apps-script/reference/base/button)")]),e._v(" enum.")]),e._v(" "),o("pre",[o("code",[e._v("function onOpen() {  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.      .createMenu('Custom Menu')      .addItem('Show alert', 'showAlert')      .addToUi();}function showAlert() {  var ui = SpreadsheetApp.getUi(); // Same variations.  var result = ui.alert(     'Please confirm',     'Are you sure you want to continue?',      ui.ButtonSet.YES_NO);  // Process the user's response.  if (result == ui.Button.YES) {    // User clicked \"Yes\".    ui.alert('Confirmation received.');  } else {    // User clicked \"No\" or X in the title bar.    ui.alert('Permission denied.');  }}\n")])]),e._v(" "),o("h2",{attrs:{id:"prompt-dialogs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prompt-dialogs"}},[e._v("#")]),e._v(" Prompt dialogs")]),e._v(" "),o("p",[e._v('A prompt is a pre-built dialog box that opens inside a Google Docs, Sheets, Slides, or Forms editor. It displays a message, a text-input field, and an "OK" button; a title and alternative buttons are optional. It is similar to calling '),o("code",[e._v("[window.prompt()](https://developer.mozilla.org/en-US/docs/Web/API/window.prompt)")]),e._v(" in client-side JavaScript within a web browser.")]),e._v(" "),o("p",[e._v("Prompts suspend the server-side script while the dialog is open. The script resumes after the user closes the dialog, but "),o("a",{attrs:{href:"https://developers.google.com/apps-script/guides/jdbc",target:"_blank",rel:"noopener noreferrer"}},[e._v("JDBC"),o("OutboundLink")],1),e._v(" connections do not persist across the suspension.")]),e._v(" "),o("p",[e._v("As shown in the example below, Google Docs¸ Forms, Slides, and Sheets all use the method "),o("code",[e._v("[Ui.prompt()](https://developers.google.com/apps-script/reference/base/ui#prompt(String))")]),e._v(', which is available in three variants. To override the default "OK" button, pass a value from the '),o("code",[e._v("[Ui.ButtonSet](https://developers.google.com/apps-script/reference/base/button-set)")]),e._v(" enum as the "),o("code",[e._v("buttons")]),e._v(" argument. To evaluate the user's response, capture the return value for "),o("code",[e._v("prompt()")]),e._v(", then call "),o("code",[e._v("[PromptResponse.getResponseText()](https://developers.google.com/apps-script/reference/base/prompt-response#getResponseText())")]),e._v(" to retrieve the user's input, and compare the return value for "),o("code",[e._v("[PromptResponse.getSelectedButton()](https://developers.google.com/apps-script/reference/base/prompt-response#getSelectedButton())")]),e._v(" to the "),o("code",[e._v("[Ui.Button](https://developers.google.com/apps-script/reference/base/button)")]),e._v(" enum.")]),e._v(" "),o("pre",[o("code",[e._v("function onOpen() {  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.      .createMenu('Custom Menu')      .addItem('Show prompt', 'showPrompt')      .addToUi();}function showPrompt() {  var ui = SpreadsheetApp.getUi(); // Same variations.  var result = ui.prompt(      'Let\\'s get to know each other!',      'Please enter your name:',      ui.ButtonSet.OK_CANCEL);  // Process the user's response.  var button = result.getSelectedButton();  var text = result.getResponseText();  if (button == ui.Button.OK) {    // User clicked \"OK\".    ui.alert('Your name is ' + text + '.');  } else if (button == ui.Button.CANCEL) {    // User clicked \"Cancel\".    ui.alert('I didn\\'t get your name.');  } else if (button == ui.Button.CLOSE) {    // User clicked X in the title bar.    ui.alert('You closed the dialog.');  }}\n")])]),e._v(" "),o("h2",{attrs:{id:"custom-dialogs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-dialogs"}},[e._v("#")]),e._v(" Custom dialogs")]),e._v(" "),o("p",[e._v("A custom dialog can display an "),o("a",{attrs:{href:"https://developers.google.com/apps-script/guides/html/",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTML service"),o("OutboundLink")],1),e._v(" user interface inside a Google Docs, Sheets, Slides, or Forms editor.")]),e._v(" "),o("p",[e._v("Custom dialogs do "),o("em",[e._v("not")]),e._v(" suspend the server-side script while the dialog is open. The client-side component can make asynchronous calls to the server-side script using either the "),o("code",[e._v("[google.script](https://developers.google.com/apps-script/guides/html/communication)")]),e._v(" API for HTML-service interfaces or "),o("a",{attrs:{href:"https://developers.google.com/apps-script/guides/ui-service#ServerHandlers",target:"_blank",rel:"noopener noreferrer"}},[e._v("server handlers"),o("OutboundLink")],1),e._v(" for UI-service interfaces.")]),e._v(" "),o("p",[e._v("The dialog can close itself by calling "),o("code",[e._v("[google.script.host.close()](https://developers.google.com/apps-script/guides/html/communication#closing_dialogs_and_sidebars_in_google_apps)")]),e._v(" in the client side of an HTML-service interface. The dialog cannot be closed by other interfaces, only by the user or itself.")]),e._v(" "),o("p",[e._v("As shown in the example below, Google Docs, Forms, Slides, and Sheets all use the method "),o("code",[e._v("[Ui.showModalDialog()](https://developers.google.com/apps-script/reference/base/ui#showModalDialog(Object,String))")]),e._v(" to open the dialog.")]),e._v(" "),o("pre",[o("code",[e._v("function onOpen() {  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.      .createMenu('Custom Menu')      .addItem('Show dialog', 'showDialog')      .addToUi();}function showDialog() {  var html = HtmlService.createHtmlOutputFromFile('Page')      .setWidth(400)      .setHeight(300);  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.      .showModalDialog(html, 'My custom dialog');}\n")])]),e._v(" "),o("h2",{attrs:{id:"custom-sidebars"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-sidebars"}},[e._v("#")]),e._v(" Custom sidebars")]),e._v(" "),o("p",[o("img",{attrs:{src:"sidebar-8ebe3ee6-6d62-4a8f-a7c5-86ba1594e193.png",alt:""}})]),e._v(" "),o("p",[e._v("A sidebar can display an "),o("a",{attrs:{href:"https://developers.google.com/apps-script/guides/html/",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTML service"),o("OutboundLink")],1),e._v(" user interface inside a Google Docs, Forms, Slides, or Sheets editor.")]),e._v(" "),o("p",[e._v("Sidebars do "),o("em",[e._v("not")]),e._v(" suspend the server-side script while the dialog is open. The client-side component can make asynchronous calls to the server-side script using either the "),o("code",[e._v("[google.script](https://developers.google.com/apps-script/guides/html/communication)")]),e._v(" API for HTML-service interfaces or "),o("a",{attrs:{href:"https://developers.google.com/apps-script/guides/ui-service#ServerHandlers",target:"_blank",rel:"noopener noreferrer"}},[e._v("server handlers"),o("OutboundLink")],1),e._v(" for UI-service interfaces.")]),e._v(" "),o("p",[e._v("The sidebar can close itself by calling "),o("code",[e._v("[google.script.host.close()](https://developers.google.com/apps-script/guides/html/communication#closing_dialogs_and_sidebars_in_google_apps)")]),e._v(" in the client side of an HTML-service interface. The sidebar cannot be closed by other interfaces, only by the user or itself.")]),e._v(" "),o("p",[e._v("As shown in the example below, Google Docs, Forms, Slides, and Sheets all use the method "),o("code",[e._v("[Ui.showSidebar()](https://developers.google.com/apps-script/reference/base/ui#showSidebar(Object))")]),e._v(" to open the sidebar.")]),e._v(" "),o("pre",[o("code",[e._v("function onOpen() {  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.      .createMenu('Custom Menu')      .addItem('Show sidebar', 'showSidebar')      .addToUi();}function showSidebar() {  var html = HtmlService.createHtmlOutputFromFile('Page')      .setTitle('My custom sidebar')      .setWidth(300);  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.      .showSidebar(html);}\n")])]),e._v(" "),o("h2",{attrs:{id:"file-open-dialogs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#file-open-dialogs"}},[e._v("#")]),e._v(" File-open dialogs")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://developers.google.com/picker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Picker"),o("OutboundLink")],1),e._v(' is a "file-open" dialog for information stored in Google servers, including Google Drive, Google Image Search, Google Video Search, and more.')]),e._v(" "),o("p",[e._v("As shown in the example below, Picker's client-side JavaScript API can be used in "),o("a",{attrs:{href:"https://developers.google.com/apps-script/guides/html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTML service"),o("OutboundLink")],1),e._v(" to create a custom dialog that lets users select existing files or upload new ones, then pass that selection back to your script for further use.")]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" In order to use Google Picker, your script project must be using a "),o("a",{attrs:{href:"https://developers.google.com/apps-script/guides/cloud-platform-projects#standard_cloud_platform_projects",target:"_blank",rel:"noopener noreferrer"}},[e._v("standard Cloud Platform (GCP) project"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("To enable Picker and obtain an API key, follow these instructions:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Verify that your script project is using a "),o("a",{attrs:{href:"https://developers.google.com/apps-script/guides/cloud-platform-projects#standard_cloud_platform_projects",target:"_blank",rel:"noopener noreferrer"}},[e._v("standard GCP project"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("While your GCP project is still open, select "),o("strong",[e._v("APIs & Services")]),e._v(", then click "),o("strong",[e._v("Credentials")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Select the "),o("strong",[e._v("Credentials")]),e._v(" tab.")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Create credentials > API key")]),e._v(". This creates the key, but you should restrict it. Click "),o("strong",[e._v("Restrict Key")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("In the new tab, select the "),o("strong",[e._v("HTTP referrers (web sites)")]),e._v(" radio button.")])]),e._v(" "),o("li",[o("p",[e._v("In the referer section that appears, add these URLs as referers, then click "),o("strong",[e._v("Save")]),e._v(":")]),e._v(" "),o("pre",[o("code",[e._v(" *.google.com*.googleusercontent.com\n")])])]),e._v(" "),o("li",[o("p",[e._v("In the "),o("strong",[e._v("Credentials")]),e._v(" tab, copy the API key you created for use below, then return to the script editor and click "),o("strong",[e._v("Close")]),e._v(" to close the dialog.")])])]),e._v(" "),o("p",[e._v("The following example calls "),o("code",[e._v("[ScriptApp.getOAuthToken()](https://developers.google.com/apps-script/reference/script/script-app#getOAuthToken())")]),e._v(" so that it can pass the user's OAuth 2.0 access token to Picker. This technique keeps Picker from needing to show its own authorization dialog, but is only possible if the "),o("a",{attrs:{href:"https://developers.google.com/picker/docs/#otherviews",target:"_blank",rel:"noopener noreferrer"}},[e._v("OAuth scope that Picker needs"),o("OutboundLink")],1),e._v(" is available in Apps Script. Otherwise, your Picker code will need to declare its own OAuth scopes, as shown "),o("a",{attrs:{href:"https://developers.google.com/picker/docs/#hiworld",target:"_blank",rel:"noopener noreferrer"}},[e._v('this "hello world" example'),o("OutboundLink")],1),e._v(". You must call "),o("code",[e._v("setOrigin(google.script.host.origin)")]),e._v(" when constructing the "),o("code",[e._v("PickerBuilder")]),e._v(".")]),e._v(" "),o("pre",[o("code",[e._v("/** * Creates a custom menu in Google Sheets when the spreadsheet opens. */function onOpen() {  SpreadsheetApp.getUi().createMenu('Picker')      .addItem('Start', 'showPicker')      .addToUi();}/** * Displays an HTML-service dialog in Google Sheets that contains client-side * JavaScript code for the Google Picker API. */function showPicker() {  var html = HtmlService.createHtmlOutputFromFile('dialog.html')      .setWidth(600)      .setHeight(425)      .setSandboxMode(HtmlService.SandboxMode.IFRAME);  SpreadsheetApp.getUi().showModalDialog(html, 'Select a file');}/** * Gets the user's OAuth 2.0 access token so that it can be passed to Picker. * This technique keeps Picker from needing to show its own authorization * dialog, but is only possible if the OAuth scope that Picker needs is * available in Apps Script. In this case, the function includes an unused call * to a DriveApp method to ensure that Apps Script requests access to all files * in the user's Drive. * * @return {string} The user's OAuth 2.0 access token. */function getOAuthToken() {  DriveApp.getRootFolder();  return ScriptApp.getOAuthToken();}")])])])}),[],!1,null,null,null);t.default=r.exports}}]);