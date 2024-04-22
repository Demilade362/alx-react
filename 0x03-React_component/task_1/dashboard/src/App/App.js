import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import './App.css';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: getLatestNotification() },
];

class App extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        const { logOut } = this.props;
        if (event.ctrlKey && event.key === 'h') {
            alert('Logging you out');
            logOut();
        }
    };

    render() {
        const { isLoggedIn } = this.props;
        return (
            <React.Fragment>
                <div className='App'>
                    <div className='heading-section'>
                        <Notifications listNotifications={listNotifications} />
                        <Header />
                    </div>
                    {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

App.defaultProps = {
    isLoggedIn: false,
    logOut: () => {}, // Default empty function for logOut prop
};

App.propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
};

export default App;