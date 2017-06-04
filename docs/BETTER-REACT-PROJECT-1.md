Till date we are manually referring to the react and babel scripts.

But for production ready apps, we rely on npm packages for better usability.

Let's address it now.

- Install webpack
    ```javascript
        npm install -g webpack@1.12.3 --cache-min Infinity
    ```
    Test
    ```javascript
        webpack -h
    ```
    should list out all the arguments available for webpack

- Install React and React-Dom locally to the application through npm install respective-package --save to store the entry in package.json

```javascript
     npm install react@0.14.7 --save
     npm install react-dom@0.14.7 --save
```

Now we install packages for local development purpose only. This will be babel and webpack which we donot need in production.

```javascript
    npm install --save-dev webpack@1.12.13 --cache-min Infinity
    npm install --save-dev babel-core@6.5.1 --cache-min Infinity
    npm install --save-dev babel-loader@6.2.2 --cache-min Infinity
    npm install --save-dev babel-preset-es2015@6.5.0 --cache-min Infinity
    npm install --save-dev babel-preset-react@6.5.0 --cache-min Infinity
```


