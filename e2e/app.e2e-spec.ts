import { ClientGestionInventaireMacPage } from './app.po';

describe('client-gestion-inventaire-mac App', function() {
  let page: ClientGestionInventaireMacPage;

  beforeEach(() => {
    page = new ClientGestionInventaireMacPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
