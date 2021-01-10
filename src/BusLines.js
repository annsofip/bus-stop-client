import texts from './nls/texts';

function BusStop({line}) {
    return (<ul className="read-more-wrap">
        {line.stops.filter(stop => stop.directionCode === '1').map((stop, i) => {
            return (<li
                className={i > 20 ? 'read-more-target' : ''}
                key={'line_' + line.lineNumber +
                'stop_' + stop.stopId +
                'direction_' + stop.directionCode}>
                {stop.stopName} {stop.stopId}
            </li>);
        })}
    </ul>);
}

export default function BusLines({state}) {
    return <div className='items'>{state.busLines.map((line, index) => {
        return (
            <div key={line.lineNumber} className="item">
                <input type="checkbox" className="read-more-state" id={'button_' + line.lineNumber}/>
                <div className='header'>
                    <h2>{index + 1}. {texts.line} {line.lineNumber}</h2>
                    <p>{texts.numberOfStops} {line.numberOfStops}</p>
                    <h3>{texts.stopsHeader}</h3>
                </div>
                <BusStop line={line}/>
                <label htmlFor={'button_' + line.lineNumber} className="read-more-trigger"/>
            </div>);
    })}</div>;
}
