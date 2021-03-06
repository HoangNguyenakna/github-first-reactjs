import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

import '../../css/Restaurant.css'
import { ResData } from '../../data/InfoData'


export class Restaurant extends Component {

    constructor(props){
        super(props);
    }
    
    render() {
        const {src, resName, addressRes, contentPromo, online, key} = this.props;
        console.log("props:=========================== " , this.props)
        return (
            <>
                        <div className='item-restaurant'>
                            <Link to='' className='item-content'>
                                <div className='img-restaurant'>
                                    <img src={src} />
                                </div>
                                <div className='info-restaurant'>
                                    <div className='info-basic-res'>
                                        <h4 className='name-res' title={resName}>{resName}</h4>
                                        <div className='address-res' title={addressRes}>{addressRes}</div>
                                    </div>
                                
                                <p className='content-promotion'>
                                    <FontAwesomeIcon icon={faTag} color="#cf2127" size='sm' />
                                   &ensp; {contentPromo}</p>
                                <div></div>
                                </div>
                            </Link>
                        </div>
            </>

            // <>
            //     <div className='item-restaurant'>
            //         <Link to='' className='item-content'>
            //             <div className='img-restaurant'>
            //                 <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg" />
            //             </div>
            //             <div className='info-restaurant'>
            //                 <div className="info-basic-res">
            //                     <h4 className='name-res' title='M??n qu??n xuy??n Vi???t'>M??n qu??n xuy??n Vi???t</h4>
            //                     <div className='address-res' title='39/22/10 Ho??ng B???t ?????t, P.15, T??n B??nh TP.HCM'>39/22/10 Ho??ng B???t ?????t, P.15, T??n B??nh TP.HCM</div>
            //                 </div>
            //                 <p className='content-promotion'>
            //                     <FontAwesomeIcon icon={faTag} color="#cf2127" size='sm'/>
            //                       &ensp;{contentPromo}</p>
            //                       {/* Gi???m h???t 15%</p> */}
            //                 <div></div>
            //             </div>
            //         </Link>
            //     </div>
            // </>
        )
    }
}

export default Restaurant
