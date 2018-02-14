import { Component, OnInit, Input } from '@angular/core';
import { EventListBase } from '../_Objects/EventListBase';
import { EventData } from '../_Objects/eventData';
@Component({
  selector: 'app-event-more-details',
  templateUrl: './event-more-details.component.html',
  styleUrls: ['./event-more-details.component.css']
})
export class EventMoreDetailsComponent implements OnInit {
  @Input() eventWatcher: EventListBase<EventData>;
  @Input() eventData: EventData;
  constructor() {}

  private addEventData(event: EventData) {
    this.eventData = event;
  }

  closeDetails() {
    this.eventWatcher.addEvent(null);
  }

  ngOnInit() {
  }

}
