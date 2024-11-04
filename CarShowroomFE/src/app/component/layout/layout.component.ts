import { Component, OnInit } from '@angular/core';
import { TABS } from './tabs';
import { Tab } from '../sidenav/tab';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterOutlet],
  templateUrl: './layout.component.html',
})
export class LayoutComponent  {
  tabs = new BehaviorSubject<Tab[]>(TABS); 
  tabs$: Observable<Tab[]> = this.tabs.asObservable(); 



  setActiveTab(newTab: Tab): void {
    const updatedTabs = this.tabs.getValue().map((tab: Tab) => ({
        ...tab,
        isActive: tab.title === newTab?.title,
    }));
    
    this.tabs.next(updatedTabs);

}

  initTabs(tabs: Tab[]): void {
    this.tabs.next(tabs);
}
}
