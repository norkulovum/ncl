import { SearchPageObject } from "../page-objects/NCLPage";
import { browser, By } from "protractor";
import { element } from "protractor";
import { by } from "protractor";

const nclPage: SearchPageObject = new SearchPageObject();
describe("Client filters cruises by date on ncl.com", () => {
  let month: any;
  it("navigate to NCL.com", async function () {
    await browser.get("https://www.ncl.com/");
    browser.manage().timeouts().implicitlyWait(5000);
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(true);
    browser.ignoreSynchronization = true;
  });

  it("should click Find a Cruise", async function () {
    await nclPage.findCruise.click();
    browser.manage().timeouts().implicitlyWait(10000);
  });

  it("client searches for sailings on first available month", async function () {
    browser.manage().timeouts().implicitlyWait(39000);
    await nclPage.filterDate.click();

    browser.manage().timeouts().implicitlyWait(14000);
    for (let i = 0; i <= (await nclPage.listDates.length); i++) {
      if (await nclPage.listDates.get(i).isEnabled) {
        month = nclPage.listDates.get(i).getText();
        console.log(month);
        browser.manage().timeouts().implicitlyWait(5000);

        nclPage.listDatesInput.get(i).click();
        browser.manage().timeouts().implicitlyWait(5000);

        break;
      } else {
        continue;
      }
    }
    nclPage.applyButton.click;
  });

  it("filtered list of cruises is displayed on selected month", async function () {
    for (let i = 0; i < (await nclPage.sailingDates).length; i++) {
      expect(nclPage.sailingDates.get(i).getText).toContain(month);
    }
  });
});
