(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{228:function(n,e,o){"use strict";o.r(e);var r=o(0),t=Object(r.a)({},(function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[o("p",[n._v("/**")]),n._v(" "),o("ul",[o("li",[o("p",[n._v("Generates the bodyfield of the following request rowNumber.")])]),n._v(" "),o("li",[o("p",[n._v("@param {*} id\n"),o("em",[n._v("/\nfunction getBodyField(rowNumber) {\n/")]),n._v(" Adding more components to the email body */\ntry {\nvar body = new String();")]),n._v(" "),o("p",[n._v('var headerRange = sheet\n.getRange(\nCONFIG.form_column_range.start +\n"1" +\n":" +\nCONFIG.form_column_range.stop +\n"1"\n)\n.getValues()[0];')]),n._v(" "),o("p",[n._v('var valueRange = sheet\n.getRange(\nCONFIG.form_column_range.start +\nrowNumber +\n":" +\nCONFIG.form_column_range.stop +\nrowNumber\n)\n.getValues()[0];')]),n._v(" "),o("p",[n._v("var backgroundColor;\nvar rowCount = 0;")]),n._v(" "),o("p",[n._v("body +=\n'"),o("table",{staticStyle:{width:"100%",border:"1px solid black","text-align":"left","/*border-collapse":"collapse","*/padding":"8px"}},[n._v("';\nbody += \""),o("tr",[n._v('";\nbody += "'),o("th",[n._v('" + "Question" + "')]),n._v('";\nbody += "'),o("th",[n._v('" + "Response" + "')]),n._v('";\nbody += "')]),n._v('";')])]),n._v(" "),o("p",[n._v("for (var i = 0; i <= headerRange.length; i += 1) {\nif (!valueRange[i]) {\ncontinue;\n}")]),n._v(" "),o("p",[n._v('rowCount += 1;\nif (rowCount % 2) {\nbackgroundColor = \' style="background-color: #dddddd"\';\n} else {\nbackgroundColor = "";\n}')]),n._v(" "),o("p",[n._v('body += "<tr" + backgroundColor + ">";\nbody += "')]),o("td",[n._v('" + headerRange[i] + "')]),n._v('";\nbody += "'),o("td",[n._v('" + valueRange[i] + "')]),n._v('";\nbody += "'),n._v('";\n}'),o("p"),n._v(" "),o("p",[n._v('body += "'),n._v('";')]),n._v(" "),o("p",[n._v('return body;\n} catch (error) {\nconsole.error("getBodyField() : " + error);')]),n._v(" "),o("p",[n._v('console.warn(rowNumber);\nconsole.log("headerRange: " + headerRange);\nconsole.log("valueRange: " + valueRange);\n}\n}')])])])])}),[],!1,null,null,null);e.default=t.exports}}]);