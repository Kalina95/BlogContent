import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainComponentService } from 'src/app/services/mainComponentService';

@Component({
  selector: 'app-child-two-component',
  templateUrl: './child-two-component.component.html',
  styleUrls: ['./child-two-component.component.css']
})
export class ChildTwoComponentComponent implements OnInit {

  private onButtonClickedEvent!: Subscription;

  constructor(public service: MainComponentService) { }

  ngOnInit(): void {
    this.subscribeOnButtonClickedEvent();
  }

  private subscribeOnButtonClickedEvent() {
    this.onButtonClickedEvent = this.service.buttonClicked$.subscribe((event) => {
      if(event === 2) document.getElementById("secondChildParagraph")!.innerHTML = "button 1 clicked";
      else if(event === 1) document.getElementById("secondChildParagraph")!.innerHTML = "";
    })
  } 

  public notifyFirstChild() {
    this.service.buttonClicked$.next(1);
    console.log("button clicked. 1 sent to Observers")

  }
}
