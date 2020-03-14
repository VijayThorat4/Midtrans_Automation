Feature: Midtrans Website Automation Testing

Scenario Outline: Pillow Purchase Using Credit Card
Given User is on home page
When User clicks on checkout
When Selects payment option as Credit Card
Then Enters the credit card details "<Card Number>", "<Expiry Date>", "<CVV Number>" and bank's OTP "<Bank’s OTP>"
Then Confirms the transaction status

Examples:
 | Card Number | Expiry Date | CVV Number | Bank’s OTP |
 | 4811 1111 1111 1114 | 03/20 | 123 | 112233 |
 | 4911 1111 1111 1113 | 03/20 | 123 | 112233 |