var GreeterMessage =  React.createClass({
    render() {
        return(
            <div>
                <h1>Some H1</h1>
                <p>Some P</p>
            </div>
        )
    }
});

var GreeterForm =  React.createClass({
    render() {
        return (
            <form>
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
    onButtonClick(e) {
        //not to allow browser for full refresh
        e.preventDefault();

        var {name,message} = this.refs;

        if(typeof name.value === 'string' && name.value.length>0 ) {
            this.setState({
                name: name.value
            })
        }
        if(typeof message.value === 'string' && message.value.length>0) {
            this.setState({
                message: message.value
            })
        }


        this.refs.name.value = '';
        this.refs.message.value = '';
        //alert(name);
    },
    render() {
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message + '!!'}</p>
                <GreeterMessage/>
                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name" />
                    <input type="text" ref="message" />
                    <button>Set Name</button>
                </form>
                <GreeterForm/>
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