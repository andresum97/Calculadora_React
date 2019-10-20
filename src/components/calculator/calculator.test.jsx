import React from 'react';
import { shallow, mount } from 'enzyme';
import Calculator from './caltulator';
import Display from '../display/display';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';


describe('click a value', () => {
    test('found some number', () => {
        const calc = shallow(<Calculator />);

        const display = calc.find(Display);
        expect(display.exists()).toBe(true);
        //Get buttons
        // const button1 = calc.childAt(0).childAt()
    });

    test('sum two numbers', () => {
        const calc = mount(<Calculator />);
        const display = calc.find(Display);
        // calc.setState({
        //     operation: 1,
        //     num1: 2,
        //     value: 5,
        // });
        calc.find('#num2').simulate('click');
        calc.update();
        calc.find('#sum').simulate('click');
        calc.update();
        calc.find('#num5').simulate('click');
        calc.find('#equal').simulate('click');
        calc.update();
        let value = calc.state().value;
        // expect(display.exists()).toBe(true);
        expect(value).toBe("7");
    });
});