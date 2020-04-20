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

    public boolean isAccEnabled() {
        return accEnabled;
    }

    // SETTER METHODS
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmployID(String employID) {
        this.employID = employID;
    }

    public void setAccType(AccountType accType) {
        this.accType = accType;
    }

    public void setAccEnabled(boolean accEnabled) {
        this.accEnabled = accEnabled;
    }

    public void printUser() {
        System.out.println("First Name: " + getFirstName()
        + "\nLast Name: " + getLastName()
        + "\nEmployee ID: " + getEmployID()
        + "\nAccount Type: " + getAccType()
        + "\nAccount Active: " + isAccEnabled());
    }
}
