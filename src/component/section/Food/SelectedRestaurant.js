import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import "../../css/SelectedRestaurant.css"

export class SelectedRestaurant extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {imgRes, nameRes, countLocal} = this.props;
        return (
            <div className='item-restaurant'>
                <Link className='item-content'>
                    <div className='img-restaurant'>
                        <img src={imgRes} />
                    </div>
                    <div className='info-restaurant'>
                        <h4 className='name-res'>{nameRes}</h4>
                        <div className='font12 txt-blue'>{countLocal}</div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default SelectedRestaurant
