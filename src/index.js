import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import getMock from './serviceMock';
const log = console.log;

var state = getMock();
log({state});

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        state = JSON.parse(xhttp.responseText);
        log({state});

        ReactDOM.render(
            <React.StrictMode>
                <BusLines state={state}/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }
};
xhttp.open("GET", "http://localhost:8080/test", true);
xhttp.send();







function BusLines({state}) {
    return state.busLines.map((line, index) => {

        const busStops = <ul>
            {line.stops.map(stop => {
                return <li key={'line_' + line.lineNumber + 'stop_' + stop.stopId + 'direction_' + stop.directionCode}>
                    {stop.stopName} - {stop.directionCode}
                </li>;
            })}
        </ul>;

        return (
            <div key={line.lineNumber}>
                <h1>{index + 1}. Linje {line.lineNumber} - Antal
                    stopp {line.numberOfStops}</h1>
                {busStops}
            </div>);
    });

}

function BusLine() {

    return <div>HELLO</div>

}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
