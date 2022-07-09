import cardStyles from './app-card.module.css';

function AppCard({ title, description, cardType = '' }) {
  return (
    <div
      className={`${cardStyles.card} ${
        cardType === 'secondary'
          ? cardStyles.cardSecondary
          : cardStyles.cardPrimary
      }`}
    >
      <h4>{title}</h4>

      <p>{description}</p>
    </div>
  );
}

export default AppCard;
