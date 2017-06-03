var Greeter = React.createClass({
    getDefaultProps() {
        return {
            name: 'React',
            message:'This if from the default message'
        }
    },
    onButtonClick(e) {
        //not to allow browser for full refresh
        e.preventDefault();
        //this.refs.name is an html node
        //to get the value of it
        //this.refs.name.value
        var name = this.refs.name.value;

        alert(name);
    },
    render() {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message + '!!'}</p>
                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name" />
                    <button>Set Name</button>
                </form>
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