var Greeter = React.createClass({
    render() {
        var name = this.props.name;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>This is from a component</p>
            </div>
        );
    }
});

ReactDOM.render(
            <Greeter name="ven"/>,
            document.getElementById('app')
);