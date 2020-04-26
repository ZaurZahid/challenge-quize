import React from 'react'
import './scorebar.css'

const ScoreBar = ({ val1, val2, val3 }) => {
    return (
        <React.Fragment>
            <div className='d-flex justify-content-between'>
                <p>Score: {Math.floor(val2)}%</p>
                <p>Max Score: {val3}%</p>
            </div>
            <div id='scoreBar' className='d-flex'>
                <div
                    id='Min Score'
                    style={{
                        width: val1 + '%',
                        backgroundColor: 'black',
                        height: 32
                    }}
                />
                <div
                    id='Score'
                    style={{
                        width: val2 - val1 + '%',
                        backgroundColor: 'Gray',
                        height: 32
                    }}
                />
                <div
                    id='Max Score'
                    style={{
                        width: val3 - val2 + '%',
                        backgroundColor: 'LightGray',
                        height: 32
                    }}
                />
            </div>
        </React.Fragment>
    )
}

export default ScoreBar;