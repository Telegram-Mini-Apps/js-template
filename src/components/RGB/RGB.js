import { classNames } from '@telegram-apps/sdk';
import $ from 'jquery';

import './styles.css';

export class RGB {
  /**
   * @param {{ color: string; class?: string }} 
   */
  constructor({ color, class: className }) {
    this.el = $('<span/>')
      .attr('class', classNames('rgb', className))
      .append(
        $(`<i class="rgb__icon" style="background-color: ${color}"/>`),
        color,
      );
  }

  /**
   * @returns {HTMLSpanElement}
   */
  element() {
    return this.el[0];
  }
}