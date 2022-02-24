import BaseModel from '../core/base-model';

export default class Select<T extends Record<string, string>> extends BaseModel {
    _selection: T;

    get selection(): T {
        return this._selection;
    }

    set selection(value: T) {
        this._selection = value;
        this.change();
    }

    _valueField = 'value';

    set valueField(field: string) {
        this._valueField = field;
    }

    get value(): string | undefined {
        return this._selection?.[this._valueField];
    }

    _labelField = 'label';

    set labelField(field: string) {
        this._labelField = field;
    }

    get label(): string {
        return this._selection?.[this._labelField] || '';
    }

    setSelection(value: T): this {
        this.selection = value;
        return this;
    }

    deselect(): this {
        this.selection = {} as T;
        return this;
    }

    isSelected<P>(value: P): boolean {
        return this.selection[this._valueField] === value;
    }

}