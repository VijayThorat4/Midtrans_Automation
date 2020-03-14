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
formatter.match({
  "location": "PurchaseScriptDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 5818594700,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cSample Store[1]\u003e but was:\u003cSample Store[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat StepDefinition.PurchaseScriptDefinition.user_is_on_home_page(PurchaseScriptDefinition.java:20)\r\n\tat ✽.Given User is on home page(C:/Users/VJ/Mar14/Pillow_Purchase/src/main/java/Features/Purchase.feature:4)\r\n",
  "status": "failed"
});
});