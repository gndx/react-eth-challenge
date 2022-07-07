import styled from 'styled-components';

const Fill = styled.div`
    width: ${(props) => props.amount};
    height: 100%;
    background-color: rgba(26,67,139,1);
    display: flex;
    align-items: center;
    p {
      margin-left: 1.2em;
      font-size: 1.2em;
      color: white
    }
  `;

export default Fill;
