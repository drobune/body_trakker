var React = require('react');
var DefaultLayout = require('./layouts/default');
var Chart = require('./components/chart');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var Highcharts = require('highcharts');

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <DefaultLayout title={this.props.title}>
          <Chart />
        </DefaultLayout>
        <div id='footer'><a href='https://twitter.com/drobune'>contact</a></div>
      </MuiThemeProvider>
    );
  }
}

module.exports = App;
