import {IQuickOrderObserver} from '../interface/quickorder-observer.interface';
import {IQuickOrderSubject} from '../interface/quickorder-subject.interface';

export class QuickOrderSubject implements IQuickOrderSubject {
  observers: IQuickOrderObserver[] = [];
  subject: SubjectState;

  constructor() {
    this.subject = new SubjectState(null);
    this.observers = [];
  }

  Attach(observer: IQuickOrderObserver): void {
    this.observers.push(observer);
  }

  Detach(observer: IQuickOrderObserver): void {
    this.observers = this.observers.filter(x => x !== observer);
  }

  Notify(): void {
    this.observers.forEach(observer => observer.Update());
  }
}

export class SubjectState {
  constructor(public state: any) {}
}
