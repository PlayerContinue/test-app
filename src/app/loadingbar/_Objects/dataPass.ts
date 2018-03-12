export class DataPass<T, Y> {

    data: T;
    object: Y;

    constructor(options: { data: T, object?: Y }) {
        this.data = options.data;
    }

}
