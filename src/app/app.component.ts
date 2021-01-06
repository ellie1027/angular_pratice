import { Component } from '@angular/core';
import { DataTransferService } from './data-transfer.service';

// interface Person {
//   name: string;
//   age: number;
// }

// 컴포넌트 : html, css, javascript

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ang01';
  // myInput = '';
  // checkedValue1 = 'show';
  // checkedValue2 = 'show';
  //
  // people: Person[] = [
  //   {name: 'hyuk', age: 33},
  //   {name: 'byul', age: 31}
  // ];
  //
  // alert(): void {
  //   alert(this.title);
  // }
  value = '';
  values: string[] = [];
  dataForChild: string[] = [];
  globalDataFromParent: string[] = [];

  insertVal(val: string): void {
    if (val !== ''){
      this.values.push(val);
    }
  }

  deleteVal(idx: number): void {
    this.values.splice(idx, 1);
  }

  //child1 (부모->자식)
  sendChild(val: any){
    this.dataForChild.push(val);
  }

  //child2 (서비스 이용 데이터 바인딩)
  sendGlobally(val: any){
    this.dataTransfer.dataTransfer.emit(val);
  }

  constructor(private dataTransfer: DataTransferService){
  }


}
