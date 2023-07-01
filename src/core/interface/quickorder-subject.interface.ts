import { IQuickOrderObserver } from "./quickorder-observer.interface";

export interface IQuickOrderSubject {
    Attach(observer: IQuickOrderObserver): void;
    Detach(observer: IQuickOrderObserver): void;
    Notify(): void;
}