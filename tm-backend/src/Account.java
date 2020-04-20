public abstract class Account {
    private String firstName;
    private String lastName;
    private String employID;
    private AccountType accType;
    private boolean accEnabled;

    public Account(String firstName, String lastName, String employID, AccountType accType, boolean accStatus) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employID = employID;
        this.accType = accType;
        this.accEnabled = accStatus;
    }

    //GETTER METHODS
    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmployID() {
        return employID;
    }

    public AccountType getAccType() {
        return accType;
    }

    public boolean getStatus() {
        return accEnabled;
    }

    // SETTER METHODS
//    public void setFirstName(String firstName) {
//        this.firstName = firstName;
//    }
//
//    public void setLastName(String lastName) {
//        this.lastName = lastName;
//    }
//
//    public void setEmployID(String employID) {
//        this.employID = employID;
//    }
//
//    public void setAccType(AccountType accType) {
//        this.accType = accType;
//    }

    public void printUser() {
        System.out.println("First Name: " + getFirstName()
        + "\nLast Name: " + getLastName()
        + "\nEmployee ID: " + getEmployID()
        + "\nAccount Type: " + getAccType()
        + "\nAccount Active: " + getStatus());
    }

    // Method to disable an account that is currently active
    public void disableAccount(Account account) {
        boolean isActiveAdmin = checkActiveAdmin();
        boolean activeAccount = checkAccountStatus(account);
        if(isActiveAdmin) {
            if (!activeAccount) {
                System.out.println("Account " + account.getEmployID() + " is already disabled. Cannot disable again.");
            } else {
                System.out.println("Account " + account.getEmployID() + " is now disabled.");
                account.accEnabled = false;
            }
        } else {
            if (!this.getStatus()) {
                System.out.println("Your account is not currently active.");
            } else {
                System.out.println("You are not an admin.");
            }
        }
    }

    // Method to enable an account that is currently disabled
    public void enableAccount(Account account) {
        boolean isActiveAdmin = checkActiveAdmin();
        boolean activeAccount = checkAccountStatus(account);
        if(isActiveAdmin) {
            if (activeAccount) {
                System.out.println("Account " + account.getEmployID() + " is already active.");
            } else {
                System.out.println("Account " + account.getEmployID() + " is now enabled.");
                account.accEnabled = true;
            }
        } else {
            if(!this.getStatus()) {
                System.out.println("Your account is not currently active.");
            } else {
                System.out.println("You are not an admin.");
            }
        }
    }

    // To enable or disable an account, the account must be an Active Admin account
    public boolean checkActiveAdmin() {
        boolean success = false;
        if(this.getAccType() == AccountType.Administrator && this.getStatus() == true) {
            success = true;
        }
        return success;
    }

    // To enable or disable an account, the account must be an Active Admin account
    public boolean checkAccountStatus(Account account) {
        boolean success = false;
        if(account.getStatus() == true) {
            success = true;
        }
        return success;
    }
}
