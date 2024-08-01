import $ from 'jquery';
import { classNames } from '@telegram-apps/sdk';

import { filterChildren } from '@/utils/filterChildren';

import './styles.css';

export class Link {
  /**
   * @param {{ href: string, class?: string }} 
   * @param {import('../../context/types').AppContext} context 
   */
  constructor({ href, class: className }, context) {
    const targetUrl = new URL(href, window.location.toString());
    const currentUrl = new URL(window.location.toString());
    const isExternal = targetUrl.protocol !== currentUrl.protocol
      || targetUrl.host !== currentUrl.host;

    this.el = $('<a/>')
      .attr('class', classNames('link', className))
      .attr('href', isExternal ? href : context.navigator.renderPath(href));

    if (isExternal) {
      this.el.on('click', (e) => {
        e.preventDefault();
        context.utils.openLink(targetUrl.toString());
      });
    }
  }

  appendChild(...children) {
    this.el.append(...filterChildren(children));
    return this;
  }

  /**
   * @returns {HTMLAnchorElement}
   */
  element() {
    return this.el[0];
  }
}
