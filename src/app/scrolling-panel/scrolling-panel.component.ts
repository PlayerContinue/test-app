import { Component, OnInit, Input, ElementRef, Self} from '@angular/core';

@Component({
  selector: 'app-scrolling-panel',
  templateUrl: './scrolling-panel.component.html',
  styleUrls: ['./scrolling-panel.component.css']
})
export class ScrollingPanelComponent implements OnInit {
  headerHeight: string;
  footerHeight: string;
  bodyHeight: string;
  constructor(@Self() private element: ElementRef ) {}


  ngOnInit() {
  }

}
