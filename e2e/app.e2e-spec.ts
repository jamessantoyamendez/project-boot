import { ProjectBootPage } from './app.po';

describe('project-boot App', function() {
  let page: ProjectBootPage;

  beforeEach(() => {
    page = new ProjectBootPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
