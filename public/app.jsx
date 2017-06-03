var Greeter = React.createClass({
    render() {
        return (
            React.createElement('h1',null,'hello react.createelement')
        )
        /*return (
            <div>
                <h1>Hello React!</h1>
                <p>This is from a component</p>
            </div>
        );*/
    }
});

ReactDOM.render(
            <Greeter/>,
            document.getElementById('app')
);