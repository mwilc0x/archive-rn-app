'use strict';

var React = require('react-native');
var {
  Text,
  View,
} = React;
var styles = require('../utils/styles')


var Menu = React.createClass({
  about: function() {
    this.props.menuActions.close();
  },

  render: function() {
    return (
      <View style={styles.menu}>
        <Text>Menu</Text>
        <Text onPress={this.about}>About</Text>
      </View>
    );
  }
});

module.exports = Menu;
