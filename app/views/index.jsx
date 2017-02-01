var React = require('react');
var DefaultLayout = require('./layouts/default');
var Chart = require('./components/chart');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var Highcharts = require('highcharts');

class Top extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <DefaultLayout title={this.props.title}>
          <div>Hello {this.props.name}</div>
          <Chart />
        </DefaultLayout>
      </MuiThemeProvider>
    );
  }
}

module.exports = Top;
