const React = require('react');
const ReactDOM = require('react-dom');
const ReactHighcharts = require('react-highcharts'); // Expects that Highcharts was loaded in the code.
var Highcharts = require('highcharts');

class Chart extends React.Component {

  render() {
    const config = {
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
      }]
    };

    return (
      <ReactHighcharts config={config} ref="chart"></ReactHighcharts>
    )
  }
}

module.exports = Chart;
