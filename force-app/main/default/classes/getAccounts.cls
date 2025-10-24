public with sharing class getAccounts {
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccount() {
    return [SELECT Name, Industry FROM Account];
  }
}
