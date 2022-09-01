import React from 'react';
import { Link } from 'react-router-dom';

/* Imgs */
import {ReactComponent as ArrowBack} from '../../img/arrow_back.svg';
import luke_skywalker from '../../img/luke_skywalker.svg';
import darth_vader from '../../img/darth_vader.png';

/* CSS */
import { ThemeProvider } from "styled-components";
import { lukeTheme, darthTheme } from "./theme";
import GlobalTheme from "./globals";
import { Nav, Back, Container, ButtonChange, Img, Title, Bold } from './style.js';

/* Others */
import UserContext from '../UserContext';


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

export default Result;