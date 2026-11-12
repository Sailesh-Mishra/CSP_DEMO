import { Inject, Injectable } from "@angular/core";
import { APP_NAME } from "../config/api-injection-token";

// @Injectable({
//     providedIn: 'root'
// })
@Injectable()
export class FakeStoreAPI {
    constructor(@Inject(APP_NAME) public appName: string) {

    }

    getAppName() {
        return this.appName;
    }
}