import React from 'react';
import { useNavigate } from 'react-router-dom';

function DukeWSoccer() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    const styles = {
        container: {
            textAlign: 'center',
            padding: '20px',
        },
        header: {
            width: '100vw',
            padding: '20px',
            backgroundColor: '#1D3977',
            color: '#FFFFFF',
            boxSizing: 'border-box',
            margin: '0px',
            top: '0',
            left: '0',
            position: 'fixed',
        },
        buttons: {
            padding: '10px',
            margin: '20px',
            marginRight: '10px',
            cursor: 'pointer',
        },
        image: {
            width: '100%',
            maxWidth: '800px',
            height: 'auto',
            display: 'block',
            margin: '20px auto',
        },
        section: {
            width: '100%',
            maxWidth: '800px',
            marginBottom: '20px',
            marginTop: '120px',
            textAlign: 'center',
        },
        text: {
            marginBottom: '20px',
            fontSize: '16px',
            lineHeight: '1.5',
        },
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Duke Women's Soccer Summary</h1>
                <button onClick={goToHome} style={styles.buttons}>
                    Home
                </button>
            </header>

            <section style={styles.section}>
                <h2>Distribution of Points (PTS) Among Players</h2>
                <img
                    src="/Figure_1.png"
                    alt="Duke Women's Soccer Goals Distribution"
                    style={styles.image}
                />
            </section>

            <section style={styles.section}>
                <p style={styles.text}>
                    Here is a chart demonstrating the current distribution of goals scored by
                    the players of the Duke women's soccer team! One player scored as many as
                    30 goals this season.
                </p>
                <p style={styles.text}>
                    Overall, they had a 15-2-1 record, and they are now first seed in the
                    current NCAA tournament for the first time in program history.
                </p>
            </section>
        </div>
    );
}

export default DukeWSoccer;