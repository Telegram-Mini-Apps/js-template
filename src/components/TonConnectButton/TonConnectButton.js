import $ from 'jquery';
import { classNames } from '@telegram-apps/sdk';

export class TonConnectButton {
  /**
   * @param {{ id: string, class?: string }}
   */
  constructor({ id, class: className }) {
    this.el = $('<div/>')
      .attr('class', classNames(className))
      .append($('<div style="width: fit-content;"/>').attr('id', id));
  }

  /**
   * @returns {HTMLDivElement}
   */
  element() {
    return this.el[0]
  }
}