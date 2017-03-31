import { UndergroundStatusPage } from './app.po';

describe('underground-status App', () => {
  let page: UndergroundStatusPage;

  beforeEach(() => {
    page = new UndergroundStatusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
