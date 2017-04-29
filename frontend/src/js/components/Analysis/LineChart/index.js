import React from "react";
import ReactHighcharts from 'react-highcharts';

export default class LineChart extends React.Component {
  render() {
    const data = [
        [Date.UTC(2013,5,2),0.7695],
        [Date.UTC(2013,5,3),0.7648],
        [Date.UTC(2013,5,4),0.7645],
        [Date.UTC(2013,5,5),0.7638],
        [Date.UTC(2013,5,6),0.7549],
        [Date.UTC(2013,5,7),0.7562],
        [Date.UTC(2013,5,9),0.7574],
        [Date.UTC(2013,5,10),0.7543],
        [Date.UTC(2013,5,11),0.7510],
        [Date.UTC(2013,5,12),0.7498],
        [Date.UTC(2013,5,13),0.7477],
        [Date.UTC(2013,5,14),0.7492],
        [Date.UTC(2013,5,16),0.7487],
        [Date.UTC(2013,5,17),0.7480],
        [Date.UTC(2013,5,18),0.7466],
        [Date.UTC(2013,5,19),0.7521],
        [Date.UTC(2013,5,20),0.7564],
        [Date.UTC(2013,5,21),0.7621],
        [Date.UTC(2013,5,23),0.7630],
        [Date.UTC(2013,5,24),0.7623],
        [Date.UTC(2013,5,25),0.7644],
        [Date.UTC(2013,5,26),0.7685],
        [Date.UTC(2013,5,27),0.7671],
        [Date.UTC(2013,5,28),0.7687],
        [Date.UTC(2013,5,30),0.7687]
    ];

    const config = {
        chart: {
            zoomType: 'x',
            height: "50%"
        },
        title: {
            text: 'Invader Numbers'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'numbers'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'Invader Numbers',
            data: data
        }]
    }

    return (
      <div class="content">
        <ReactHighcharts config={config} ref="chart"></ReactHighcharts>
      </div>
    );
  }
}
