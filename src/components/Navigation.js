import React from 'react';
import FlowerIcon from './FlowerIcon.png';

export default class Navigation extends React.Component {
    render() {
        return (
            <div id="center">
              <ul id="navbar">
                <img src={FlowerIcon} />
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
        );
    }
}