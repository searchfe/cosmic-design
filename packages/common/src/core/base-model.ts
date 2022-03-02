import { EventEmitter } from 'EventEmitter3';

export enum EventKey { 
    change = 'change'
}

export default class BaseModel {
    emit = new EventEmitter();

    change() {
        this.emit.emit(EventKey.change, this);
    }

    subscribeChange( fn: (data: unknown) => void) {
        this.emit.on(EventKey.change, fn);    
    }
}