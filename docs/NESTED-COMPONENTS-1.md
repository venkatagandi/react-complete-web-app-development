After all a web application is a collection of individual reusable components right?
So we will seggregate out code into multiple components as

- main component
- greeter message component to display the messages.
- greeter form component for the data entry of new messages into the system.

### GreeterMessage Component
```javascript
    var GreeterMessage =  React.createClass({
        render() {
            return (
                // whatever virtual dom we wanted to display
            );
        }
    });
```
***Inside the main component***
```javascript
         render() {
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage/>
                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name" />
                    <input type="text" ref="message" />
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
```
### greeter form component

We componentize greeter form in the below way.

```javascript
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
```