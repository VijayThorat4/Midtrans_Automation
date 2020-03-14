package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
              features = "C:\\Users\\VJ\\Mar14\\Pillow_Purchase\\src\\main\\java\\Features\\Purchase.feature",
              glue= {"StepDefinition"},
              format= {"pretty", "html:test-output", "junit:test-output/result.xml"}
              )


public class TestRunner {

}
