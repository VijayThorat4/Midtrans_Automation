package StepDefinition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

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
        driver.manage().window().maximize();
		String title = driver.getTitle();
		Assert.assertEquals("Sample Store", title);
	}
	
	@When("^User clicks on checkout$")
	public void user_clicks_on_checkout() {
		driver.findElement(By.xpath("//a[@class=\"btn buy\"]")).click();     // clicking on Buy Now
		WebElement checkout_option = driver.findElement(By.xpath("//div[@class=\"cart-checkout\"]"));
		
		WebDriverWait wait = new WebDriverWait(driver, 5);      // use of Explicit wait
		wait.until(ExpectedConditions.visibilityOf(checkout_option));
		checkout_option.click();
		
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		WebElement frame = driver.findElement(By.xpath("//iframe[@id=\"snap-midtrans\"]"));
		driver.switchTo().frame(frame);
		driver.findElement(By.className("button-main-content")).click();
		
		Assert.assertEquals("Select Payment", driver.findElement(By.xpath("//p[@class=\"text-page-title-content\"]")).getText());
	}
	
	@When("^Selects payment option as Credit Card$")
	public void selects_payment_option_as_credit_card() {
		driver.findElement(By.xpath("//div[text()=\"Credit Card\"]")).click();
		Assert.assertEquals("Sample Store", driver.findElement(By.xpath("//h1[@class=\"logo-store\"]")).getText());

	}
	
	
	@Then("^Enters the credit card details \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and bank's OTP \"([^\"]*)\"$")
	public void enters_the_credit_card_details_and_bank_s_OTP(String card_number, String expiry, String CVV, String OTP) throws InterruptedException {
		driver.findElement(By.name("cardnumber")).sendKeys(card_number);
		driver.findElement(By.xpath("//input[@placeholder=\"MM / YY\"]")).sendKeys(expiry);
		driver.findElement(By.xpath("//input[@placeholder=\"123\"]")).sendKeys(CVV);
		driver.findElement(By.xpath("//a[@class=\"button-main-content\"]")).click();
		WebDriverWait wait = new WebDriverWait(driver, 5);      // use of Explicit wait
		wait.until(ExpectedConditions.invisibilityOfElementLocated(By.xpath("//span[@class=\"label label-default\"]")));
		
		driver.switchTo().frame(0);
		driver.findElement(By.id("PaRes")).sendKeys(OTP);
		driver.findElement(By.xpath("//button[@name=\"ok\"]")).click();
		Thread.sleep(2000);
	}
	
	
	@Then("^Confirms the transaction status$")
	public void confirms_the_transaction_status() {
		WebElement frame = driver.findElement(By.xpath("//iframe[@id=\"snap-midtrans\"]"));
		driver.switchTo().frame(frame);		
		Assert.assertEquals("Transaction successful", driver.findElement(By.xpath("//div[@class=\"text-success text-bold\"]")).getText());
		driver.quit();
	}

}
