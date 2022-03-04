import { EventEmitter } from 'EventEmitter3';

export enum EventKey { 
    change = 'change'
}

export default class BaseModel {
    emit = new EventEmitter();

    adapter: Record<string, (params: any) => void>;

    change() {
        this.adapter?.change({});
    }

    subscribeChange( fn: (data: unknown) => void) {
        this.emit.on(EventKey.change, fn);    
    }

    init(adapter: Record<string, (params: any) => void>) {
        this.adapter = adapter;
    }
}