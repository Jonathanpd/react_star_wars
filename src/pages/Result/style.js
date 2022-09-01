import styled from "styled-components";

/* CSS */
export const Nav = styled.nav`
display: flex;
margin: 35px 48px 93px 48px;
cursor: point;
`;
export const Back = styled.p`
font-size: 18px;
margin-left: 20px;
`;
export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    @media(max-width: 800px) {
        padding: 0 20px;
    }
`;
export const ButtonChange = styled.button`
color: ${({ theme }) => theme.text_button};
background-color: ${({ theme }) => theme.bg_button};
width: 347px;
height: 56px;
border-radius: 10px;
border: 0;
font-size: 16px;
font-weight: bold;
cursor: pointer;
    &:disabled {
        opacity: 0.5;
        cursor: progress;
    }
    &:not([disabled]):hover {
        top: -1px;
        box-shadow: 0 2px 2px #2b2b2b0f;
        position: relative;
    }
    @media(max-width: 800px) {
        order: 3;
        margin: 0 0 30px 0;
        max-width: 100%;
        padding: 20px 40px;
        height: auto;
        line-height: 25px;
    }
`;
export const Img = styled.img`
max-width: 380px;
width: 100%;
object-fit: cover;
border-radius: 50%;
margin: 91px 0 50px 0;
    @media(max-width: 800px) {
        order: 1;
        max-width: 302px;
        margin: 35px 0 0 0;
    }
`;
export const Title = styled.h1`
color: ${({ theme }) => theme.text};
font-size: 36px;
font-weight: normal;
    @media(max-width: 800px) {
        order: 2;
        margin: 50px 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
export const Bold = styled.b`
font-weight: bold;
`;
/* end CSS */