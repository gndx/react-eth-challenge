import React from 'react';
import badgeStyles from './app-badge.module.css';

function AppBadge({ content, badgeType = '' }) {
  const badgeTypeMapper = (badgeType) => {
    if (badgeType === 'secondary') {
      return badgeStyles.badgeSecondary;
    }

    if (badgeType === 'primary') {
      return badgeStyles.badgePrimary;
    }

    return '';
  };

  return (
    <li className={`${badgeStyles.badge} ${badgeTypeMapper(badgeType)}`}>
      {content}
    </li>
  );
}

export default AppBadge;
