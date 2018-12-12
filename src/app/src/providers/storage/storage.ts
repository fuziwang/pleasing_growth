import { Injectable } from '@angular/core';

@Injectable()
export class StorageProvider {

  constructor() {
    console.log('Hello StorageProvider Provider');
  }
  public setItem(key,value){
    localStorage.setItem(key,JSON.stringify(value))
  }
  public getItem(key){
    return JSON.parse(localStorage.getItem(key))
  }
  public removeItem(key){
    localStorage.removeItem(key)
  }
}
