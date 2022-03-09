import { Component } from 'san';
import './index.css';


export class Button2 extends Component {

    static template = `<Button c-style="icon" class="{{_styles.button}} {{state}} {{size}}" on-click="click">
        <div s-if="false" class="{{_styles.prefix}} {{size}}">
            <slot name="prefix"></slot>
        </div>
        <div class="{{_styles.label}}">
            <slot></slot>
        </div>
        <div s-if="hasSubfix" class="{{_styles.subfix}} {{size}}">
            <slot name="subfix"></slot>
        </div>
</Button>`;

    initData() {
        return {
            hasPrefix: this.sourceSlots.named.prefix,
            hasSubfix: this.sourceSlots.named.subfix,
            size: 'base',
            disabled: false,
            state: 'normal',
            _styles: {}
        };
    }

    inited() {
        this.data.set('hasPrefix', !!this.sourceSlots.named.prefix);
        this.data.set('hasSubfix', !!this.sourceSlots.named.subfix);
    }

    click(e) {
        console.log(e);
        this.fire('done', e);
    }
}
