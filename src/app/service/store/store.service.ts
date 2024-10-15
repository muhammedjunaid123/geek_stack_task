import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }
  store = new BehaviorSubject<string>('')

  toPrompt(text: string) {
    this.store.next(text)
  }
}
