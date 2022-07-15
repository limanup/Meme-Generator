1. How would you describe the concept of "state"?
   State is like local variables declared inside a function, they can be changed throughout the function/component.

Answer: in React, state refers to values that components can maintain between render cycles.
A way for React to remember saved values from within a component.
This is similar to declaring variables from within a component,
with a few added bonuses (which we'll get to later)

2. When would you want to use props instead of state?
   When you just want to pass in the props/parameters without changing them in components.

Answer:
Anytime you want to pass data into a component so that
component can determine what will get displayed on the
screen.

3. When would you want to use state instead of props?
   When you want to change the components.

Answer:
Anytime you want a component to maintain some values from
within the component. (And "remember" those values even
when React re-renders the component).

4. What does "immutable" mean? Are props immutable? Is state immutable?
   Props are immutable, because you shouldn't change them once they are passed in. State is immutable as you would want to change the state for a component.

Answer:
Unchanging. Props are immutable. State is mutable.
