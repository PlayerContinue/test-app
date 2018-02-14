import {
  Component, OnInit, Input, ElementRef, Optional,
  ContentChildren, QueryList, HostBinding, HostListener,
  AfterViewInit
} from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { MatGridList } from '@angular/material';
import { MatExpandingBoxComponent } from '../mat-expandingbox/mat-expandingbox.component';
@Component({
  selector: 'app-mat-expandingboxwrapper',
  templateUrl: './mat-expandingboxwrapper.component.html',
  styleUrls: ['./mat-expandingboxwrapper.component.css']
})


export class MatExpandingBoxWrapperComponent extends MatGridList implements AfterViewInit {
  totalColumns: number;
  /** Query list of tiles that are being rendered. */
  @ContentChildren(MatExpandingBoxComponent) _tiles: QueryList<MatExpandingBoxComponent>;
  @HostBinding('class.mat-grid-list') field = true;
  private isExpanded = false;// Store whether the current object is expanded
  constructor(private _element1: ElementRef, @Optional() private _dir1: Directionality) {
    super(_element1, _dir1);
  }
  ngAfterViewInit() {
    this.totalColumns = 0;
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Subscribes the current object to each mat-expandingbox that might be using it
    this._tiles.toArray().forEach(function (item: MatExpandingBoxComponent, index: number, array: MatExpandingBoxComponent[]) {
      this.totalColumns += item.colspan;
      item.expandEvent.subscribe(($event: MatExpandingBoxComponent) => this.expandWrapper($event));
    }, this);

  }

  expandWrapper($event: MatExpandingBoxComponent) {
    const _col = this.cols;
    const _row = this.totalColumns / this.cols;
    const expanded = this.isExpanded;
    this._tiles.forEach(function (item: MatExpandingBoxComponent, index: number) {
      if (!expanded) {
        if (item !== $event) {
          item.changeColAndRow(0, 0);
        } else {
          item.changeColAndRow(_col, _row);
        }
      } else {
        item.revertToOriginalRowAndColumn();
      }

    });
    this.isExpanded = this.isExpanded ? false : true;
  }

}
