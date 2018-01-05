export class QuestionBase<T> {
    value: T; // The value type to be stored in the form
    key: string;
    label: string;
    required: boolean;
    order: number;
    row:number;
    controlType:string;
    labelPosition:string;
    classOverride:string;

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        row?:number,
        controlType?: string,
        labelPosition?:string,
        classOverride?:string
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.row = options.row === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.labelPosition = options.labelPosition || '';
        this.classOverride = options.classOverride || '';
       
    }


}
