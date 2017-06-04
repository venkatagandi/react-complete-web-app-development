As mentioned in [Nested Component-1](NESTED-COMPONENTS-1.md) , the components in the app are seggregated into


##### Stateless / Presentational Component
 These components obey the single responsibility principle by just doing one and only onething to which they are assigned to.
 These can be reusable and just take the input from the master component.
 Ideally we an call them as dummy components.
 They mostly rely on props.

 In our scenario GreeterMessage and GreeterForm fall under this category.

###### GreeterForm component

 ```javascript
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
```

###### GreeterMessage component

```javascript
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
```

##### Stateful / Container Component

 These components are the orchestrators, they update state inorder for the child components aswell as the respective components to be updated.

 In our scenario Greeter fall under this category.

 ###### Greeter component

 ```javascript
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
 ```
 so we pass the handleNewInfo function through props from container component to the representational component.
 This inturn will be called back through props , like in the above example

 this.handleNewInfo - belongs to master component which is being passed to the prop of GreeterFrom ( here the prop is onNewName)

Then from the GreeterForm component we call the this.onNewName(name,message)

This is similar to the concep to "data down actions up" ( passing data down from master to child,calling actions of parent component from child component).
