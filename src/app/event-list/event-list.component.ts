import { Component, OnInit, Input } from '@angular/core';
import { EventData } from '../_Objects/eventData';
import { EventListBase } from '../_Objects/EventListBase';
import { EventServices } from '../_Services/eventService.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  @Input() url: string;
  moreDetails = false;
  currentEvent: EventData;
  EventDetails = new EventListBase();
  obsEvents: Observable<EventData[]>;
  events: EventData[];
  constructor(private eventService: EventServices) {
    if (this.url !== '') {
      eventService.getEvents(this.url).subscribe(
        events => this.editEvents(events)
      );
    }
    this.EventDetails.subscribe(events => this.showEventDetails(events));
  }

  private editEvents(events: EventData[]) {
    if (events.length === 0) {
      /*this.events = Array(50).fill(0).map((_, i) =>
      new EventData({
        id: i + 1, title: `Nav Item ${i + 1}`, img: 'assets/img/90px.jpg',
        startDate: this.randomDate(new Date(2012, 0, 1), new Date()),
        endDate: this.randomDate(new Date(2012, 0, 1), new Date()),
        details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry\'s standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it
         to make a type specimen book. It has survived not only five centuries, but
         also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop publishing
         software like Aldus PageMaker including versions of Lorem Ipsum.`
      }));*/
    }else {
     this.events = events;
    }
  }

  /**
   * The current event results
   * @param event - The event to be shown
   */
  private showEventDetails(event: EventData) {
    this.currentEvent = event;
    if (event !== null) {
      this.moreDetails = true;
    } else {
      this.moreDetails = false;
    }
  }

  ngOnInit() {
  }

  private randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

}
