import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UpdateFilterService {
    private searchsubject = new Subject<any>();
    private searchcolorsubject = new Subject<any>();

    // Filter Service started
    sendMessage(message: string) {
        this.searchsubject.next({ text: message });
    }

    clearMessage() {
        this.searchsubject.next();
    }

    getMessage(): Observable<any> {
       return this.searchsubject.asObservable();
    }
    // Filter Service end

    // Widget Service started
    sendWidgetData(message: any) {
        this.searchsubject.next({ text: message });
    }
     getWidgetData(): Observable<any> {
       return this.searchsubject.asObservable();
    }
    clearWidgetData() {
        this.searchsubject.next();
    }
    // Widget Service started

    // Themes Service started
    sendThemesMessage(messagecolor: string) {
        this.searchcolorsubject.next({ text: messagecolor });
    }

    clearThemesMessage() {
        this.searchcolorsubject.next();
    }

    getThemesMessage(): Observable<any> {
       return this.searchcolorsubject.asObservable();
    }
    // Themes Service end
}