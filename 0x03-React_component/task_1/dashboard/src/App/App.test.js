import React from 'react';
import App from './App';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { shallow } from 'enzyme';

describe('App tests', () => {
    let mockLogOut;
    let mockAlert;

    beforeEach(() => {
        mockLogOut = jest.fn();
        mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    });

    afterEach(() => {
        mockAlert.mockRestore();
    });

    it('renders without crashing', () => {
        const component = shallow(<App />);

        expect(component).toBeDefined();
    });

    // Other tests...

    it('calls logOut function and alerts when ctrl + h are pressed', () => {
        const component = shallow(<App logOut={mockLogOut} />);

        const mockEvent = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
        document.dispatchEvent(mockEvent);

        expect(mockAlert).toHaveBeenCalledWith('Logging you out');
        expect(mockLogOut).toHaveBeenCalled();
    });
});
