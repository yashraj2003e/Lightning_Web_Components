import { LightningElement } from "lwc";

export default class ParentComponent1 extends LightningElement {
  receivedName = "";

  handleName(e) {
    this.receivedName = e.detail;
  }
}
