var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    console.log('getInitialState')
    return {
      isLoading: true,
      playerInfo: []
    }
  },

  componentWillMount: function(){
    console.log('componentWillMount');
  },

  componentDidMount: function(){
    console.log('componentDidMount');
    var query = this.props.location.query;
    // fetch info fromgithub then update state
  },

  componentWillReceiveProps: function(){
    console.log('componentWillRecieveProps');
  },

  componentWillUnmount: function(){
    console.log('componentWillUnmount');
  },

  render: function(){
    console.log('renders')
    return(
      <ConfirmBattle    isLoading={this.state.isLoading}
      playerInfo={this.state.playerInfo} />
    )
  }
})

module.exports = ConfirmBattleContainer;
