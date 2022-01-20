import './style.css';
import { Button } from '../index';


const app = new Button();

app.attach(document.querySelector('#app') as unknown as Element);
