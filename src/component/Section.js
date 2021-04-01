import React, { Component } from 'react'
import { Route, Router, Switch } from 'react-router-dom'

import Beer from './section/Beer'
import Table from './section/Table'
import Fresh from './section/Fresh'
import Food from './section/Food'

export class Section extends Component {
    render() {
        return (
            <div>
            {/* <div style={{paddingTop: "70px"}}>
                Section
                <div style={{width:'200px' , height: '400px'}}>Div 1</div>
                <div style={{width:'200px' , height: '400px'}}>Div 1</div>
                <div style={{width:'200px' , height: '400px'}}>Div 1</div>
            <div style={{width:'200px' , height: '400px'}}>Div 1</div>
            <div style={{width:'200px' , height: '400px'}}>Div 1</div>
            <div style={{width:'200px' , height: '400px'}}>Div 1</div>
            <div style={{width:'200px' , height: '400px'}}>Div 1</div>

            </div> */}
            <section style={{ paddingTop: "70px" }}>
                <Switch>
                    <Route path="/" component={Food} exact />
                    <Route path="/thucpham" component={Fresh} />
                    <Route path="/bia" component={Beer} />
                    <Route path="/datban" component={Table} />
                </Switch>
            </section>
            </div>

        )
    }
}

export default Section
