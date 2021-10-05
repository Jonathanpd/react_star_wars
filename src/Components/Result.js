import React from 'react';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';
import {ReactComponent as ArrowBack} from '../img/arrow_back.svg';
import luke_skywalker from '../img/luke_skywalker.svg';
import darth_vader from '../img/darth_vader.png';
import { ThemeProvider } from "styled-components";
import { lukeTheme, darthTheme } from "./theme";
import GlobalTheme from "./globals";
import styled from "styled-components";

const Result = () => {
    const { request, force, loading, error } = React.useContext(UserContext);
    const [theme, setTheme] = React.useState(null);
    const callForce = () => {
        request();
        if (force) {
        window.localStorage.setItem("theme", force.name);
        setTheme(force.name);
        }
    };
    React.useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme && setTheme(localTheme);
    }, []);
    if (error) return <p><br/>{error}</p>;
    if (loading === true) 
        document.body.style.cursor = "progress";
    else 
        document.body.style.cursor = "auto";
    if (force || theme)
    return (
    <ThemeProvider theme={theme === "Luke Skywalker" ? lukeTheme : darthTheme}>
    <React.Fragment>
        <GlobalTheme />
        <Nav>
            <Link to="/"><ArrowBack /> <Back>Back</Back></Link>
        </Nav>
        <Container>
            <ButtonChange onClick={callForce} disabled={loading === true ? true : false}>
                choose your path again, Padawan
            </ButtonChange>
            <Img src={theme === "Luke Skywalker" ? luke_skywalker : darth_vader} alt="darth_vader" />
            <Title>
                Your master is <Bold>{theme === "Luke Skywalker" ? 'Luke Skywalker' : 'Darth Vader'}</Bold>
            </Title>
        </Container>
    </React.Fragment>
    </ThemeProvider>
    );
    else return null
};

/* CSS */
const Nav = styled.nav`
display: flex;
margin: 35px 48px 93px 48px;
cursor: point;
`;
const Back = styled.p`
font-size: 18px;
margin-left: 20px;
`;
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    @media(max-width: 800px) {
        padding: 0 20px;
    }
`;
const ButtonChange = styled.button`
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
}
`;
const Img = styled.img`
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
const Title = styled.h1`
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
const Bold = styled.b`
font-weight: bold;
`;
/* end CSS */

export default Result;