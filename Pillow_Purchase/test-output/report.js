$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/VJ/Mar14/Pillow_Purchase/src/main/java/Features/Purchase.feature");
formatter.feature({
  "line": 1,
  "name": "Midtrans Website Automation Testing",
  "description": "",
  "id": "midtrans-website-automation-testing",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Pillow Purchase Using Credit Card",
  "description": "",
  "id": "midtrans-website-automation-testing;pillow-purchase-using-credit-card",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "Enters the credit card details \"\u003cCard Number\u003e\", \"\u003cExpiry Date\u003e\", \"\u003cCVV Number\u003e\" and bank\u0027s OTP \"\u003cBank�s OTP\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Confirms the transaction status",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "midtrans-website-automation-testing;pillow-purchase-using-credit-card;",
  "rows": [
    {
      "cells": [
        "Card Number",
        "Expiry Date",
        "CVV Number",
        "Bank�s OTP"
      ],
      "line": 11,
      "id": "midtrans-website-automation-testing;pillow-purchase-using-credit-card;;1"
    },
    {
      "cells": [
        "4811 1111 1111 1114",
        "03/20",
        "123",
        "112233"
      ],
      "line": 12,
      "id": "midtrans-website-automation-testing;pillow-purchase-using-credit-card;;2"
    },
    {
      "cells": [
        "4911 1111 1111 1113",
        "03/20",
        "123",
        "112233"
      ],
      "line": 13,
      "id": "midtrans-website-automation-testing;pillow-purchase-using-credit-card;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Pillow Purchase Using Credit Card",
  "description": "",
  "id": "midtrans-website-automation-testing;pillow-purchase-using-credit-card;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "Enters the credit card details \"4811 1111 1111 1114\", \"03/20\", \"123\" and bank\u0027s OTP \"112233\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
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
  "duration": 6669686800,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseScriptDefinition.user_clicks_on_checkout()"
});
formatter.result({
  "duration": 1935707400,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseScriptDefinition.selects_payment_option_as_credit_card()"
});
formatter.result({
  "duration": 323532400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4811 1111 1111 1114",
      "offset": 32
    },
    {
      "val": "03/20",
      "offset": 55
    },
    {
      "val": "123",
      "offset": 64
    },
    {
      "val": "112233",
      "offset": 85
    }
  ],
  "location": "PurchaseScriptDefinition.enters_the_credit_card_details_and_bank_s_OTP(String,String,String,String)"
});
formatter.result({
  "duration": 8716755000,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseScriptDefinition.confirms_the_transaction_status()"
});
formatter.result({
  "duration": 793605000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Pillow Purchase Using Credit Card",
  "description": "",
  "id": "midtrans-website-automation-testing;pillow-purchase-using-credit-card;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "Enters the credit card details \"4911 1111 1111 1113\", \"03/20\", \"123\" and bank\u0027s OTP \"112233\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
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
  "duration": 5188788500,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseScriptDefinition.user_clicks_on_checkout()"
});
formatter.result({
  "duration": 2068877400,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseScriptDefinition.selects_payment_option_as_credit_card()"
});
formatter.result({
  "duration": 279375200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4911 1111 1111 1113",
      "offset": 32
    },
    {
      "val": "03/20",
      "offset": 55
    },
    {
      "val": "123",
      "offset": 64
    },
    {
      "val": "112233",
      "offset": 85
    }
  ],
  "location": "PurchaseScriptDefinition.enters_the_credit_card_details_and_bank_s_OTP(String,String,String,String)"
});
formatter.result({
  "duration": 8765711500,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseScriptDefinition.confirms_the_transaction_status()"
});
formatter.result({
  "duration": 6506561400,
  "status": "passed"
});
});