import { Injectable, ApplicationRef, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

export class MobileChecker {

    mobileQuery: MediaQueryList;
    private _mobileQueryListener: () => void;
    // private media: MediaMatcher;

    public get matches(): boolean {
        return this.mobileQuery.matches;
    }

    public addListener(listener: Function) {
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width:600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }


    Destroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }


}