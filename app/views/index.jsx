var React = require('react');
var DefaultLayout = require('./layouts/default');

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Top extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>Hello {this.props.name}</div>
      </DefaultLayout>
    );
  }
}

module.exports = Top;
