import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme,{shallow} from 'enzyme'
import App from './App';
import { ValueInput } from './ValueInput';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { children } from 'cheerio/lib/api/traversing';
import { text } from 'cheerio/lib/api/manipulation';
import { debug } from 'loglevel';

Enzyme.configure({adapter:new Adapter()});

it("renders three value input",()=>{
    const wrapper=shallow(<App/>);
    const valCount=wrapper.find(ValueInput).length;
    expect(valCount).toEqual(3);
});

