{/* <nav>
                    <ul>
                        <Link to="/" className={classNames}>
                            Đồ ăn
                        </Link>
                        <li><Link to="/nhahang">Nhà hàng</Link></li>
                        <li><Link to="/thucpham">Thực phẩm</Link></li>
                        <li><Link to="/bia">Bia</Link></li>
                        <li><Link to="/hoa">Hoa</Link></li>
                        <li><Link to="/sieuthi">Siêu thị</Link></li>
                        <li><Link to="/thuoc">Thuốc</Link></li>
                        <li class="dropdown">
                            {/* <div > 
                            <li class=" dropdown-toggle" id="catagory-more" role='button' data-toggle="dropdown" aria-expanded="true">
                                <span className="btn-more-nav">
                                   
                                    ...
                                </span>
                            </li>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><Link to="/thucung" className="dropdown-item">Thú cưng</Link></li>
                                <li><Link to="/thucung" className="dropdown-item">Giặt ủi</Link></li>

                            </ul>
                        </li>
                    </ul>
                </nav> */}
                
                <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></li>



    margin-right: 15px;
.category-list-filter{
    padding-left: 0;
    /* margin-top: 15px; */
    /* padding-top: 5px; */
}

.category-list-filter >a{
    /* box-sizing:  */
    color: white;
    margin-bottom: 15px;
    margin-right: 15px;
    box-sizing: content-box;
    height: 33px;
    display: inline-block;/*inline-block có tác dụng xác định các thành phần sẽ được hiển thị theo khối nhưng là các khối inline.*/
}

.category-list-filter a:hover{
    text-decoration: none;

}

.category-list-filter .category-item:hover{
    background: white;
    border:1px solid white;
    color: #252525;
}

.category-list-filter .category-item{
    border-radius: 4px;
    box-sizing: content-box;
    background: transparent;
    /* font-size: 14px; */
    padding: 5px 15px;
    white-space: nowrap;
    cursor: pointer;
    transition: all .3s ease;
    white-space: nowrap;
    /* border: 1px solid ; */

    /* border-top-color: initial;
    border-top-style: solid;
    border-top-width: 1px;
    border-right-color: initial;
    border-right-style: solid;
    border-right-width: 1px;
    border-bottom-color: initial;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-left-color: initial;
    border-left-style: solid;
    border-left-width: 1px;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial; */
}