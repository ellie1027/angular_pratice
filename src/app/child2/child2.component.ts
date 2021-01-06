import { Component, Input, OnInit } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input()
  globalDataFromParent: string[] = [];

  constructor(private dataTransfer: DataTransferService){
  }

  ngOnInit(): void {
    this.dataTransfer.dataTransfer.subscribe((data: string) => {
      this.globalDataFromParent.push(data);
    });
  }



}
