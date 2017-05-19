import { AngularAppPracticePage } from './app.po';

describe('angular-app-practice App', () => {
  let page: AngularAppPracticePage;

  beforeEach(() => {
    page = new AngularAppPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
