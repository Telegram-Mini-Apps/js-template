import $ from 'jquery';

import { toArray } from '@/utils/toArray';
import { filterChildren } from '@/utils/filterChildren';

import './styles.css';

export class Page {
  /**
   * @param {{ title: string}}
   */
  constructor({ title }) {
    this.el = $('<div class="page"/>').append($('<h1/>').text(title));
  }

  appendChild(...children) {
    this.el.append(...filterChildren(children));
    return this;
  }

  /**
   * @returns {HTMLDivElement}
   */
  element() {
    return this.el[0];
  }

  /**
   * @param {import('../../types').Children} disclaimer 
   * @returns {Page}
   */
  setDisclaimer(disclaimer) {
    if (this.disclaimer) {
      this.disclaimer.empty().append(...toArray(disclaimer));
    } else {
      this.disclaimer = $('<div class="page__disclaimer"/>')
        .append(...toArray(disclaimer))
        .insertAfter(this.el.children('h1'));
    }
    return this;
  }
}
