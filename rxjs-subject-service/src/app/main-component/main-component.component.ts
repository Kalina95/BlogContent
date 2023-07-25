import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainComponentService } from '../services/mainComponentService';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  private onButtonClickedEvent!: Subscription;

  constructor(public service: MainComponentService) { }

  ngOnInit(): void {
    this.subscribeOnButtonClickedEvent();
  }

  private subscribeOnButtonClickedEvent() {
    this.onButtonClickedEvent = this.service.buttonClicked$.subscribe((event) => {
      console.log("message received in main component with event equals: "+ event);
    })
  } 

}
