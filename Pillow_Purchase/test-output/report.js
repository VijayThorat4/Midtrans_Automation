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
  "duration": 8315520400,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseScriptDefinition.user_clicks_on_checkout()"
});
formatter.result({
  "duration": 2417253500,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseScriptDefinition.selects_payment_option_as_credit_card()"
});
formatter.result({
  "duration": 260907299,
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
  "duration": 8862515499,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseScriptDefinition.confirms_the_transaction_status()"
});
formatter.result({
  "duration": 934943500,
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
  "duration": 5370789401,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseScriptDefinition.user_clicks_on_checkout()"
});
formatter.result({
  "duration": 2319799300,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseScriptDefinition.selects_payment_option_as_credit_card()"
});
formatter.result({
  "duration": 389616601,
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
  "duration": 8986880701,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseScriptDefinition.confirms_the_transaction_status()"
});
formatter.result({
  "duration": 5134742901,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\"text-success text-bold\"]\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-82HCE90S\u0027, ip: \u0027192.168.31.201\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\VJ\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:54118}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 482a3816246055c3ed50ea82be04d1df\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\"text-success text-bold\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.PurchaseScriptDefinition.confirms_the_transaction_status(PurchaseScriptDefinition.java:80)\r\n\tat ✽.Then Confirms the transaction status(C:/Users/VJ/Mar14/Pillow_Purchase/src/main/java/Features/Purchase.feature:8)\r\n",
  "status": "failed"
});
});