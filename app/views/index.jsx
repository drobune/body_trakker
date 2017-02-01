var React = require('react');
var DefaultLayout = require('./layouts/default');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Top extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <DefaultLayout title={this.props.title}>
          <div>Hello {this.props.name}</div>
        </DefaultLayout>
      </MuiThemeProvider>
    );
  }
}

module.exports = Top;
