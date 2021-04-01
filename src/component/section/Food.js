import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

import "../css/Food.css"
import { CategoryListFilter } from "../data/MenuData"
import Restaurant from './Food/Restaurant';
import SelectedRestaurant from './Food/SelectedRestaurant'
import { ResData, SelectedRestaurants } from '../data/InfoData'

export class Food extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visiable: 9
        }
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState((old) => {
            return { visiable: old.visiable + 9 }
        })
    }


    render() {
        console.log("resData  :", ResData)
        return (
            <>
                {/* <h2>This is food page </h2> */}
                <div className="now-banner">
                    <div className="container">
                        <div className="now-search">
                            <div >
                                <h1 class="title">Đặt đồ, giao hàng từ 20'...</h1>
                                <div className="local">có 49378 địa điểm ở TP. HCM từ 00:00 - 23:59</div>
                            </div>
                            <div className="form-search">
                                <div className="input-group">
                                    <input type="text" class="inp-search" placeholder="Tìm địa điểm, món ăn, địa chỉ..." />
                                    <Link>
                                        <button type="button" className="btn btn-search" style={{ color: "white" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="category-list-filter">
                                {
                                    CategoryListFilter.map((item, key) => {
                                        return (
                                            <Link to={item.link} key={key} onClick="">
                                                <span className="category-item">{item.title}</span>
                                            </Link>
                                        );
                                    })
                                }
                            </div>
                            <div className="introduc1">
                                <div className="font18 mb-2 mt-3">
                                    Sử dụng app now để có nhiều giảm giá<br />
                                    và trải nghiệm tốt hơn
                                </div>
                                <div className='availbeDownload'>
                                    <Link to="">
                                        <div className="download iphoneDownload"></div>
                                    </Link>
                                    <Link to="">
                                        <div className="dowload gg-playDownload"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contain-main-home clearfix">
                    <div className='container'>
                        <div className='main-right-home' >
                            <div className='user-get-local' >
                                <div className='row align-item-center not-gutter pointer'>

                                    {/* component */}
                                    <div className='col-auto'>
                                        <span style={{ color: "#0288d1" }}>
                                            <strong>Đô ăn  &ensp;</strong>
                                        </span>
                                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                                    </div>{/* component */}

                                    <div className='col pl-2 pr-2 txt-ellipsis'>Chọn địa chỉ giao hàng</div>
                                    <div className='col-auto' >
                                        <span className='pl-2 pr-2 link' data-toggle='modal'>
                                            {/* <i class="fas fa-angle-right glpyhicons"></i>   */}
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='now-list-restaurant '>
                                <div className='title-wrap'>
                                    <h2 class="title">Ưu đãi</h2>
                                    <Link to="" className="showing-all-restaurant" >
                                        <span className='icon-list-deal'>
                                            <span className='square'></span>
                                            <span className='square'></span>
                                            <span className='square'></span>
                                            <span className='square'></span>
                                        </span>
                                        Xem tất cả
                                    </Link>
                                </div>
                                <div className='list-restaurant'>
                                    {
                                        // ResData.map((item, key) => {
                                        ResData.slice(0, this.state.visiable).map((item, key) => {
                                            console.log("item +++++++ : ", item);
                                            console.log("key +++++++ : ", key);
                                            return (
                                                <Restaurant src={item.img}
                                                    resName={item.resName}
                                                    addressRes={item.address}
                                                    contentPromo={item.contentPromo}
                                                    online={item.online}
                                                    key={key} />
                                            );
                                        })
                                    }
                                </div>
                                <div className='txt-center mt-2' >
                                    <button className="btnLoadMore" type='button' onClick={this.loadMore}>
                                        <span style={{ color: "#0288d1" }}>Xem thêm </span>
                                        <FontAwesomeIcon icon={faRedo} color="#0288d1" size='xs' />

                                    </button>
                                </div>
                            </div>
                            <div className='now-list-restaurant '>
                                <div className='title-wrap'>
                                    <h2 class="title">Bộ sưu tập</h2>
                                    <Link to="" className="showing-all-restaurant" >
                                        <span className='icon-list-deal'>
                                            <span className='square'></span>
                                            <span className='square'></span>
                                            <span className='square'></span>
                                            <span className='square'></span>
                                        </span>
                                        Xem tất cả
                                    </Link>
                                </div>
                                <div className ='list-restaurant'>
                                    {
                                        SelectedRestaurants.map((item, key)=>{
                                            return(
                                                <SelectedRestaurant imgRes ={item.img} 
                                                    nameRes={item.resName}
                                                    countLocal = {item.countLocal}
                                                    key ={key}
                                                />
                                            );
                                        })
                                    }
                                </div>
                            </div>
                            <div className='now-list-restaurant '></div>
                            <div className='now-list-restaurant '></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Food