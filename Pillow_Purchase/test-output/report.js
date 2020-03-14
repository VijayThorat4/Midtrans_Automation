$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/VJ/Mar14/Pillow_Purchase/src/main/java/Features/Purchase.feature");
formatter.feature({
  "line": 1,
  "name": "Midtrans Website Automation Testing",
  "description": "",
  "id": "midtrans-website-automation-testing",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Pillow Purchase Using Credit Card",
  "description": "",
  "id": "midtrans-website-automation-testing;pillow-purchase-using-credit-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on checkout",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Selects payment option as Credit Card",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enters the credit card details and bank\u0027s OTP",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Confirms the transaction status",
  "keyword": "Then "
});
formatter.match({
  "location": "PurchaseScriptDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 6392442500,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseScriptDefinition.user_clicks_on_checkout()"
});
formatter.result({
  "duration": 1780435500,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseScriptDefinition.selects_payment_option_as_credit_card()"
});
formatter.result({
  "duration": 261317700,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseScriptDefinition.enters_the_credit_card_details_and_bank_s_OTP()"
});
formatter.result({
  "duration": 6371499700,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseScriptDefinition.confirms_the_transaction_status()"
});
formatter.result({
  "duration": 82853000,
  "status": "passed"
});
});