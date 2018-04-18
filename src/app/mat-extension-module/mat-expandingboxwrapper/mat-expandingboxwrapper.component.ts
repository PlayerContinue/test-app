import {
  Component, OnInit, Input, ElementRef, Optional,
  ContentChildren, QueryList, HostBinding, HostListener,
  AfterViewInit, OnDestroy, AfterContentChecked
} from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { MatGridList } from '@angular/material';
import { MatExpandingBoxComponent } from '../mat-expandingbox/mat-expandingbox.component';
@Component({
  selector: 'app-mat-expandingboxwrapper',
  templateUrl: './mat-expandingboxwrapper.component.html',
  styleUrls: ['./mat-expandingboxwrapper.component.css']
})


export class MatExpandingBoxWrapperComponent extends MatGridList implements AfterViewInit, OnDestroy, AfterContentChecked {
  totalColumns: number;
  /** Query list of tiles that are being rendered. */
  @ContentChildren(MatExpandingBoxComponent) _tiles: QueryList<MatExpandingBoxComponent>;
  @HostBinding('class.mat-grid-list') field = true;
  @HostBinding('class.mat-grid-hover-tile') field1 = true;
  @Input()
  set allowExpansion(value: boolean) {
    if (this._allowExpansion !== value) {
      this.flipExpansionOnChildren(value);
    }
    if (this.isExpanded && !value) {
      // Set to normal size if expanded when expansion not allowed
      this.expandWrapper(null);
    }
    this._allowExpansion = value;
  } // Allow outside control of expansion allowed

  private isExpanded = false; // Store whether the current object is expanded
  private _allowExpansion: boolean;

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
      setTimeout(() => { item.allowExpansion = this._allowExpansion; });
    }, this);

  }

  ngOnDestroy() {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this._tiles.forEach((item, index) => function (value: MatExpandingBoxComponent, pos: number) {
      value.expandEvent.unsubscribe();
    }(item, index));
  }

  /**Extends original by adding check for if it is expanded
   * Sets style on the main grid-list element, given the style name and value. */
  _setListStyle(style: [string, string | null] | null): void {
    if (!this.isExpanded) {
      if (style) {
        this._element1.nativeElement.style[style[0]] = style[1];
      }
    }
  }

  private flipExpansionOnChildren(value: boolean) {
    if (typeof this._tiles !== 'undefined') {
      this._tiles.toArray().forEach(function (item: MatExpandingBoxComponent, index: number, array: MatExpandingBoxComponent[]) {
        item.allowExpansion = value;
      }, this);

    }
  }

  private expandWrapper($event: MatExpandingBoxComponent) {
    const _col = this.cols;
    const _row = this.totalColumns / this.cols;
    const expanded = this.isExpanded;
    if (this._allowExpansion === true) {
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

}
