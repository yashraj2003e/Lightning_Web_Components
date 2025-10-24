import { LightningElement, track } from "lwc";

export default class Track_practice extends LightningElement {
  // !If not using @track, the data won't be updated in template !!!!!!!
  @track user = {
    name: "yash",
    age: 12
  };

  onNameChange(e) {
    /** // ?Preffered Way to Update  
    this.user.name = { ...this.user, name: e.target.value };
    **/

    this.user.name = e.target.value;
  }
}
