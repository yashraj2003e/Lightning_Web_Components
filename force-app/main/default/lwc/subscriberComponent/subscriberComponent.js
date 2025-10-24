import { LightningElement } from "lwc";

import {
  createMessageContext,
  releaseMessageContext,
  subscribe,
  unsubscribe
} from "lightning/messageService";

import SIMPLE_CHANNEL from "@salesforce/messageChannel/SimpleMessageChannel__c";

export default class SubscriberComponent extends LightningElement {
  context = createMessageContext();

  subscription = null;

  receivedMessage = "";

  connectedCallback() {
    this.subscribeToChannel();
  }

  subscribeToChannel() {
    if (this.subscription) {
      return;
    }

    this.subscription = subscribe(this.context, SIMPLE_CHANNEL, (m) =>
      this.handleMessage(m)
    );
  }

  handleMessage(m) {
    this.receivedMessage = m ? m.message : "No message Received";
  }

  disconnectedCallback() {
    unsubscribe(this.subscription);
    releaseMessageContext(this.context);
  }
}
