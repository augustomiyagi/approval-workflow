(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{227:function(e,n,t){"use strict";t.r(n);var a=t(0),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("/**\n*")]),e._v(" "),t("ul",[t("li",[e._v("@param {*} name")]),e._v(" "),t("li",[e._v("@param {Object} [args]")]),e._v(" "),t("li",[e._v("@param {Number} [args.columnNumber = sheetObject.getLastColumn()]")]),e._v(" "),t("li",[e._v("@param {Boolean} [args.appendAfter = true]")]),e._v(" "),t("li",[e._v("@param {Sheet} [args.sheetObject = sheet]")]),e._v(" "),t("li",[e._v("@param {Boolean} [args.checkExistance = false]\n"),t("em",[e._v("/\nfunction createNewColumn(name, args) {\n/")]),e._v(" Check wheather the column is already exists or not */\nvar colNum = getColumnNumber(name, {\nrowNumber: 1,\nsheetObject: args.sheetObject\n});")])]),e._v(" "),t("p",[e._v('if (args.checkExistance && colNum) {\nconsole.warn(name + "already exists");\nreturn colNum;\n}')]),e._v(" "),t("p",[e._v("try {\n/* Setup default values */\nvar sheetObject = args.sheetObject || sheet;\nvar location = args.columnNumber || sheetObject.getLastColumn();\nvar appendAfter = args.appendAfter || true;")]),e._v(" "),t("pre",[t("code",[e._v('/* Insert a new column at the end of the list */\nif (appendAfter) {\n  sheetObject.insertColumnAfter(location);\n  location += 1;\n} else {\n  sheetObject.insertColumnBefore(location);\n}\n\nvar headerCell = columnToLetter(location) + "" + CONFIG.headerRow;\nsetCellValue(headerCell, name, sheetObject);\nconsole.log(headerCell);\n// console.log("Insertion of " + name + " is completed.");\n')])]),e._v(" "),t("p",[e._v('} catch (error) {\nconsole.error("createNewColumn() : " + error);\nconsole.log("appendAfter: " + appendAfter);\nconsole.log("location: " + location);\n}\n}')])])}),[],!1,null,null,null);n.default=r.exports}}]);