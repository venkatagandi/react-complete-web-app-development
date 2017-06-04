var GreeterMessage =  React.createClass({
    render() {
        return(
            <div>
                <h1>{this.props.name}!</h1>
                <p>{this.props.message}</p>
            </div>
        )
    }
});

var GreeterForm =  React.createClass({
    onFormSubmit(e) {
        e.preventDefault();
        var name = this.refs.name.value;
        var message =  this.refs.message.value;
        this.props.onNewName(name,message);
        this.refs.name.value = '';
        this.refs.message.value = '';
    },
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name" />
                <input type="text" ref="message" />
                <button>Set Name</button>
            </form>
        );
    }
});

var Greeter = React.createClass({
    getDefaultProps() {
        return {
            name: 'React',
            message:'This if from the default message'
        }
    },
    getInitialState() {
        return {
            name: this.props.name,
            message:this.props.message
        }
    },
    handleNewInfo(name,message) {
        this.setState({
            name: name,
            message: message
        });
    },
    render() {
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewName={this.handleNewInfo}/>
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