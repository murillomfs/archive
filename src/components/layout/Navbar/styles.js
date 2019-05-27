import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px;
    width: 20%;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-right: 1px solid #293a4b;
    height: 100%;
    background: #1d2f43;
`;

export const Title = styled.div`
    font-size: 18px;
    color: #fff;
    font-weight: 800;
    letter-spacing: 1px;
    display: flex;
    align-items: center;

    svg { margin-right: 10px; }
`;

export const Button = styled.span`
    padding: 0 20px;
    background: #54d9be;
    display: flex;
    align-items: center;
    border-radius: 6px;
    color: #fff;
    text-align: center;
    margin: 20px 0;
    height: 40px;
    font-weight: 600;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
        background: #fa786b;
    }
`;

export const Box = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;   
`;

export const BoxTitle = styled.span`
    display: block;
    color: #5d6977;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 20px;
`;

export const BoxInfo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-weight: 700;
    opacity: .8;

    &:hover div svg { stroke: #fa786b; }

    div {
        display: flex;
        align-items: center;

        svg { margin-right: 10px; transition: all .3s ease-in-out; }
    }

    span {
        opacity: .5;
        font-weight: 800;
    }
`;
