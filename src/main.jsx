
import { createRoot } from 'react-dom/client'
import App from './App'
import "./style.css";
import Usercontext from './usercontext';


createRoot(document.getElementById('root')).render(
    <Usercontext>
             <App />
    </Usercontext>
   
)
       