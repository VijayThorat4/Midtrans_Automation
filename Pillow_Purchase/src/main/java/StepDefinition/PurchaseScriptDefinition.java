package StepDefinition;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;


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

}
