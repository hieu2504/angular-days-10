import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { ToggleComponent } from './toggle.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(ToggleComponent, { static: true }) toggleComp: ToggleComponent;
  // @ViewChild('toggleButton', { static: true })
  // toggleBtn: ElementRef<HTMLButtonElement>;

  @ViewChild('nameInput', { static: true })
  nameInput: ElementRef<HTMLInputElement>;

  name = 'Angular ' + VERSION.major;

  isChecked = true;

  ngOnInit() {
    setTimeout(() => {
      this.nameInput.nativeElement.focus();
    }, 3000);

    console.log('oninit', this.toggleComp);
  }

  ngAfterViewInit() {
    console.log(this.toggleComp);
    // apiCall.subscribe(() => {
    //   this.toggleComp.toggle();
    // });
  }
}
