import $ from 'jquery';
import { isRGB } from '@telegram-apps/sdk';

import { RGB } from '@/components/RGB/RGB';

import './styles.css';

export class DisplayData {
  /**
   * @param {{ rows: import('./types').DisplayDataRow[]}} 
   */
  constructor({ rows }) {
    this.el = $('<div/>');
    this.setRows(rows);
  }

  /**
   * @returns {HTMLDivElement}
   */
  element() {
    return this.el[0];
  }

  /**
   * @param {import('./types').DisplayDataRow[]} rows 
   */
  setRows(rows) {
    this.el.empty().append(
      ...rows.map(row => {
        const lineValue = $('<span class="display-data__line-value"/>');
        if (typeof row.value === 'string' && isRGB(row.value)) {
          lineValue.append(new RGB({ color: row.value }).element());
        } else if (row.value === false) {
          lineValue.text('❌');
        } else if (row.value === true) {
          lineValue.text('✔️');
        } else if (row.value === undefined) {
          lineValue.html('<i>empty</i>');
        } else if (row.value instanceof HTMLElement) {
          lineValue.append(row.value);
        } else {
          lineValue.append(row.value.toString());
        }

        return $('<div class="display-data__line"/>').append(
          $('<span class="display-data__line-title"/>').text(row.title),
          lineValue,
        );
      }),
    );
    return this;
  }
}