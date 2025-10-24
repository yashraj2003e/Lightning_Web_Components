public with sharing class getAccounts {
    @AuraEnabled(cacheable=True)
    public static List<Account> getAccount() {
        return [Select Name, Industry from Account];
    }
}