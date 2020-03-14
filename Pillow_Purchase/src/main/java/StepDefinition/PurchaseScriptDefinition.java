package StepDefinition;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class PurchaseScriptDefinition {
	WebDriver driver;
		
	
	@Given("^User is on home page$")
	public void user_is_on_home_page() {
		System.setProperty("webdriver.chrome.driver", "E:/chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://demo.midtrans.com/");
		String title = driver.getTitle();
		Assert.assertEquals("Sample Store", title);
	}
	
	@When("^User clicks on checkout$")
	public void user_clicks_on_checkout() {

	}
	
	@When("^Selects payment option as Credit Card$")
	public void selects_payment_option_as_credit_card() {

	}
	
	
	@Then("^Enters the credit card details and bank's OTP$")
	public void enters_the_credit_card_details_and_bank_s_OTP() {

	}
	
	
	@Then("^Confirms the transaction status$")
	public void confirms_the_transaction_status() {

	}

}
