import React from 'react';
import MailPagination from './MailPagination.style';
import { direction } from '@iso/lib/helpers/rtl';

export default function() {
  return (
    <MailPagination className="isoMailPagination">
      <button type="button" className="prevPage">
        <i
          className={
            direction === 'rtl' ? 'ion-ios-arrow-forward' : 'ion-ios-arrow-back'
          }
        />
      </button>

      <button type="button" className="nextPage">
        <i
          className={
            direction === 'rtl' ? 'ion-ios-arrow-back' : 'ion-ios-arrow-forward'
          }
        />
      </button>
    </MailPagination>
  );
}
