
/**
 * Class for holding all values for an event
 */
export class EventData {

    img: string; // The image of the event
    title: string; // The title of the event
    startDate: Date;
    endDate: Date;
    startTime: string;
    endTime: string;

    constructor(options: {
        img?: string,
        startDate?: Date | string,
        endDate?: Date | string,
        title: string
    } = { title: 'empty' }) {
        this.img = options.img;
        this.title = options.title;
        this.startDate = this.ConvertStringToDate(options.startDate);
        this.endDate = this.ConvertStringToDate(options.endDate);
        this.startTime = this.GetEventTime(this.startDate);
        this.endTime = this.GetEventTime(this.endDate);
    }

    private ConvertStringToDate(date: string | Date): Date {
        if (typeof date === 'string') { // Convert String Date to Object Date
            return new Date(date);
        }

        return date;
    }

    private GetEventTime(date: Date): string {
        const minutes = date.getMinutes();
        let stringMinutes = minutes.toString();
        const hours = date.getHours();
        let stringHours = (hours === 0) ? 12 : hours.toString();
        let AMPM = 'am';
        if (minutes < 10 && minutes >= 0) {
            stringMinutes = '0' + stringMinutes;
        }

        if (hours > 12) {
            stringHours = (hours - 12).toString();
            AMPM = 'pm';
        }




        return stringHours + ':' + stringMinutes + ` ${AMPM}`;
    }

}
