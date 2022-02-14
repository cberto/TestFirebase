import React from 'react';


const FirebaseContext = React.createContext();

export default FirebaseContext;

export const consumerFirebase = Component => props => (

    //context de firebase, componente 
    <FirebaseContext.Consumer>
        
        {firebase => <Component {...props} firebase={firebase}/>}
    </FirebaseContext.Consumer>
)