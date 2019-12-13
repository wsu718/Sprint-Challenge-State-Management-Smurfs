1. What problem does the context API help solve?

Prop drilling. Instead of having to explicitly declare what data you want to pass from component to component, you can access anything within the tree. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store: where state/data lives
Actions: run functions to change state
Reducers: hold action calls

It is the single source of truth because it is the object that holds all state.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is only available to that component eg. with useState. Application state is available through many components in the application and is better for larger applications. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk allows us to use redux asynchronosuly -- so we can access external APIs without breaking the user experience. It changes action creators by allowing dispatch actions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

 Redux because it is the most applicable for larger scale applications I'll likely be working on. 