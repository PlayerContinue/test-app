import { Injectable,ApplicationRef,ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Injectable()
export class MobileChecker {

    mobileQuery: MediaQueryList;
    private _mobileQueryListener: () => void;


    public get matches():boolean{
        return this.mobileQuery.matches;
    }

    public addListener(listener:Function){
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    public addChangeListener(){
        ChangeDetectorRef
    }

    constructor(private changeDetectorRef:ApplicationRef, private media:MediaMatcher) {

        this.mobileQuery = media.matchMedia('(max-width:600px)');
       }



       
   ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}