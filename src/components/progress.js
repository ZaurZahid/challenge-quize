import React from 'react'
import './progress.css'

const Progress = ({val}) => {
    return (
        <div id='myProgress'>
            <div
                id='myBar'
                style={{
                    width: val + '%',
                    backgroundColor: 'grey',
                    height: 24
                }}
                />
        </div>
    )
}

export default Progress;