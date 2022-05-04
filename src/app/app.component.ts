import { AfterViewInit, Component, VERSION, ViewChild } from '@angular/core';
import { ToggleComponent } from './toggle.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(ToggleComponent, { static: true }) toggleComp: ToggleComponent;

  name = 'Angular ' + VERSION.major;

  isChecked = true;

  ngOnInit() {
    console.log('oninit', this.toggleComp);
  }

  ngAfterViewInit() {
    console.log(this.toggleComp);
    // apiCall.subscribe(() => {
    //   this.toggleComp.toggle();
    // });
  }
}
