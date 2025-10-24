import { track, LightningElement } from "lwc";

import getAccount from "@salesforce/apex/getAccounts.getAccount";

/** 
// TODO - Figure out scenarios to use ConnectedCallback and RenderedCallback 
//? and implement them

// !ConnectedCallback - when components inserted in DOM
// !RenderedCallback - UI renders everytime when data changes, (TEMPLATE CHANGE !!!)
**/

export default class Connected_callback_scene extends LightningElement {
  @track data;
  error;
  @track size;

  connectedCallback() {
    document.title = "Loading...";
    getAccount()
      .then((data) => {
        this.data = data;
        console.log(this.data);
        this.size = data.length;
        console.log(this.size);
      })
      .catch((error) => {
        this.error = error;
        console.log(error);
      });
  }

  renderedCallback() {
    console.log(document.title);
  }
}
