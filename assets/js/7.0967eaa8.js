(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{208:function(e,n,t){"use strict";t.r(n);var s=t(0),o=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("/* To view a documentation on how to use each function visit : https://sagelga.github.io/approval-google-addons/ */")]),e._v(" "),t("p",[e._v("var CONFIG = {\n/* How many rows do the sheet have (just for header) */\nheaderRow: 1,")]),e._v(" "),t("p",[e._v("/* How many days will it be considered as timeout response */\nresponseTimeout: 14,")]),e._v(" "),t("p",[e._v("/* How many steps of approval do you need */\nflow_step: 2,")]),e._v(" "),t("p",[e._v('/* What is the header and inbound sheet name */\nheader_sheet: "Response",\ninbound_sheet: "Inbounds",')]),e._v(" "),t("p",[e._v('/* What data range do you need, in order to form \'copy of the response\' */\nform_column_range: {\nstart: "C",\nstop: "AT"\n},')]),e._v(" "),t("p",[e._v("/* Email values and subject forming "),t("em",[e._v('/\nemail: {\n// STEP 0 = Requester\nstep0: {\nsubject: {\nrequest: {\nprefix: "Request ID: ",\nsuffix: ""\n} /')]),e._v(" , decline: { prefix: '', suffix: null } "),t("em",[e._v("/\n} /")]),e._v(" , email: null "),t("em",[e._v('/\n},\n// STEP 1 = Manager\nstep1: {\nsubject: {\nrequest: {\nprefix: "Request for Approval - Request ID: ",\nsuffix: ""\n},\ndecline: {\nprefix: "Request ID: ",\nsuffix: ""\n}\n}\n/')]),e._v(" , email: '' "),t("em",[e._v('/\n},\n// STEP 2 = FMA_Asia\nstep2: {\nsubject: {\nrequest: {\nprefix: "Request for Approval - Request ID: ",\nsuffix: ""\n},\ndecline: {\nprefix: "Request ID: ",\nsuffix: ""\n}\n},\nemail: "example@example.com"\n},\n// STEP 3 = FMA_MDM\nstep3: {\nsubject: {\nrequest: {\nprefix: "Request ID: ",\nsuffix: ""\n} /')]),e._v(" , decline: { prefix: '', suffix: '' } */\n},\nemail: \"example@example.com\"\n}\n},")]),e._v(" "),t("p",[e._v('/* What is the approval form url */\napproval_form_url:\n"https://docs.google.com/forms/d/e/<form_id>/viewform?usp=pp_url&entry.<entry_id>=",')]),e._v(" "),t("p",[e._v('/* In case of an error, where to notify about the error */\nadmin_email_address: "example@example.com",')]),e._v(" "),t("p",[e._v("/* When testerMode is on, all emails will not be sent to real responder, but sent to you (set by admin_email_address)\nand logging will not constantly send logs of actions made in the script. */\ntesterMode: true\n};")])])}),[],!1,null,null,null);n.default=o.exports}}]);