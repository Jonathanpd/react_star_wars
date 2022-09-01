import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../Home.module.scss';
import UserContext from '../../Components/UserContext';

const Home = () => {
    const { request, force } = React.useContext(UserContext);
    const [theme, setTheme] = React.useState(null);
    const callForce = () => {
        request();
        if (force || theme) {
        window.localStorage.setItem("theme", force.name);
        setTheme(force.name);
        }
    };
    return (
    <div data-testid="homenav" className={styles.welcome__wrap}>
        <h1 className={styles.welcome__h1}>Welcome to <b className={styles.welcome__bold_title}>iClinic</b></h1>
        <h2 className={styles.welcome__h2}>FRONTEND CHALLENGE</h2>
        <Link data-testid="result_link" to="/Result" onClick={callForce} className={styles.welcome__btn}>Start</Link>
    </div>
    );
};

export default Home;