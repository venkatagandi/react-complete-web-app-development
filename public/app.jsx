var Greeter = React.createClass({
    render() {
        return (
            <div>
                <h1>Hello React!</h1>
                <p>This is from a component</p>
            </div>
        );
    }
});

ReactDOM.render(
            <Greeter/>,
            document.getElementById('app')
);