import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { FocusableOption } from '@angular/cdk/a11y';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss'],
  host: {
    'tabindex': '-1'
  },
})
export class SidebarContentComponent implements OnInit {
  @Input() menuItem;
  @Output() itemSelected = new EventEmitter<any>();
  isActive: boolean;
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  setActive(val) {
    console.log(val);
    this.isActive = val;
  }

  focus() {
    this.elementRef.nativeElement.focus();
  }

  selectItem() {
    this.itemSelected.emit(this.menuItem);
  }
}
