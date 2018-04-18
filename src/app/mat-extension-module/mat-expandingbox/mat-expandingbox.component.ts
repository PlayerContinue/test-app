import {
  Component, OnInit, Input, ElementRef, HostBinding,
  EventEmitter, Output, AfterViewInit, HostListener, Renderer2
} from '@angular/core';
import { MatGridTile } from '@angular/material';
import { DomSanitizer  } from '@angular/platform-browser';

@Component({
  selector: 'app-mat-expandingbox',
  templateUrl: './mat-expandingbox.component.html',
  styleUrls: [
    '../mat-expandingboxwrapper/mat-expandingboxwrapper.component.css',
    './mat-expandingbox.component.css'
  ]
})
export class MatExpandingBoxComponent extends MatGridTile implements AfterViewInit {
  @HostBinding('class.mat-grid-tile') field = true;
  @HostBinding('hidden') _show = false;

  // The orignal row and column value
  originalRow: number;
  originalCol: number;
  private _allowExpansion: boolean; // Stores if expansion is currently allowed
  private _originalHeight: string;
  private _originalWidth: string;
  public set allowExpansion(value: boolean) {
    this._allowExpansion = value;
  }
  public get allowExpansion() {
    return this._allowExpansion;
  }


  /**
   * Show or hide the current object
   */
  set show(value: boolean) { this._show = value; }
  get show() { return this._show; }

  @Output() expandEvent = new EventEmitter<MatExpandingBoxComponent>();
  constructor(private ref: ElementRef, private sanatizer: DomSanitizer, private renderer: Renderer2) {
    super(ref);
  }

  @HostListener('mouseover') onMouseOver() {
    this.makeProminant();
  }
  @HostListener('mouseout') onmouseout() {
    this.makeNotProminant();
  }

  ngAfterViewInit() {
    // Called after every check of the component's or directive's content.
    this.originalRow = this.rowspan;
    this.originalCol = this.colspan;
  }

  /**
   * Change the column and row size
   * @param col The number of columns that the Component should use
   * @param row The number of rows that the component should use
   * @param overwrite Set to true to overwrite the stored col and row values for reversion
   */
  public changeColAndRow(col: number, row: number, overwrite?: boolean) {
    this.rowspan = row;
    this.colspan = col;
    if (overwrite === true) {
      this.originalRow = row;
      this.originalCol = col;
    }
  }

  public revertToOriginalRowAndColumn() {
    this.rowspan = this.originalRow;
    this.colspan = this.originalCol;
  }

  private makeProminant() {
    if (!this._originalHeight) {
      this._originalHeight = this.ref.nativeElement.style.height;
    }

    if (!this._originalWidth) {
      this._originalWidth += this.ref.nativeElement.style.width;
    }

    this.renderer.removeStyle(this.ref.nativeElement, 'height');
    this.renderer.setStyle(this.ref.nativeElement, 'height', this._originalHeight.replace(');', '') + '+50px)' );
  }

  private makeNotProminant() {
  }

  /**
   * Send Message to the MatExpandingBoxWrapper object to expand the current block to full size
   */
  expandBlock() {
    this.expandEvent.emit(this);
  }

}
