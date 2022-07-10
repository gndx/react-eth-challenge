function AppCard({ title, description, cardType = '' }) {
  return (
    <div
      className={`card ${
        cardType === 'secondary' ? 'card--secondary' : 'card--primary'
      }`}
    >
      <h4>{title}</h4>

      <p>{description}</p>
    </div>
  );
}

export default AppCard;
