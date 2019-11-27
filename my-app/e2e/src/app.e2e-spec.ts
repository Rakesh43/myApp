import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  // let page: AppPage;

  // beforeEach(() => {
  //   page = new AppPage();
  // });

  it('should display welcome message', () => {
    // page.navigateTo();
    browser.get('http://localhost:4200/login');
    browser.sleep(3000);
    element(by.css('[formcontrolname="userName"]')).sendKeys('test');
    browser.sleep(3000);
    element(by.css('[formcontrolname="password"]')).sendKeys('test');
    browser.sleep(3000);
    element(by.buttonText('Submit')).click();
    browser.sleep(3000);
    // expect(page.getTitleText()).toEqual('my-app app is running!');
    
  });

  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   } as logging.Entry));
  // });
});
