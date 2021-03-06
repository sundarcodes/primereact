import React, {Component} from 'react';
import {Chart} from '../../components/chart/Chart';

export class RadarChartDemo extends Component {
    render() {
        var data = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };

        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>RadarChart</h1>
                        <p>A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-8">
                            <Chart type="radar" data={data} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}