using System;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;

namespace SeleniumTests
{
    [TestFixture]
    public class TestSellerNameEmpty
    {
        private IWebDriver driver;
        private StringBuilder verificationErrors;
        private string baseURL;
        private bool acceptNextAlert = true;

        [SetUp]
        public void SetupTest()
        {
            driver = new FirefoxDriver();
            baseURL = "https://www.katalon.com/";
            verificationErrors = new StringBuilder();
        }

        [TearDown]
        public void TeardownTest()
        {
            try
            {
                driver.Quit();
            }
            catch (Exception)
            {
                // Ignore errors if unable to close the browser
            }
            Assert.AreEqual("", verificationErrors.ToString());
        }

        [Test]
        public void TheSellerNameEmptyTest()
        {
            driver.Navigate().GoToUrl("http://localhost/web/home.html");
            driver.FindElement(By.Id("submit")).Click();
            Assert.AreEqual("Please Enter Name", driver.FindElement(By.Id("errorName")).Text);
        }
        [Test]
        public void TheAddressEmptyTest()
        {
            driver.Navigate().GoToUrl("http://localhost/web/home.html");
            driver.FindElement(By.Id("submit")).Click();
            Assert.AreEqual("Please Enter Address", driver.FindElement(By.Id("errorAddress")).Text);
        }
        [Test]
        public void TheCityNameEmptyTest()
        {
            driver.Navigate().GoToUrl("http://localhost/web/home.html");
            driver.FindElement(By.Id("submit")).Click();
            Assert.AreEqual("Please Enter City", driver.FindElement(By.Id("errorCity")).Text);
        }
        [Test]
        public void ThePhoneNumberEmptyTest()
        {
            driver.Navigate().GoToUrl("http://localhost/web/home.html");
            driver.FindElement(By.Id("submit")).Click();
            Assert.AreEqual("Please Enter Phone Number", driver.FindElement(By.Id("errorPhone")).Text);
        }
        [Test]
        public void TheEmailEmptyTest()
        {
            driver.Navigate().GoToUrl("http://localhost/web/home.html");
            driver.FindElement(By.Id("submit")).Click();
            Assert.AreEqual("Please Enter E-mail Address", driver.FindElement(By.Id("errorMail")).Text);
        }
        [Test]
        public void TheCompanyNameEmptyTest()
        {
            driver.Navigate().GoToUrl("http://localhost/web/home.html");
            driver.FindElement(By.Id("submit")).Click();
            Assert.AreEqual("Please Enter Company Name", driver.FindElement(By.Id("errorMake")).Text);
        }
        [Test]
        public void TheModelNameEmptyTest()
        {
            driver.Navigate().GoToUrl("http://localhost/web/home.html");
            driver.FindElement(By.Id("submit")).Click();
            Assert.AreEqual("Please Enter Model Name", driver.FindElement(By.Id("errorModel")).Text);
        }
        [Test]
        public void TheYearEmptyTest()
        {
            driver.Navigate().GoToUrl("http://localhost/web/home.html");
            driver.FindElement(By.Id("submit")).Click();
            Assert.AreEqual("Please Enter Year", driver.FindElement(By.Id("errorYear")).Text);
        }
        [Test]
        public void ThePhoneNumberInvalidTest()
        {
            driver.Navigate().GoToUrl("http://localhost/web/home.html");
            driver.FindElement(By.Id("phoneNumber")).Clear();
            driver.FindElement(By.Id("phoneNumber")).SendKeys("2268995572");
            driver.FindElement(By.Id("submit")).Click();
            Assert.AreEqual("Please Enter valid Phone Number", driver.FindElement(By.Id("errorPhone")).Text);
        }
        [Test]
        public void TheEmailInvalidTest()
        {
            driver.Navigate().GoToUrl("http://localhost/web/home.html");
            driver.FindElement(By.Id("email")).Clear();
            driver.FindElement(By.Id("email")).SendKeys("yagnik.com");
            driver.FindElement(By.Id("submit")).Click();
            Assert.AreEqual("Please Enter valid E-mail Address", driver.FindElement(By.Id("errorMail")).Text);
        }
        [Test]
        public void TheYearInvalidTest()
        {
            driver.Navigate().GoToUrl("http://localhost/web/home.html");
            driver.FindElement(By.Id("year")).Clear();
            driver.FindElement(By.Id("year")).SendKeys("1700");
            driver.FindElement(By.Id("submit")).Click();
            Assert.AreEqual("Please Enter valid Year", driver.FindElement(By.Id("errorYear")).Text);
        }
        [Test]
        public void TheSearchByModelTest()
        {
            driver.Navigate().GoToUrl("http://localhost/web/search.html");
            driver.FindElement(By.Id("search")).Clear();
            driver.FindElement(By.Id("search")).SendKeys("Civic");
            driver.FindElement(By.Id("submit")).Click();
            Assert.AreEqual("Civic", driver.FindElement(By.Id("labelModel")).Text);
        }
        private bool IsElementPresent(By by)
        {
            try
            {
                driver.FindElement(by);
                return true;
            }
            catch (NoSuchElementException)
            {
                return false;
            }
        }

        private bool IsAlertPresent()
        {
            try
            {
                driver.SwitchTo().Alert();
                return true;
            }
            catch (NoAlertPresentException)
            {
                return false;
            }
        }

        private string CloseAlertAndGetItsText()
        {
            try
            {
                IAlert alert = driver.SwitchTo().Alert();
                string alertText = alert.Text;
                if (acceptNextAlert)
                {
                    alert.Accept();
                }
                else
                {
                    alert.Dismiss();
                }
                return alertText;
            }
            finally
            {
                acceptNextAlert = true;
            }
        }
    }
}
