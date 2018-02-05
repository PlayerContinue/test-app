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
      this.obsEvents = eventService.getEvents(this.url);
      this.obsEvents.subscribe(events => this.events = events);
    }
    this.EventDetails.subscribe(events => this.showEventDetails(events));
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
