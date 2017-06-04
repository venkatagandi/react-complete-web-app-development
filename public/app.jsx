var GreeterMessage =  React.createClass({
    render() {

        return(
            <div>
                <h1>Hello,{this.props.name}!</h1>
                <p>{this.props.message}</p>
            </div>
        )
    }
});

var GreeterForm =  React.createClass({
    onFormSubmit(e) {
        e.preventDefault();
        var update = {};
        var { name,message } = this.refs;
        if(typeof name.value==='string' && name.value.length>0) {
            update.name = name.value;
        }
        if(typeof message.value==='string' && message.value.length>0) {
            update.message = message.value;
        }
        this.props.onNewName(update);
        this.refs.name.value='';
        this.refs.message.value='';
    },
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div><input type="text" ref="name" placeholder="Enter the name"/></div>
                <div><textarea ref="message" placeholder="Enter the message"></textarea></div>
                <div><button>Submit</button></div>
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
    handleNewInfo({name,message}) {
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