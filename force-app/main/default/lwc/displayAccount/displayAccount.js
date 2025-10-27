import { LightningElement, api } from "lwc";

import accName from "@salesforce/schema/Account.Name";
import Industry from "@salesforce/schema/Account.Industry";
import Phone from "@salesforce/schema/Account.Phone";

export default class DisplayAccount extends LightningElement {
  @api recordId;
  @api objectApiName;
  fields = [accName, Industry, Phone];
}
