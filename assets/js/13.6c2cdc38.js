(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{249:function(e,o,r){"use strict";r.r(o);var s=r(0),t=Object(s.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("/**")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Sending emails to step2 responder (FMA)")])]),e._v(" "),r("li",[r("p",[e._v("@todo - do the same thing as the first step, but now adding the comments from the previous step and send it to FMA MDM")])]),e._v(" "),r("li",[r("p",[e._v("@param {*} id\n*/\nfunction stepTwoApprovalEmail(response) {\ntry {\nvar toAddress = response.step2.email.value;")]),e._v(" "),r("p",[e._v("var subject = getSubjectField(response, {\nprefix: CONFIG.email.step2.subject.request.prefix,\nsuffix: CONFIG.email.step2.subject.request.suffix\n});")]),e._v(" "),r("p",[e._v("var requestQuery = response.payloads.requestType.value;\nvar approver1Email = response.step1.email.value;\nvar approver1Comment = response.step1.comments.value;")]),e._v(" "),r("p",[e._v('var body = "')]),r("html",[r("body",[e._v('";\nbody +=\n"'),r("p",[e._v("Hello Approver 2,")]),r("br"),r("br"),r("p",[e._v('Approver 1 " +\napprover1Email +\n" has approved a '),r("b",[e._v('" +\nrequestQuery +\n"')]),e._v(" request form.")]),r("br"),r("br"),e._v('";\nbody +=\n"'),r("p",[e._v("Please review the request form response below then complete the approval.")]),r("br"),r("br"),e._v('";\nbody += "'),r("p",[e._v('Manager comments : " + approver1Comment;')]),e._v(" "),r("p",[e._v("body += response.payloads.bodyField;")]),e._v(" "),r("p",[e._v("/* Generate a form URL, allowing the user to take a response. */\nbody +=\n'")]),r("p",[r("b",[r("font",{attrs:{color:"#BB0000"}},[e._v("Please click the link below to response.")])],1)]),r("br"),e._v("';\nbody += \""),r("p",[e._v('" + response.step2.formUrl.value + "')]),e._v('";'),r("p"),e._v(" "),r("p",[e._v('body += "'),r("br")]),r("p",[r("u",[e._v("Remark")]),e._v(': This is an automatic notification email. ";\nbody += "'),r("b",[e._v("Please do not reply!")])]),e._v('";'),r("p"),e._v(" "),r("p",[e._v('body += "'),r("br"),r("br")]),r("p",[e._v("Best Regards,")]),e._v('";\nbody += "')])]),e._v('";'),r("p"),e._v(" "),r("p",[e._v('sendEmails(toAddress, subject, body);\n} catch (error) {\nconsole.error("stepTwoApprovalEmail() : " + error);')]),e._v(" "),r("p",[e._v('console.log("toAddress" + toAddress);\nconsole.log("subject" + subject);\nconsole.log("body" + body);')]),e._v(" "),r("p",[e._v("throw new Error(error);\n}\n}")])])])])}),[],!1,null,null,null);o.default=t.exports}}]);