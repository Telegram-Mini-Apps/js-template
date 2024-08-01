import $ from 'jquery';
import { classNames } from '@telegram-apps/sdk';

import { Link } from '@/components/Link/Link';

import './styles.css';

export class WalletProvider {
  /**
   * @param {{ context: import('../../context/types').AppContext, class?: string }} 
   */
  constructor({ context, class: className }) {
    this.context = context;
    this.img = $('<img class="wallet-provider__image" height="60" width="60">')
      .attr('alt', 'Provider logo');
    this.el = $('<div/>')
      .attr('class', classNames(className, 'wallet-provider'))
      .attr('style', 'display: none;');
  }

  /**
   * @param {import('@tonconnect/ui').WalletInfoBase | null} wallet 
   */
  setWallet(wallet) {
    if (!wallet) {
      this.el.attr('style', 'display: none;');
      this.el.empty();
      return;
    } else {
      this.el.attr('style', '');
      this.el.append([
        this.img.attr('src', wallet.imageUrl),
        $('<div class="wallet-provider__meta"/>')
          .append([
            $('<p class="wallet-provider__wallet-name"/>')
              .append(`${wallet.name}&nbsp;`)
              .append($('<span class="wallet-provider__app-name"/>').append(`(${wallet.appName})`)),
            new Link({ href: wallet.aboutUrl }, this.context).appendChild('About connected wallet').element(),
          ])
      ])
    }
  }

  /**
   * @returns {HTMLDivElement}
   */
  element() {
    return this.el[0];
  }
}