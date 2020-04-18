public class Admin extends Account {

    public Admin(String firstName, String lastName, String employID) {
        super(firstName, lastName, employID, AccountType.Administrator, true);
    }

    public void disableAccount(Account account) {
        if(account.isAccEnabled() == false) {
            System.out.println("Account " + account.getEmployID() + " is already disabled. Cannot disable again.");
        } else {
            System.out.println("Account " + account.getEmployID() + " is now disabled.");
            account.setAccEnabled(false);
        }
    }

    public void enableAccount(Account account) {
        if(account.isAccEnabled() == true) {
            System.out.println("Account " + account.getEmployID() + " is already active.");
        } else {
            System.out.println("Account " + account.getEmployID() + " is now enabled.");
            account.setAccEnabled(true);
        }
    }
}
