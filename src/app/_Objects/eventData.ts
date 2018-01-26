
/**
 * Class for holding all values for an event
 */
export class EventData {

    img: string; // The image of the event
    title: string; // The title of the event
    date: Date;
    constructor(options: {
        img?: string,
        date?: Date | string,
        title: string
    } = { title: 'empty' }) {
        this.img = options.img;
        this.title = options.title;
        if (typeof options.date === 'string') { // Convert String Date to Object Date
            options.date = new Date(options.date);
        }
        this.date = options.date;
    }

}
