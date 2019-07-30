import React, { Component } from 'react';

import './MainMenu.css';

import {
    Link,
    withRouter
} from 'react-router-dom';

import { Layout, Menu, Icon } from 'antd';
const Content = Layout.Content;

class MainMenu extends Component {
	constructor(props) {
        super(props);   
        this.handleMenuClick = this.handleMenuClick.bind(this);   
	}

    handleMenuClick({ key }) {
      if(key === "logout") {
        this.props.onLogout();
      }
    }

    render() {
    	let menuItems;
        if(this.props.currentUser) {
        	menuItems = [
        		<Menu.Item className="item" key="/newgame">
        			<Link to="/newgame">
						CREATE GAME
					</Link>
        		</Menu.Item>,
        		<Menu.Item className="item" key="/gamelist">
        			<Link to={`/gamelist/${this.props.currentUser.id}`}>
        				ENTER GAME
        			</Link>
        		</Menu.Item>,
        		<Menu.Item className="item" key="/profile">
        			<Link to={`/users/${this.props.currentUser.username}`}>
        				USER PROFILE
        			</Link>
        		</Menu.Item>,
        		<Menu.Item className="item" key="/settings">
        			<Link to="/settings">
        				SETTINGS
        			</Link>
        		</Menu.Item>,
                <Menu.Item className="item" key="/gameboardtest">
                    <Link to="/gameboardtest">
                        GAME BOARD TEST
                    </Link>
                </Menu.Item>,
        		<Menu.Item className="item" key="logout">
        			LOG OUT
        		</Menu.Item>,  
                <Menu.Item className="item" key="/playground">
                    <Link to="/playground">
                        PLAYGROUND
                    </Link>
                </Menu.Item>,       		
        	];
        } else {
        	menuItems = [
        		<Menu.Item className="item" key="/newgame">
        			<Link to="/login">
        				LOGIN
        			</Link>
        		</Menu.Item>,
        		<Menu.Item className="item" key="/findgame">
        			<Link to="/signup">
        				SIGN UP
        			</Link>
        		</Menu.Item>,
        	];
        }

        return (
            <Content className="app-content">
            <div className="container">
              <div className="app-title" >
                <Link className="app-title" to="/">WELCOME TO CATAN</Link>
              </div>
              <Menu onClick={this.handleMenuClick}
                className="app-menu"
                mode="vertical"
                selectedKeys={[this.props.location.pathname]}
                style={{ lineHeight: '30px' }} >
                  {menuItems}
              </Menu>
            </div>
          </Content>
        );
    }
}


export default withRouter(MainMenu);