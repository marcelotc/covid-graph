import React from 'react';
import styles from './Chart.module.css';
import LineChart from './LineChart';

export default function Chart() {
    return (
        <>
        <h4 className={styles.title}>Curva de crescimento da Covid-19</h4>
            <div className={styles.radio}>
                <input type="radio" name="serie" className={styles.confirmed} checked={true}></input>
                <label htmlFor="confirmed">Casos confirmados</label>
                <input type="radio" name="serie" className={styles.deaths} checked={false}></input>
                <label htmlFor="deaths">Mortes confirmadas</label>
            </div>
            <LineChart></LineChart>
        </>
    )
}
