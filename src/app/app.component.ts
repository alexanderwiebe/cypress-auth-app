import { Component, VERSION } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  token = '';
  constructor(private router: ActivatedRoute) {
    let token = this.router.snapshot.queryParamMap.get('token');
  }
}
