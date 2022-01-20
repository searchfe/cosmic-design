import { Component } from 'san';
//@ts-ignore
import './index.css';

export class Button extends Component {

    static template:string = '<p class="foo">Hello {{name}}!</p>';

    initData() {
        return {name: 'San'}
    }
}
