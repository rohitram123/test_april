import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ViewScreen from './components/Screens/View/ViewScreen';
import Screen1 from './components/Screens/Actual/Actual';
import Screen2 from './components/Screens/Report/Report';
import Screen3 from './components/Screens/Required/Required';
import Screen4 from './components/Screens/Actual/Actual';
import Screen5 from './components/Screens/Report/Report';
import Screen6 from './components/Screens/Required/Required';
import './styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMenuItem: 'view', // Initialize selected menu item
            isUserInfoOpen:false,
            isNotificationOpen: false,           
            isFloatingPanePinned: false,
            isFloatingPaneHidden: false,
        };
    }
    
    toggleFloatingPane = () => {
        this.setState(prevState => ({ isFloatingPaneOpen: !prevState.isFloatingPaneOpen }));
    }

   
    handleMenuItemClick = (menuItem) => {
        this.setState({ selectedMenuItem: menuItem }); // Update selected menu item
    };

    handleNotificationToggle = () => {
        this.setState(prevState => ({ isNotificationOpen: !prevState.isNotificationOpen }));
   }

   handleUserInfoToggle = () => {
    this.setState(prevState => ({ isUserInfoOpen: !prevState.isUserInfoOpen }));
}

   

 
    render() {
        const { selectedMenuItem, isUserInfoOpen, isNotificationOpen } = this.state;
        const { isFloatingPaneOpen } = this.state;

        return (
            <Router>
                <div className="app">
                    <div className="header"></div>
                    <div className="menu">
                       

                        <div className="menu-items">
                        <img src={require('./logo.png')} alt="" style={{ width: '90px', height: '40px',paddingTop:'5px' }}  />
                            <Link to="/view" className="menu-item" onClick={() => this.handleMenuItemClick('view')}>
                                <span style={{ fontSize: '12px' }}>View screen</span>
                                <div className={`menu-item-line ${selectedMenuItem === 'view' ? 'selected' : ''}`} style={{ backgroundColor: selectedMenuItem === 'view' ? 'blue' : 'white' }}></div>
                            </Link>
                           
                              
                        </div>
                        <div className="menu-end-items">
                        <div className="notification-icon" onClick={this.handleNotificationToggle}>
                            <button style={{ fontSize: '24px' }}>Click me </button>
                        </div>

                        
                
                       
                        <div className="user-info">
                            <div className="user-icon" onClick={this.handleUserInfoToggle}>
                                <button style={{ fontSize: '24px' }}> hi</button>
                            </div>
                            {isUserInfoOpen &&
                                <div className="user-info-dialog">
                                    <div className="header">User Information</div>
                                    <p>Name: John Doe</p>
                                    <p>Employee ID: 12345</p>
                                    <button onClick={this.handleLogout}>Logout</button>
                                </div>
                            }
                        </div>
                    </div>
                      
                    </div>
                    <Routes>
                        <Route path="/view" element={<ViewScreen isFloatingPaneOpen={isFloatingPaneOpen} isNotificationOpen={isNotificationOpen} />} />
                        
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
