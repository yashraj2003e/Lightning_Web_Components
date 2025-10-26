import { LightningElement } from "lwc";
import getAccount from "@salesforce/apex/getAccounts.getAccount";

export default class ConnectedCallback_example extends LightningElement {
  connectedCallback() {
    getAccount()
      .then((data) => {
        console.log("Data Fetched from Connected Callback !");
        console.log(data);
      })
      .catch((e) => {
        console.log("Error Occurred !");
        console.log(e);
      });
  }
}
