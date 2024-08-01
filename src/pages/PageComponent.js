import $ from 'jquery';

export class PageComponent {
  /**
   * @param {import('../components/Page/Page')} page 
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * @param {HTMLElement} root
   * @returns {void}
   */
  render(root) {
    $(root).empty().append(this.page.element());
  }
}