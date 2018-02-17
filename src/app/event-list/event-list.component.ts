import { Component, OnInit, Input } from '@angular/core';
import { EventData } from '../_Objects/eventData';
import { EventListBase } from '../_Objects/EventListBase';
import { EventServices } from '../_Services/eventService.service';
import { Observable } from 'rxjs/Observable';
import { ApiDataService, APIData, APIInterface } from '../_Services/apiDataService.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  @Input() url: string;
  moreDetails = false;
  currentEvent: EventData;
  EventDetails = new EventListBase<EventData>();
  obsEvents: Observable<EventData[]>;
  events: EventData[];
  eventServices: EventServices;

  constructor(private api: ApiDataService) {
  }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    if (typeof this.url !== 'undefined') {
      this.api.getData<EventData[]>(this.url).subscribe(
        events =>
          this.editEvents(events)
      );
    }
    this.EventDetails.subscribe(events => this.showEventDetails(events));
  }



  private editEvents(events: APIData<EventData[]>[]) {
    this.events = [];
    /*events[0].data.forEach(function (value, index, array) {
      this.events.push(new EventData(value));
    }, this

    );*/

    this.api.unpackAPIData(events, EventData, function (value: EventData, index: number) {
      // TODO add cache method
      this.events.push(value);
    }, this);

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

}
