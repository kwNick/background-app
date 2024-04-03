import React from 'react'
import desert_car from '../assets/desert_car.mp4'
const Main = () => {
    return (
        <div className="main">
            <div className='overlay'></div>
            <video src={desert_car} autoPlay loop muted />
            <div className='content'>
                <h1>Welcome!</h1>
                <p>To My Site.</p>
            </div>
        </div>
    )
}

export default Main