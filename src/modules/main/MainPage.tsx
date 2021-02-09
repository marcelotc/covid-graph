import React from 'react'
import styles from './Mainpage.module.css';
import Mapbox from './components/Map/Mapbox';
import Chart from './components/Chart/Chart';
import Ranking from './components/Ranking/Ranking';
import TimeLinePlayer from './components/TimelinePlayer/TimeLinePlayer';

export default function MainPage() {
    return (
        <div className={styles.container}>
            <div className={styles.mapContainer}><Mapbox></Mapbox></div>
            <div className={styles.chartContainer}><Chart></Chart></div>
            <div className={styles.rankContainer}><Ranking></Ranking></div>
            <div className={styles.playerContainer}><TimeLinePlayer></TimeLinePlayer></div>
        </div>
    )
}
