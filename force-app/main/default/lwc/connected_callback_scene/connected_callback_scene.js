import { LightningElement } from "lwc";

import getAccount from "@salesforce/apex/getAccounts.getAccount";

/** 
// TODO - Figure out scenarios to use ConnectedCallback and RenderedCallback 
//? and implement them

// !ConnectedCallback - when component inserted in DOM, initial stage nothing is rendered 
// !RenderedCallback - UI renders everytime when data changes, (TEMPLATE CHANGE !!!)
**/

export default class Connected_callback_scene extends LightningElement {
  data;
  error;
  size;

  titleUpdated = false;
  message = "hi";

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

    /**  //! ERROR
    const m = this.template.querySelector(".msg");
    console.log(m);
    m.innerText = "good bye";
    **/
  }

  renderedCallback() {
    if (this.data && !this.titleUpdated) {
      document.title = `Accounts Loaded (${this.size})`;
      console.log("title updated!");
      this.titleUpdated = true;
    }

    const m = this.template.querySelector(".msg");
    console.log(m);
    if (m) {
      m.innerText = "good bye";
    }
  }
}
