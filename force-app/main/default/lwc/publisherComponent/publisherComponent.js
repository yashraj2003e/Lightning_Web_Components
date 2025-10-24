import { LightningElement } from "lwc";

import {
  createMessageContext,
  releaseMessageContext,
  publish
} from "lightning/messageService";

import SIMPLE_CHANNEL from "@salesforce/messageChannel/SimpleMessageChannel__c";

export default class PublisherComponent extends LightningElement {
  context = createMessageContext();

  inputMessage = "";

  handleChange(e) {
    this.inputMessage = e.target.value;
  }

  handlePublish() {
    const message = {
      message: this.inputMessage
    };
    publish(this.context, SIMPLE_CHANNEL, message);
  }

  disconnectedCallback() {
    releaseMessageContext(this.context);
  }
}
