import { LightningElement, wire } from "lwc";
import getAccount from "@salesforce/apex/getAccounts.getAccount";
export default class Wire_example extends LightningElement {
  data;
  error;

  @wire(getAccount)
  getRecords(data, error) {
    if (data) {
      console.log("Data Fetched !");
      console.log(data);
    } else if (error) {
      console.log("Got Error !");
    }
  }
}
