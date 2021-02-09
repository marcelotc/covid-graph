import React from 'react'
import styles from './Ranking.module.css'
import clsx from 'clsx'

export default function Ranking() {
    return (
        <>
            <h4 className={styles.title}>Ranking de Paízes</h4>
            <ol className={styles.listContainer}>
                <li className={clsx(styles.card, styles.listHeader)}>
                    <div>N</div>
                    <div>País</div>
                    <div>Casos</div>
                </li>
                <li className={styles.card}>
                    <div>1</div>
                    <div>País</div>
                    <div>500</div>
                </li>
            </ol>
        </>
    )
}
