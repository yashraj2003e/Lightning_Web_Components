import { LightningElement } from "lwc";

export default class ChildComponent extends LightningElement {
  handleClick() {
    const e = new CustomEvent("sendmessage", {
      detail: "Hello this is your Child "
    });

    this.dispatchEvent(e);
  }
}
