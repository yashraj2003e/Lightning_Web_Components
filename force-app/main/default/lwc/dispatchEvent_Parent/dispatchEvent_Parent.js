import { LightningElement } from "lwc";

export default class DispatchEvent_Parent extends LightningElement {
  messageFromChild;
  handleChildEvent(e) {
    this.messageFromChild = e.detail;
    console.log(e.data);
  }
}
