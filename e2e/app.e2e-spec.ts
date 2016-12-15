import { PrimengBootstrapPage } from './app.po';

describe('primeng-bootstrap App', function() {
  let page: PrimengBootstrapPage;

  beforeEach(() => {
    page = new PrimengBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
