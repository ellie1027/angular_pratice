import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { DataTransferService } from './data-transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  /* Parent → Child1 */
  
  // static이 false 이면 ngOnInit 실행 전 자동으로 변경 감지
  @ViewChild('input1', { static: false })
  input1?: ElementRef;

  dataForChild1: string = 'test1';
  //dataFromChild1: string = '';

  sendToChild1(input1: any) {
    this.dataForChild1 = input1.value;
    //this.dataForChild1 = this.input1?.nativeElement.value;
  }


  /* Parent → Child2 */

  //static이 false 이면 ngOnInit 실행 전 자동으로 변경 감지
  @ViewChild('input2', { static: false })
  input2?: ElementRef;

  dataForChild2: string = 'test2';
  // dataFromChild2: string = '';

  sendToChild2(input2: any) {
    this.dataForChild2 = input2.value;  
    //this.dataForChild2 = this.input2?.nativeElement.value;
  }

  receiveFromChild(data: string) {
    console.log(data);
  }

  constructor(private dataTransfer: DataTransferService){
  }

  sendGlobaly(input: any){
    this.dataTransfer.dataTransfer.emit(input.value);
  }

}
