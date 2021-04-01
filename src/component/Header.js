import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import classNames from 'classnames';
import "@fortawesome/free-solid-svg-icons"

import './css/Header.css'
import MainNav from './Header/MainNav';
import PicVie from './svg/Flag_Nation_vietnam.svg'
import PicAmer from './svg/flag-America.svg'

export class Header extends Component {
    // super(props);


    render() {

        return (
            <header>
                <div className="container-header">
                    <div className="container">
                        <div className="header-content row">
                            <div className='logo col-auto'>
                                <img src="https://www.now.vn/app/assets/img/nowvn.png?aa6bbddbf923c9dfd35ca83a7d068e6d" alt='' />
                            </div>

                            <div class="dropdown col-auto">
                                <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="true">
                                    TP.HCM
                                 </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <ul>
                                        <li><Link to="/" className="dropdown-item">Link</Link></li>
                                        <li><a href="https://www.now.vn/" className="dropdown-item">thẻ a</a></li>
                                        <li><a href="!#" className="dropdown-item">TP.HCM</a></li>
                                        <li><a href="!#" className="dropdown-item">Đằ Nẳng</a></li>
                                        <li><a href="!#" className="dropdown-item">Vũng tàu</a></li>
                                        <li><a href="!#" className="dropdown-item">Nghệ An</a></li>
                                        <li><a href="!#" className="dropdown-item">Bình dương</a></li>
                                        <li><a href="!#" className="dropdown-item">Củ chi</a></li>
                                    </ul>
                                </div>
                            </div>
                            <MainNav />
                            <div className="search header-icon-search col-auto">
                                {/* <span class="bi bi-search" style={{width:"30px" , height:"30px"}}></span> */}
                                {/* <span class="fa fa-mobile-phone fa-2x"></span> */}
                                {/* <i class="fa fa-search fa-2x" aria-hidden="true"></i> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>
                            <div class="btnLogin col-auto">
                                <Link to="/login"><button  type="button" className="btn btn-none-bg btn-login " > Đăng nhập</button></Link>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className=' dropdown dropdown-flag language col-auto'>
                                <li className='dropdown-toggle afLi' id="catagory-more" role='button' data-toggle="dropdown" aria-expanded="true">
                                   <img src={PicVie} width="26" height="21" />
                                </li>
                                <ul class="dropdown-menu posiLang" aria-labelledby="dropdownMenuButton">
                                    <li><Link to="" className="dropdown-item" >
                                        <img src={PicVie} width="24" height="20" /> Tiếng Việt
                                    </Link>
                                    </li>
                                    <li><Link to="" className="dropdown-item" >
                                        <img src={PicAmer} width="24" height="20" />Tiếng Anh
                                    </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                </div>
            </header>

        )
    }
}

export default Header
