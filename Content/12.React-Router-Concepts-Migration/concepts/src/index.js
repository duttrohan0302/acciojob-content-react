import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     loader: async ({request, params})=>{
//       return fetch(
//         `/fake/api/${params.teamId}.json`,
//         {signal: request.signal}
//       )
//     },
//     action: async ({request})=>{
//       return updateFakeTeam(await request.formData())
//     },
//     errorElement: <ErrorBoundary />,
//     children: [
//       {
//         path: "team",
//         element: <Team />,
//         loader: teamLoader
//       }
//     ],
//   }
// ])

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RootProvider router={router} />
// )

reportWebVitals();
