import { ComponentsAndMarkupExercisePage } from './app.po';

describe('components-and-markup-exercise App', () => {
  let page: ComponentsAndMarkupExercisePage;

  beforeEach(() => {
    page = new ComponentsAndMarkupExercisePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
