## Props Passing

- props can be passed from 1 component to another
- In the props app in this folder, we created a counter
- Based on the value in the counter, we showed that many users
- All the state & methods were defined in App.js
- Users, User & Counter components were merely presentational
- count state data was being passed to both Users & Counter
- Increment, Decrement (Updating the count value) functions were defined in App.js but called from Counter.js
- And In User.js, we were conditionally only showing user in case their id was less than or equal to count (this was only possible because our id's were sequential)
- Now when the count was changed, App.js rerenders and as a result, children component also re-renders

## Props Drilling
- In the above example, count was not being used by Users.js but it still had to keep that variable to pass it to User.js
- Imagine this happening for 10 components, first component creates the data and then it calls the 2nd component with that data which doesn't use it for itself but instead simply passes it to the third component and so on.
- #### This is known as props drilling