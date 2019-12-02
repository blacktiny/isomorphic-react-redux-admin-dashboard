import React from 'react';
import Link from 'next/link';
import siteConfig from '@iso/config/site.config';

export default function({ collapsed }) {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <i className={siteConfig.siteIcon} />
          </h3>
        </div>
      ) : (
        <h3>
          <Link href="/dashboard">
            <a>{siteConfig.siteName}</a>
          </Link>
        </h3>
      )}
    </div>
  );
}
