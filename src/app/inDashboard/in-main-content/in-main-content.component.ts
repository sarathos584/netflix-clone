import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-in-main-content',
  templateUrl: './in-main-content.component.html',
  styleUrls: ['./in-main-content.component.css'],
})
export class InMainContentComponent {
  constructor(private r: Router) {}
}
