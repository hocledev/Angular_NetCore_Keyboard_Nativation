import { Component, OnInit, ViewChildren, QueryList, HostListener, ViewChild, ElementRef, ContentChildren, AfterViewInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { RouteInfo } from "./sidebar.metadata";
import { Router, ActivatedRoute } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { UP_ARROW, DOWN_ARROW, ENTER } from '@angular/cdk/keycodes';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';

declare var $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements AfterViewInit {
    public menuItems: any[];
    private keyManager: FocusKeyManager<SidebarContentComponent>;
    @ViewChildren(SidebarContentComponent) items: QueryList<SidebarContentComponent>;
    @ViewChild('sidebar') el: ElementRef;

    constructor(private router: Router,
        private route: ActivatedRoute, public translate: TranslateService) {

    }

    ngAfterViewInit() {
        $.getScript('./assets/js/app-sidebar.js');
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.keyManager = new FocusKeyManager(this.items).withWrap();
        this.initKeyManagerHandlers();
    }

    @HostListener('keydown', ['$event'])
    onKeydown(event) {
      if (event.keyCode === ENTER) {
        this.keyManager.activeItem.selectItem();
      } else if(event.keyCode === DOWN_ARROW || event.keyCode === UP_ARROW) {
        this.keyManager.onKeydown(event);
      }
    }

    //NGX Wizard - skip url change
    ngxWizardFunction(path: string) {
        if (path.indexOf('forms/ngx') !== -1)
            this.router.navigate(['forms/ngx/wizard'], { skipLocationChange: false });
    }

    navigation(item) {
      this.router.navigate([item.path]);
    }

    initKeyManagerHandlers() {
      this.keyManager
        .change
        .subscribe((activeIndex) => {
          // when the navigation item changes, we get new activeIndex
          this.items.map((item, index) => {
            // set the isActive `true` for the appropriate list item and `false` for the rest
            item.setActive(activeIndex === index);
            return item;
          });
        });
    }
}
