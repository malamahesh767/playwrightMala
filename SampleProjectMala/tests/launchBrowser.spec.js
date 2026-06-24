const {test, expect}=require('@playwright/test')

test("Launch Browser",async({page})=>
{
  await page.goto("https://sgtestinginstituteapp.onrender.com/");
  await page.waitForTimeout(3000);
  console.log("Browser Launched Successfully");
})
