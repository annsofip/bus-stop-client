import React from 'react';
import ReactDOM from 'react-dom';
import BusLines from './BusLines';
import * as serviceMock from '../serviceMock';

it('renders component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BusLines state={serviceMock.getMock()}/>, div);
});
