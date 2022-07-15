1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   Value for the state, and a callback function to set state.

Answer:
a. New value of state (setCount(42))
b. Callback function - whatever the callback function
returns === new value of state

2. When would you want to pass the first option (from answer
   above) to the state setter function?
   Not a good practice.

Answer:
Whenever you don't need the previous value of state to determine
what the new value of state should be.

3. When would you want to pass the second option (from answer
   above) to the state setter function?
   Most of the case, this is generally a better practice.

Answer:
Whenever you DO need the previous value to determine the new value
