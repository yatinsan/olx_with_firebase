import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Firebase } from './Components/config/firebase';
import {firebaseconext} from './Components/config/firebasecontext'

ReactDOM.render(
 <firebaseconext.Provider value={(Firebase)}>

<App />

</firebaseconext.Provider>



, document.getElementById('root'));
