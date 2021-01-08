import { Component, OnInit, Input } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input()
  dataFromParent: string = '';

  

  constructor(dataTransfer: DataTransferService) {

   }

  ngOnInit(): void {
    
  }

}
