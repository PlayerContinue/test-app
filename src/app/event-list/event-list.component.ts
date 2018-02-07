import { Component, OnInit, Input } from '@angular/core';
import { EventData } from '../_Objects/eventData';
import { EventListBase } from '../_Objects/EventListBase';
import { EventServices } from '../_Services/eventService.service';
import { Observable } from 'rxjs/Observable';
import {ApiDataService, APIData} from '../_Services/apiDataService.service';

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
  eventServices: EventServices;
  dataService: ApiDataService;

  constructor(private eventService: EventServices, private api: ApiDataService) {
    this.dataService = api;
    this.eventServices = eventService;
  }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    if (typeof this.url !== 'undefined') {
      this.eventServices.getEvents(this.url).subscribe(
        (events: string) => this.editEvents(new APIData<EventData[]>({data: events}).data)
      );
    }
    this.EventDetails.subscribe(events => this.showEventDetails(events));
  }

  private editEvents(events: EventData[]) {
      this.events = events;
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

  private randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

}
