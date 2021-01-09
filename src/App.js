import React, {Component} from 'react'
import {Spinner} from 'react-bootstrap';
import texts from './nls/texts';
import BusLines from './BusLines'
import Error from './Error';
const topStopEndpoint = process.env.REACT_APP_TOP_STOPS_ENDPOINT

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {fetching: true};
    }

    componentDidMount() {
        fetch(topStopEndpoint)
            .then(res => res.json())
            .then((data) => {
                if (!data.error) {
                    this.setState({response: data, fetching: false})
                } else {
                    this.setState({error: true, fetching: false})
                }
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

                {this.state.fetching ?
                    <div className='spinner'><Spinner animation="border"/></div> :
                    this.state.response ? <BusLines state={this.state.response}/> : <Error/>
                }
            </div>
        </div>);
    }

}



