var Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },

  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  render: function() {
    return React.createElement('div', {className: 'counter'},
      React.createElement('button', {onClick: this.decrement}, '-'),
      React.createElement('span', {}, 'Licznik ' + this.state.counter),
      React.createElement('button', {onClick: this.increment}, '+')
    );
  }
});



var App = React.createClass({
  propTypes: {
    numberOfCaunters: React.PropTypes.number.isRequired
  },

  render: function() {
    var counterArray = []
        idNumber = 1;

    for (i=0; i < this.props.numberOfCaunters; i++) {
      counterArray[i] = {
        id: idNumber++
      };
    };

    var counters = counterArray.map(function(counterItem) {
      return React.createElement(Counter, {key: counterItem.id}, counterItem.counter)
    });
    
    // console.log(counterArray);
    // console.log(counters);

    return (
      React.createElement('div', {className: 'app'}, counters)
    )
  }
});

var element = React.createElement(App, {numberOfCaunters: 3});
ReactDOM.render(element, document.getElementById('app'));