export const htmlTitle = (title: string) => {
  const arrayTitle = title.split(' ');

  if (arrayTitle.length > 1) {
    const last = arrayTitle[arrayTitle.length - 1];
    arrayTitle.pop();
    const first = arrayTitle.join(' ');
    return (
      <h2 className="title">
        {first} <strong>{last}</strong>
      </h2>
    );
  }
  return (
    <h2 className="title">
      <strong>{title}</strong>
    </h2>
  );
};
