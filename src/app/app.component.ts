import {
  Component,
  ElementRef,
  QueryList,
  VERSION,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { ToggleComponent } from './toggle.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @ViewChild(ToggleComponent, { static: true }) toggleComp: ToggleComponent;
  // @ViewChild('toggleButton', { static: true })
  // toggleBtn: ElementRef<HTMLButtonElement>;

  @ViewChildren(ToggleComponent)
  toggleComps: QueryList<ToggleComponent>;

  @ViewChild('nameInput', { static: true })
  nameInput: ElementRef<HTMLInputElement>;

  name = 'Angular ' + VERSION.major;

  isChecked = true;
  showLast = true;

  ngOnInit() {
    // setTimeout(() => {
    //   this.nameInput.nativeElement.focus();
    // }, 3000);
  }

  ngAfterViewInit() {
    // apiCall.subscribe(() => {
    //   this.toggleComp.toggle();
    // });
    this.toggleComps.changes.subscribe(console.log);
  }
}
