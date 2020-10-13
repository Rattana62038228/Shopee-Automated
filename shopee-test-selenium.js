const { webdriver, Builder, By, Key, Until } = require("selenium-webdriver");
const json = require("./mock-data.json");
let driver;
driver = new Builder().forBrowser("chrome").build();
driver.manage().window().maximize();
driver.get("https://shopee.co.th/");
//เลือกภาษา
driver
  .findElement(
    By.className("shopee-button-outline shopee-button-outline--primary-reverse")
  )
  .click();
//ปิดโฆษณา
driver.findElement(By.className("shopee-popup__close-btn")).click();
driver.findElement(By.linkText("เข้าสู่ระบบ")).click();
driver.findElement(By.name("loginKey")).sendKeys(json.username);
driver.findElement(By.name("password")).sendKeys(json.password);
driver
  .findElement(By.className("_35rr5y _32qX4k _1ShBrl _3z3XZ9 _2iOIqx _2h_2_Y"))
  .click();
