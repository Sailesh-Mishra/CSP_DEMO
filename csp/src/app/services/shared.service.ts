import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private messageSource = new BehaviorSubject<string>('Default');

  currentMessage = this.messageSource.asObservable();
  changeMessage(msg: string) {
    this.messageSource.next(msg);
  }
}
