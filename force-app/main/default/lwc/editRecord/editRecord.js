import { LightningElement, api } from "lwc";

import accName from "@salesforce/schema/Account.Name";
import Phone from "@salesforce/schema/Account.Phone";
import Industry from "@salesforce/schema/Account.Industry";

export default class EditRecord extends LightningElement {
  @api recordId;
  @api objectApiName;
  fields = [accName, Phone, Industry];
  // !use layout-type "compact" or "full" when not using fields !
}
