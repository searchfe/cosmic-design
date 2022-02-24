import { EventEmitter } from 'EventEmitter3';

export default class BaseModel {
    emit = new EventEmitter();

    change() {
        this.emit.emit('change', this);
    }
}