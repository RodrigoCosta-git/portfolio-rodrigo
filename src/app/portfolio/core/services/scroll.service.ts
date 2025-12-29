import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private _position$ = new BehaviorSubject<number>(0);
  readonly position$ = this._position$.asObservable();

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  setPosition(pos: number) {
    this._position$.next(pos);
  }
}
