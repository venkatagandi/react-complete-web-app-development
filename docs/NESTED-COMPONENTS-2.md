As mentioned in [Nested Component-1](docs/NESTED-COMPONENTS-1.md) , the components in the app are seggregated into


##### Stateless / Presentational Component
 These components obey the single responsibility principle by just doing one and only onething to which they are assigned to.
 These can be reusable and just take the input from the master component.
 Ideally we an call them as dummy components.
 They mostly rely on props.

 In our scenario GreeterMessage and GreeterForm fall under this category.



##### Stateful / Container Component

 These components are the orchestrators, they update state inorder for the child components aswell as the respective components to be updated.

 In our scenario Greeter fall under this category.