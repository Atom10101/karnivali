import styled from 'styled-components';

export const SelectionPanel = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 75vw;
    background-color: white;
`
export const Panel = styled.div`
    height: 50%;
    padding-left: 20px;
    padding-right: 20px;
    border: 10px solid;
    border-radius: 12%;
    border-color: black;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    color: black;
    transition-property: transform, background-color, color;
    transition-duration: .3s;
    transition-timing-function: cubic-bezier(0.37, 0, 0.63, 1);

    &:hover{
        background-color: ${(props) => props.hoverColor};
        transform: scale(1.15);
        color: white;
    }
`