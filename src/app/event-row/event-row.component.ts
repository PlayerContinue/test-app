import { Component, OnInit, Input } from '@angular/core';
import { EventData } from '../_Objects/eventData';
import {EventListBase} from '../_Objects/EventListBase';

@Component({
  selector: 'app-event-row',
  templateUrl: './event-row.component.html',
  styleUrls: ['./event-row.component.css']
})
export class EventRowComponent implements OnInit {
  @Input() eventData: EventData;
  @Input() eventWatcher: EventListBase;
  constructor() { }

  private updateEvent() {
    if (typeof this.eventWatcher !== 'undefined') {
      this.eventWatcher.addEvent(this.eventData);
    }
  }

  ngOnInit() {
  }

}
