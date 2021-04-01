import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import classNames from 'classnames';


import '../css/Header.css';
import { MainData, NavChild } from '../data/MenuData'

export class MainNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentRoute: ''
        };
        this.changePath = this.changePath.bind(this)
    }


    changePath = (path) => {
        console.log("path click: " , path)
        console.log("pathWindow: ", window.location.pathname);
        if (path != window.location.pathname) {
            this.setState({ currentRoute: path });
        } else {
            console.log("path not change")
            return;
        }
    }

    render() {
        return (
            <div className="main-nav">
                <nav>
                    <ul>
                        {
                            MainData.map((value, key) => {
                                console.log("pathname: ", window.location.pathname, "title:", value.title);
                                return (
                                    <li><Link to={value.link}
                                        key={key}
                                        // onClick={() =>{window.location.pathname = value.link}}
                                        onClick={() => this.changePath(value.link)}
                                        className={"item-menu",classNames(window.location.pathname === value.link ? "active" : "")}>
                                        {value.title}
                                    </Link></li>
                                )
                            })
                        }

                        <li className="dropdown">
                            <li className=" dropdown-toggle" id="catagory-more" role='button' data-toggle="dropdown" aria-expanded="true">
                                <span className="btn-more-nav">
                                    ...</span>
                            </li>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {
                                    NavChild.map((value, key) => {
                                        return (
                                            <li><Link to={value.link}
                                                key={key}
                                                className="dropdown-item">
                                                {/* //  className={"dropdown-item", {item: true}}>  */}
                                                {value.title}
                                            </Link></li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }
}

export default MainNav
