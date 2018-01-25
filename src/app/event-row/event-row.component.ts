import { Component, OnInit, Input } from '@angular/core';
import {EventData} from '../_Objects/eventData';
@Component({
  selector: 'app-event-row',
  templateUrl: './event-row.component.html',
  styleUrls: ['./event-row.component.css']
})
export class EventRowComponent implements OnInit {
  @Input() eventData: EventData;
  constructor() {

  }

  ngOnInit() {
  }

}
