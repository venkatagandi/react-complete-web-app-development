var Greeter = React.createClass({
    getDefaultProps() {
        return {
            name: 'React',
            message:'This if from the component'
        }
    },
    render() {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message + '!!'}</p>
            </div>
        );
    }
});

var firstName = "Ven";
var displayMessage = "Message from the prop!";
ReactDOM.render(
            <Greeter name={firstName} message={displayMessage}/>,
            document.getElementById('app')
);