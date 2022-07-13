import styled from 'styled-components';

export const ContainerComponent = styled.div`
    background: ${(props) => props.backgroundColor || '#bdf1d4'};
    font-family: 'Lato', sans-serif;
    padding: 10px 0 10px 0;
    margin: 10px 0 10px 0;
    display: flex;
    flex-direction: ${(props) => props.orientation || 'column'};
    flex: ${(props) => (props.fullWidth ? '0 0 99.5%' : '0 0 49.5%')};
    margin-left: 0.5%;
    min-height: 100px;
    border-radius: 2px;
`;

export const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
`;
