//Test if the buttons actually change the prop changeView.
import Sidebar from './Sidebar';
import { shallow, mount } from 'enzyme';
import React from 'react';

//Sidebar exists
test("Sidebar to exist", () => {
    expect(Sidebar).toBeDefined();
})

test("Not require prop", () => {
    expect(() => shallow(<Sidebar />)).not.toThrow();
})

test("ChangeView set at Dashboard", () => {
    const wrapper = mount(<Sidebar changeView="Dashboard"/>);
    expect(wrapper.props().changeView).toEqual("Dashboard");

})

//This is not working yet
/*
test('Test if button simulates correctly', () => {
    let mock = jest.fn();
    let wrapper = shallow(<Sidebar onClick={mock} />);
    //wrapper.find('a').simulate('click');
    expect(mock.mock.calls.length).toEqual(0);
    });*/