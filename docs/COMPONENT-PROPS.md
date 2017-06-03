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
