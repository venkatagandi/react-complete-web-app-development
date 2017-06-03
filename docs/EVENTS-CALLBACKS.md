A generally application involves in data entry from the users.
the below example takes the input from a form and upon submission will display the data.

```javascript
     <form>
        <input type="text" ref="name" />
        <button>Set Name</button>
    </form>
```
In the above we take a text input and using
```javascript
 ref

 ```
 keyword of react, we bridge the connection between inputs to the inner react layers.

 When we use it in the component we refer to it as

 this.refs.refvalue_we_previously_declared.value

Note: this.refs.refvalue_we_previously_declared is an html node so we append .value to get the actual value as shown below.

```javascript

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

```
