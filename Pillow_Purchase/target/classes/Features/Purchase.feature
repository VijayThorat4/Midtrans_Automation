Feature: Midtrans Website Automation Testing

Scenario: Pillow Purchase Using Credit Card
Given User is on home page
When User clicks on checkout
When Selects payment option as Credit Card
Then Enters the credit card details and bank's OTP
Then Confirms the transaction status