import { LightningElement } from "lwc";

export default class ChildComponent1 extends LightningElement {
  userInput = "";

  handleChange(e) {
    this.userInput = e.target.value;
  }

  sendData() {
    const e = new CustomEvent("sendname", {
      detail: this.userInput
    });
    this.dispatchEvent(e);
  }
}
