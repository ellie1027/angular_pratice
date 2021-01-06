import {EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  dataTransfer = new EventEmitter();

  constructor() { }
}
