public class Admin extends Account {

    public Admin(String firstName, String lastName, String employID) {
        super(firstName, lastName, employID, AccountType.Administrator, true);
    }
}
