(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{215:function(e,s,o){"use strict";o.r(s);var n=o(0),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("/**")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Send notification about rejection to responder (step0) and manager (step1)")])]),e._v(" "),o("li",[o("p",[e._v("@param {*} id\n*/\nfunction stepTwoRejectEmail(response) {\ntry {\nvar subject = getSubjectField(response, {\nprefix: CONFIG.email.step2.subject.decline.prefix,\nsuffix: CONFIG.email.step2.subject.decline.suffix\n});")]),e._v(" "),o("p",[e._v("var toAddress = new Array();\ntoAddress.push(response.step1.email.value);\ntoAddress.push(response.payloads.email.value);")]),e._v(" "),o("p",[e._v("var approver2Commment = response.step2.comments.value;")]),e._v(" "),o("p",[e._v("var body = new String();")]),e._v(" "),o("p",[e._v('body += "')]),o("html",[o("body",[e._v('";'),o("p"),e._v(" "),o("p",[e._v('body += "')]),o("p",[e._v('" + "Hello," + "')]),o("br"),e._v("\";\nbody +=\n'"),o("p",[e._v('"\' + "Approver 2 has reviewed your request submission." + "')]),o("br"),e._v('";\nbody += "'),o("p",[e._v("The status of your requet is : "),o("b",[e._v("Rejected")]),e._v('" + "')]),o("br"),e._v('";\nbody += "'),o("p",[e._v('The reviewer comment is: " + approver2Commment + "')]),o("br"),e._v('";'),o("p"),e._v(" "),o("p",[e._v("body += response.payloads.bodyField;")]),e._v(" "),o("p",[e._v('body += "')]),o("p",[e._v("Best Regards,")]),o("br"),e._v('";\nbody += "'),o("p",[e._v("ESSTH MDM")]),o("br"),e._v('";\nbody += "')])]),e._v('";'),o("p"),e._v(" "),o("p",[e._v('sendEmails(toAddress, subject, body);\n} catch (error) {\nconsole.log("toAddress" + toAddress);\nconsole.log("subject" + subject);\nconsole.log("body" + body);\n}\n}')])])])])}),[],!1,null,null,null);s.default=t.exports}}]);