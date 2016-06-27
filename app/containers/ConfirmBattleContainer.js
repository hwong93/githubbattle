var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubhelpers');


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
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]).then(function (players) {
      console.log('Players', players);

      this.setState({
        isLoading: false,
        playerInfo: [players[0], players[1]]
      })
    }.bind(this));
    // fetch info fromgithub then update state
  },

  handlInitiateBattle: function(){
    this.context.router.push({
      pathname: '/results',
      state: {
        playerInfo: this.state.playerInfo
      }
    })
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
      onInitiateBattle={this.handlInitiateBattle}
      playerInfo={this.state.playerInfo} />
    )
  }
})

module.exports = ConfirmBattleContainer;
