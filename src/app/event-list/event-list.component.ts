import { Component, OnInit } from '@angular/core';
import {EventData} from '../_Objects/eventData';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  temp = Array(50).fill(0).map((_, i) =>
  new EventData ({title: `Nav Item ${i + 1}`/*, img: 'assets/img/90px.jpg'*/,
  startDate: this.randomDate(new Date(2012, 0, 1), new Date()),
  endDate: this.randomDate(new Date(2012, 0, 1), new Date())}));

  constructor() { }

  ngOnInit() {
  }

  private randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

}
