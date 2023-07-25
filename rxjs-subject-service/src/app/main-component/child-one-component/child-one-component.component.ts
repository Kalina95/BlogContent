import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainComponentService } from 'src/app/services/mainComponentService';

@Component({
  selector: 'app-child-one-component',
  templateUrl: './child-one-component.component.html',
  styleUrls: ['./child-one-component.component.css']
})
export class ChildOneComponentComponent implements OnInit {

  private onButtonClickedEvent!: Subscription;

  constructor(public service: MainComponentService) { }

  ngOnInit(): void {
    this.subscribeOnButtonClickedEvent();
  }

  private subscribeOnButtonClickedEvent() {
    this.onButtonClickedEvent = this.service.buttonClicked$.subscribe((event) => {
      if(event === 1) document.getElementById("firstChildParagraph")!.innerHTML = "button 2 clicked";
      else if(event === 2) document.getElementById("firstChildParagraph")!.innerHTML = "";
    })
  } 

  public notifySecondChild() {
    this.service.buttonClicked$.next(2);
    console.log("button clicked. 2 sent to Observers")
  }

}
