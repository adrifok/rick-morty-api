import React from 'react';
import styles from './About.module.css';
export default function About(props){

    return(
        <div>
            <div className ={styles.sobreMi}>


            </div>
           <p>
           This app was built using React, Redux, and React Router.</p>
      <p>
        The main functionality of the app is to display a list of characters from a certain source (e.g., an API) and allow users to add them to their favorites list. The app leverages Redux for managing the state of the favorite characters.
      </p>
      <p>
        The app consists of several components, including the `Card` component, which represents a single character card and handles the favorite functionality. The `Card` component is connected to Redux using the `connect` function from the `react-redux` package to access the favorite characters state and dispatch actions to add or remove characters from the favorites list.
      </p>
      <p>
        React Router is used for implementing navigation within the app. It allows users to click on a character card and navigate to a detail page for that character, where additional information and details are displayed.
      </p>
      <p>
        Styling for the app is done using CSS modules. Each component has its own CSS module file to encapsulate styles and prevent conflicts.
      </p>
      <p>
        The app makes use of React hooks, such as `useState` and `useEffect`, to manage component state and handle side effects, such as fetching data from an external source.
      </p>
      <p>
        Overall, this app demonstrates the use of React, Redux, and React Router to create a dynamic and interactive user interface for managing favorite characters.

            
            <br/>
        <h2> by Adriana Ferrari</h2>
<br/>
           </p>
        </div>
    )
}