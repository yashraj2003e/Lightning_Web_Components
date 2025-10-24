import { LightningElement } from "lwc";

export default class ParentComponent extends LightningElement {
  messageFromChild;

  handleMessage(e) {
    this.messageFromChild = e.detail;
  }
}
