import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: "root" })
export class MainComponentService{
    public buttonClicked$: Subject<number> = new Subject<number>();
}