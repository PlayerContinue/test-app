
/**
 * Class for holding all values for an event
 */
export class EventData {
    id: number;
    img: string; // The image of the event
    title: string; // The title of the event
    startDate: Date;
    endDate: Date;
    startTime: string;
    endTime: string;
    location: string;
    details: string;

    constructor(options: {
        id: number,
        img?: string,
        startDate?: Date | string,
        endDate?: Date | string,
        location?: string,
        title: string,
        details?: string
    } = { id: 1, title: 'empty' }) {
        this.id = options.id;
        this.img = options.img;
        this.title = options.title;
        this.startDate = this.ConvertStringToDate(options.startDate);
        this.endDate = this.ConvertStringToDate(options.endDate);
        this.startTime = this.GetEventTime(this.startDate);
        this.endTime = this.GetEventTime(this.endDate);
        this.location = options.location;
        this.details = options.details;
    }

    

    private ConvertStringToDate(date: string | Date): Date {

        if (typeof date === 'string') { // Convert String Date to Object Date
            return new Date(date);
        }

        return date;
    }

    private randomDate(start: Date, end: Date) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    get fullStartDate(): string {
        return this.startDate.toLocaleString('en', { month: 'long' }) + ' ' + this.startDate.getDate() + ', '
        + ' ' + this.startDate.getFullYear() + ' ' + this.startTime;
      }

      get fullEndDate(): string {
        return this.endDate.toLocaleString('en', { month: 'long' }) + ' ' + this.endDate.getDate() + ', '
        + ' ' + this.endDate.getFullYear() + ' ' + this.startTime;
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
