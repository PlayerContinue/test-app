import { Injectable } from '@angular/core';

@Injectable()
export class URLListService {
    eventsUrl = 'http://thirdtimesacharm.us-west-2.elasticbeanstalk.com/api/events';
    registrationUrl = 'http://thirdtimesacharm.us-west-2.elasticbeanstalk.com/api/forms/test?XDEBUG_SESSION_START=netbeans-xdebug';
}
