we pass the properties to our component in the following way

```javascript
<Greeter name="ven"  />
```

and then inside render function of our component, we use data down props as this.props.propname as shown below, please not all the dynamic data is interpolated within { } (javscript expression feature) in react

 ```javascript
        var name = this.props.name;
         return (
            <div>
                <h1>Hello {name}</h1>
                <p>This is from a component</p>
            </div>
        );
 ```
 #### Default Prop Values

 suppose we donot provide any props
 ```javascript
<Greeter />
```
then we should be able to print some default value in our component, we do this by overriding an inbuilt method getDefaultProps() that is similar to render() method.

*** getDefaultProps() returns an object of properties that this.props sets to ****

 ```javascript
    getDefaultProps() {
      return {
        name: 'React'
      }
    },
    render() {
        var name = this.props.name;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>This is from a component</p>
            </div>
        );
    }
 ```
 suppose if we pass value
 ```javascript
<Greeter name="Ven"/>
```
This will take precendence and overrirde default respective props property value in the component.

 #### Passing external variables to Default Prop Values

 We can move one step ahead and pass the external variables too utilizing the jsx expressions like

 ``` javascript
    var firstName = "Ven";
    <Greeter name={firstName}/>
 ```
 This prints Hello Ven! as output in the screen.

