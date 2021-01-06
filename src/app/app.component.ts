import { Component } from '@angular/core';

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

  insertVal(val: string): void {
    if (val !== ''){
      this.values.push(val);
    }
  }

  deleteVal(idx: number): void {
    this.values.splice(idx, 1);
  }

  sendChild(val: any){
    this.dataForChild.push(val);
  }

  sendGlobaly(input: any){

  }

}
