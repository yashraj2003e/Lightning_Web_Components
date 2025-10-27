import { LightningElement, api, wire } from "lwc";
import { getrecordui } from "lightning/uiRecordAPi";

export default class GetRecordUi extends LightningElement {
  @api recordId; // passed from parent or record page

  record;
  fields;

  @wire(getrecordui, {
    recordIds: "$recordId",
    layoutTypes: ["Full"],
    modes: ["Edit"]
  })
  recordUiHandler({ data, error }) {
    if (data) {
      this.record = data.records[this.recordId];
      this.fields = data.records[this.recordId].fields;
      console.log("Account Name:", this.fields.Name.value);
      console.log("Industry:", this.fields.Industry.value);
    } else if (error) {
      console.error(error);
    }
  }
}
