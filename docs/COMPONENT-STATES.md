There are two types of data in a component

- Props which gets passed into a component through data down mechanism as we initialize it.

```javascript

<Greeter name={firstName} />

```

- State is internally maintained and updated by the component.

As per general rule in react, a component shouldn't update its props  but is allowed to updates it state values.

similar to how we initiaze default props in a component, we can initialize state variable through getInitialSate() method (or) if we use React.Component way of declaring a component, we can initialize in constructor()

getInitialSate() does return an object similar to getDefaultProps() and is set to this.state({}).

```javascript
    getInitialState() {
        return {
            name: this.props.name,
            message:this.props.message
        }
    }
```
so initially the data gets passed from props and then set to state inside the component, upon updation it will be updated within the component. Nice right! i like it...

Now in the render function previously we are taking the input from props so the below
```javascript
 render() {
        var name = this.props.name;
        var message = this.props.message;
        return (
```

will get changed to

```javascript
 render() {
        var name = this.state.name;
        var message = this.state.message;
        return (
```

### How do we update the state value

we use this.setState({statevariable.....updation})

```javascript
         onButtonClick(e) {
        //not to allow browser for full refresh
        e.preventDefault();
        //this.refs.name is an html node
        //to get the value of it
        //this.refs.name.value
        var name = this.refs.name.value;
        this.setState({
            name: name
        })
    }
```
 and values inside render will get auto updated

 ```javascript
 render() {
        var name = this.state.name;
        var message = this.state.message;
        return (
```
so we now have a self contained component that maintains and renders value by itself.

since this.refs.name.value is from textbox and nothing related to state we will explicitly empty that out by
this.refs.name.value = '';

 ```javascript
        var name = this.refs.name.value;
        this.setState({
            name: name
        })
        this.refs.name.value = '';
```