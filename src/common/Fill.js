import styled from 'styled-components'

const Fill = styled.div`
    width: ${(props) => props.amount};
    height: 100%;
    background-color: rgba(26,67,139,1);
    display: flex;
    align-items: center;
    p {
      margin-left: 12px;
      font-size: 12px;
      color: white
    }
  `

export default Fill
