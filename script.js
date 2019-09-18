const counterAmount = prompt("How many counter do you need?");
const Counter = React.createClass({
	getInitialState: function () {
		return {
			counter: 0
		};
	},

	increment: function () {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function () {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	render: function () {
		return React.createElement('div', {},
			React.createElement('button', { onClick: this.decrement }, '-'),
			React.createElement('span', {}, ' Licznik ' + this.props.counterNumber + ': ' + this.state.counter + ' '),
			React.createElement('button', { onClick: this.increment }, '+'),
		);
	}
});

let numbers = [];
for (i=0 ; i < counterAmount ; i++){
	numbers.push(i+1);
}

const App = React.createClass({
	render: function () {
		return React.createElement('div', {},
			this.props.numbers.map(function(number){
				return React.createElement(Counter, { 'counterNumber': number })
			})
		)
	}
});

const app = React.createElement(App, {numbers:numbers});

ReactDOM.render(app, document.getElementById('app'));

/*
const TestCounter = React.createClass({
	getDefaultProps: function(){
		console.log('test1');
	},
	getInitialState: function(){
		console.log('test2');
	},
	componentWillMount: function(){
		console.log('test3');
	},
	render: function(){
		console.log('test4');
	},
	componentDidMount(){
		console.log('test5');
	},
	componentWillReceiveProps: function(nextProps){
		console.log('test6');
	},
	shouldComponentUpdate: function(nextProps, nextState){
		console.log('test7');
	},
	componentWillUpdate: function(nextProps, nextState){
		console.log('test8');
	},
	componentDidUppdate: function(prevProps, prevState){
		console.log('test9');
	},
	componentWillUnmount: function(){
		console.log('test10');
	},
})
*/
