import texts from '../nls/texts';
import React from 'react';


function BusStop({line}) {
    return (<ul className="read-more-wrap">
        {line.stops.map((stop, i) => {
            return (<li
                className={i > 20 ? 'read-more-target' : ''}
                key={'line_' + line.lineNumber +
                'stop_' + stop.stopId +
                'direction_' + stop.directionCode}>
                {stop.stopName}
            </li>);
        })}
    </ul>);
}

function BusLine({line, ranking}) {
    return (<div className="item">
        <input type="checkbox" className="read-more-state" id={'button_' + line.lineNumber}/>
        <div className='header'>
            <h2>{ranking}. {texts.line} {line.lineNumber}</h2>
            <p>{texts.numberOfStops} {line.numberOfStops}</p>
            <h3>{texts.stopsHeader}</h3>
        </div>
        <BusStop
            line={line}/>
        <label htmlFor={'button_' + line.lineNumber} className="read-more-trigger"/>
    </div>);
}

export default function BusLines({state}) {
    return <div className='items'>
        {state.busLines.map((line, index) => {
            return (<BusLine key={line.lineNumber} line={line} ranking={index + 1}/>);
        })}
    </div>;
}
