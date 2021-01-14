import React, {Component} from 'react'
import {Spinner} from 'react-bootstrap/cjs/index';
import texts from '../nls/texts';
import BusLines from './BusLines'
import Error from './Error';
import * as core from '../core'
import serviceEndpoint from '../serviceEndpoints.json'

const serviceDomain = process.env.REACT_APP_SERVICE_DOMAIN;

const mostStopURL = `${serviceDomain}${serviceEndpoint.mostStops}?lineCount=10`;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = core.createInitialState();
    }

    componentDidMount() {
        fetch(mostStopURL)
            .then(res => res.json())
            .then((data) => {
                this.setState(core.receiveServiceData(this.state, data));
            })
            .catch(console.log);
    }

    render() {
        return (<div>
            <div className="page-header">
                <h1>{texts.pageHeader}</h1>
            </div>
            <div className='content'>
                <div className='info-text'>
                    <p>{texts.infoText}</p>
                    <a href='https://www.trafiklab.se/api/sl-hallplatser-och-linjer-2/dokumentation'>{texts.linkText}</a>
                </div>
                {core.isFetching(this.state) ?
                    <div className='spinner'><Spinner animation="border"/></div> :
                    core.getResponse(this.state) ? <BusLines state={core.getResponse(this.state)}/> : <Error/>
                }
            </div>
        </div>);
    }


}



