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

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));