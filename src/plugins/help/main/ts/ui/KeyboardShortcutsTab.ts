/**
 * KeyboardShortcutsTab.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import { Arr } from '@ephox/katamari';
import I18n from 'tinymce/core/api/util/I18n';
import KeyboardShortcuts from '../data/KeyboardShortcuts';

export interface ShortcutActionPairType {
  shortcut: string;
  action: string;
}

const tab = () => {
  const makeAriaLabel = (shortcut: ShortcutActionPairType) => {
    return 'aria-label="Action: ' + shortcut.action + ', Shortcut: ' + shortcut.shortcut.replace(/Ctrl/g, 'Control') + '"';
  };
  const shortcutLisString = Arr.map(KeyboardShortcuts.shortcuts, function (shortcut: ShortcutActionPairType) {
    return '<tr data-mce-tabstop="1" tabindex="-1" ' + makeAriaLabel(shortcut) + '>' +
              '<td>' + I18n.translate(shortcut.action) + '</td>' +
              '<td>' + shortcut.shortcut + '</td>' +
            '</tr>';
  }).join('');

  return {
    title: 'Handy Shortcuts',
    items: [
      {
        type: 'htmlpanel',
        html: '<div>' +
                '<table class="mce-table-striped">' +
                  '<thead>' +
                    '<th>' + I18n.translate('Action') + '</th>' +
                    '<th>' + I18n.translate('Shortcut') + '</th>' +
                  '</thead>' +
                  shortcutLisString +
                '</table>' +
              '</div>'
      }
    ]
  };
};

export default {
  tab
};