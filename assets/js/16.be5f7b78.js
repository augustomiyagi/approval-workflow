(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{217:function(e,n,r){"use strict";r.r(n);var o=r(0),t=Object(o.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("/**")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Generate the Response indentifing number from the current response")])]),e._v(" "),r("li",[r("p",[e._v("@param {*} response")])]),e._v(" "),r("li"),e._v(" "),r("li",[r("p",[e._v("@returns {null}\n*/\nfunction generateId(response) {\ntry {\nvar timestamp = response.payloads.timestamp.value;")]),e._v(" "),r("p",[e._v("var year = /* padLeadingZero( "),r("em",[e._v("/ timestamp\n.getFullYear()\n.toString(); /")]),e._v(" , 4) */\nvar month = padLeadingZero(timestamp.getMonth().toString(), 2);\nvar id = padLeadingZero(response.payloads.rowNumber - 1, 4);")]),e._v(" "),r("p",[e._v("var newIdValues = year + month + id;")]),e._v(" "),r("p",[e._v("pushValue(response.payloads.id, newIdValues);")]),e._v(" "),r("p",[e._v('return response;\n} catch (error) {\nconsole.error("generateId() : " + error);\nconsole.log("year: " + year);\nconsole.log("month: " + month);\nconsole.log("newIdValues: " + newIdValues);')]),e._v(" "),r("p",[e._v("throw new Error(error);\n}\n}")])])])])}),[],!1,null,null,null);n.default=t.exports}}]);