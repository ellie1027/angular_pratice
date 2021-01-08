import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataTransferService } from '../data-transfer.service';
//import { Tab, map, filter } from "rxjs/operator";

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input()
  dataFromParent: string = '';

  @Output()
  dataForParent: any;

  @Output()
  dataEvent = new EventEmitter<string>();

  send(input: any) {
    this.dataEvent.emit(input.value);
  }

  globalDataFromParent = '';
  subscription1: any = Subscription;

  constructor(private dataTransfer: DataTransferService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //비동기로 작동
    this.dataTransfer.dataTransfer.subscribe((data: string) => {
      this.globalDataFromParent = data;
    });

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription1.unsubscribe();   
  }

}
