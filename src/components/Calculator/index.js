import React, { Component } from 'react';
import Slider from 'rc-slider';
import {pageViewMarks, monthlyVideoMarks, cpmMarks} from './marks';

class Calculator extends Component {
    componentWillMount(){
        this.setState({
            monthlyPageViews: 300000000,
            monthlyVideoViews: 50000000,
            avgCPM: 10,
            pAnnualRevenue: 1000,
            pAnnualVideoViews: 54000000
        })
    }
    onMPVChange(value){
        this.setState({monthlyPageViews: value})
    }
    onMVVChange(value){
        this.setState({monthlyVideoViews: value})
    }
    onCPMChange(value){
        this.setState({avgCPM: value})
    }
    render(){
        let {monthlyPageViews, monthlyVideoViews, avgCPM} = this.state;
        let pAnnualRevenue = (parseFloat(((monthlyPageViews*2.2*avgCPM*.70*12)/1000).toFixed(0))).toLocaleString();
        let pAnnualVideoViews = (parseFloat(((monthlyPageViews * 2.2) - monthlyVideoViews).toFixed(0))).toLocaleString();
        return(
            <div className="calculator">
              <div className="text-center sliders">
                <div className="sliders-content">
                    <h2>Monthly Page Views: <mark>{(monthlyPageViews).toLocaleString()}</mark></h2>
                    <Slider marks={pageViewMarks}  defaultValue={monthlyPageViews} onChange={this.onMPVChange.bind(this)} max={500000000}/>

                    <h2>Monthly Video Views: <mark>{monthlyVideoViews.toLocaleString()}</mark></h2>
                    <Slider marks={monthlyVideoMarks} defaultValue={monthlyVideoViews} onChange={this.onMVVChange.bind(this)} max={100000000}/>

                    <h2>Average CPM: <mark>{avgCPM}$</mark></h2>
                    <Slider marks={cpmMarks}  defaultValue={10} onChange={this.onCPMChange.bind(this)} max={40}/>
                </div>
              </div>
              <div className="text-center results">
                <h2>Projected Annual Revenue</h2>
                <h2>${pAnnualRevenue}</h2>
                <hr/>
                <h2>Projected Annual Video Views</h2>
                <h2>{pAnnualVideoViews}</h2>
              </div>
            </div>
        )
    }
}

export default Calculator;
