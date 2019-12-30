import React from 'react';
import '../css/balloon.css';

class HappyNewYear extends React.Component {
    render() {
        return(
            <div className="happyNewYear">
                <h3 className="title">Happy New Year &#x270c;&#128522;&#x270c;&#128540;</h3>
                <div className="balloon"></div>
                <div className="balloon"></div>
                <div className="balloon"></div>
                <div className="balloon"></div>
                <div className="balloon"></div>
            </div>
        )
    }
}

export default HappyNewYear;