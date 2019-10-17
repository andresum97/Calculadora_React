import React from 'react';
import { shallow } from 'enzyme';
import Buttons from './buttons';
import { isTSAnyKeyword } from '@babel/types';

describe('display number', () => {
    test('Show the value of the button', () =>{
        const component = shallow(<Buttons numbervalue='2' />);
        expect(component.props().includeProp).to.equal('2');
    });
});