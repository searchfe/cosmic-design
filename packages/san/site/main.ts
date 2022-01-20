import san from 'san';
import { Button } from '../index';
import './style.css';


const App = san.defineComponent({
    template: `<ui-button>
        <div slot="subfix">2</div>
    </ui-button>`,
    components: {
        'ui-button': Button
    },
})



const app = new App();

app.attach(document.querySelector('#app') as unknown as Element);
