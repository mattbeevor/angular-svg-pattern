import { PatternPage } from './app.po';

describe('pattern App', () => {
  let page: PatternPage;

  beforeEach(() => {
    page = new PatternPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
