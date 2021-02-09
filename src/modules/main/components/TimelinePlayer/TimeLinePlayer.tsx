import React from 'react'
import {FaPlay} from 'react-icons/fa'
import Slider from 'react-input-slider'

import styles from './TimeLinePlayer.module.css'

const stylerStyles = {
    active: {},
    thumb: {
        background: '#f1f1f1',
        width: 10,
        height: 10,
        transition: 'all 250ms ease-in-out',
        '&:hover': {
            width: 15,
            height: 15
        }
    },
    track: {
        width: '50%',
        background: '#123e8e',
        borderRadius: 4,
        height: 4
    },
}

export default function TimeLinePlayer() {
    return (
        <div className={styles.container}>
            <span className={styles.data}>00/00/0000</span>
            <button className={styles.button}><FaPlay className={styles.play}></FaPlay></button>
            <Slider axis="x" xreverse={false} yreverse={false} xmax={100} xmin={0} x={0} styles={stylerStyles}></Slider>
        </div>
    )
}
