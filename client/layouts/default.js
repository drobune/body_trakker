var React = require('react');
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

class DefaultLayout extends React.Component {
  render() {
    const iconStyle = {
      fill: '#212121'
    }

    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" type="text/css" href="/dist/css/style.css" />
        </head>
        <body>
          <AppBar
             name="top-bar"
             iconElementLeft={<IconButton iconStyle={iconStyle}><NavigationMenu /></IconButton>}
             iconElementRight={<img src={"/images/logo.png"}/>}
             style={{
               backgroundColor: '#FAFAFA',
               color: '#212121'
             }}
           />
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
