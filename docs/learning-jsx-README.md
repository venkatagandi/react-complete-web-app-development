``` javascript

     Ideally the React converts the below javascript XML
            <div>
                <h1>Hello React!</h1>
                <p>This is from a component</p>
            </div>

     ** to ***

     React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Hello React!"
    ),
    React.createElement(
        "p",
        null,
        "This is from a component"
    )
);

```

Try out running the same in [babel repl#] (https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=react&targets=&browsers=&builtIns=false&debug=false&code=%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ch1%3EHello%20React!%3C%2Fh1%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%3EThis%20is%20from%20a%20component%3C%2Fp%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E)