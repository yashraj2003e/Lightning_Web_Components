import { LightningElement } from "lwc";

import { ShowToastEvent } from "lightning/platformShowToastEvent";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import WEBSITE_FIELD from "@salesforce/schema/Account.Website";

export default class CreateAccount extends LightningElement {
  accountObject = ACCOUNT_OBJECT;
  myFields = [NAME_FIELD, WEBSITE_FIELD];

  handleAccountCreated(e) {
    this.dispatchEvent(
      new ShowToastEvent({
        title: "Record is created Successfully!",
        message: e.detail.message,
        variant: "success"
      })
    );
  }
}
