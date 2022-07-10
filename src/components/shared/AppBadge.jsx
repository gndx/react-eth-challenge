function AppBadge({ content, badgeType = '' }) {
  const badgeTypeMapper = (badgeType) => {
    if (badgeType === 'secondary') {
      return 'badge--secondary';
    }

    if (badgeType === 'primary') {
      return 'badge--primary';
    }

    return '';
  };

  return <li className={`badge ${badgeTypeMapper(badgeType)}`}>{content}</li>;
}

export default AppBadge;
