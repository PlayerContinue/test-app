import { Component, OnInit, AfterViewInit, ViewContainerRef, Input } from '@angular/core';
import { LoadingService } from '../_Services/loadingService.service';
import { LoadingData } from '../_Objects/LoadingData';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';


@Component({
  selector: 'app-loadingbar',
  templateUrl: './loadingbar.component.html',
  styleUrls: ['./loadingbar.component.css']
})
export class LoadingbarComponent implements OnInit {
  loading: boolean;

  constructor( private router: Router ) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

   // Shows and hides the loading spinner during RouterEvent changes
   navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }

  ngOnInit() { }

}
