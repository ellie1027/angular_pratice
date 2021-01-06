import { Component } from '@angular/core';

// interface Person {
//   name: string;
//   age: number;
// }

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

  insertVal(val: string): void {
    if (val !== ''){
      this.values.push(val);
    }
  }

  deleteVal(idx: number): void {
    this.values.splice(idx, 1);
  }

}
