import {inject} from "aurelia-framework";
import {CustomerData} from "./customerData";
import {Router} from "aurelia-router";
//import {Validation} from "aurelia-validation";

@inject(CustomerData, Router)
export class Edit {

    constructor(data, router) {
        this.data = data;   
        this.router = router;
    }

    activate(params) {
        if (params.id) {
        return this.data.getById(params.id)
                   .then(customer => {
                       this.customer = customer;
                   });
       }
       else{
            this.customer = {};
       }
    }  
    
    save() {
            this.data.save(this.customer)
                .then(customer => {
                    let url = this.router.generate("detail", { id: customer._id});
                    this.router.navigate(url);
                });
    }

}