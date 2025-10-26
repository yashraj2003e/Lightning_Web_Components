import { LightningElement } from "lwc";

export default class DispatchEventChild extends LightningElement {
  sendMessage() {
    let e = new CustomEvent("customevent", {
      detail: "Hello Parent"
    });
    this.dispatchEvent(e);
  }
}
