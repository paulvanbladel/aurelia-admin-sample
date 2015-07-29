import {inject} from 'aurelia-framework';
import {CustomerData} from "./customerData";

@inject(CustomerData)
export class List {
  heading = 'Customer management';
  
  customers = [];

  constructor(data) {
    this.service = data;
    this.currentPage = 0;
    console.log("constructor");
  }

  getMoreData() {
    //implement spinner

    this.currentPage++;
    return this.service.getPage(this.currentPage)
      .then(customers => {
       this.customers = this.customers.concat(customers);
       
     });

  }

  activate() {
    console.log("acitvate start");
    return this.getMoreData();
    console.log("activate end");
  }
}
