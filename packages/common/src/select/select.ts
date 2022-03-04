import BaseModel from '../core/base-model';

export default class Select<T extends Record<string, string>> extends BaseModel {
    _selection: T;

    _selectList: T[];

    constructor() {
        super();
    }


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

    setSelection(value: T | number | string): this {
        if (value == null) {
            return this;
        }
        if (typeof value === 'number') {
            if(this._selectList?.[value]) {
                this.selection = this._selectList[value] as T;
            }
        } else if (typeof value === 'string') {
            const selection = this._selectList?.find(item => item.value === value);
            if (selection) this.selection = selection as T;
        } else {
            this.selection = value;
        }
        return this;
    }

    deselect(): this {
        this.selection = {} as T;
        return this;
    }

    selected(item: T): boolean {
        return this.selection?.[this._valueField] === item[this._valueField];
    }

    setSelectList(list: T[] = []): this {
        this._selectList = list;
        return this;
    }

}