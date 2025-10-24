import { LightningElement } from "lwc";

export default class Getters_setters extends LightningElement {
  first;
  second;

  get message() {
    return Number(this.first) + Number(this.second);
  }

  getNumbers() {
    this.first = this.template.querySelector(".first").value;
    this.second = this.template.querySelector(".second").value;
  }
}
