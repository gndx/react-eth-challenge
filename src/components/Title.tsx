import React, { useEffect, useState } from 'react';
import '@/assets/styles/components/Title.scss';

type title = {
  title: string;
};

const Title = ({ title }: title) => {
  const [firstText, setFirstText] = useState('');
  const [lastText, setLastText] = useState('');

  useEffect(() => {
    const arrayTitle = title.split(' ');
    if (arrayTitle.length > 1) {
      setLastText(arrayTitle[arrayTitle.length - 1]);
      arrayTitle.pop();
      setFirstText(arrayTitle.join(' '));
    } else setLastText(title);
  });

  return (
    <h2 className="title my-4">
      {firstText && `${firstText} `}
      <strong>{lastText}</strong>
    </h2>
  );
};

export default Title;
