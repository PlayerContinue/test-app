import {DataPass} from './dataPass';
import {LoadingService} from '../_Services/loadingService.service';

export class LoadingData {
    constructor(protected loading: LoadingService) {
        this.loading.passData(new DataPass<boolean, string>({ data: false }));
    }

    protected finishedLoading() {
        this.loading.passData(new DataPass<boolean, string>({ data: false }));
    }
}
