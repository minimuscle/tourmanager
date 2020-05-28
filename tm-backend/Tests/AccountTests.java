import org.junit.Test;
import static org.junit.Assert.*;

public class AccountTests {

	Admin admin1 = new Admin("barry", "jones", "s13");
	Admin admin2 = new Admin("kenny", "rogers", "w5");
	Assistant assistant1 = new Assistant("jenny", "kyle", "a123");
	Assistant assistant2 = new Assistant("miss", "evil", "v8");

	@Test
	public void getFirstNameTest() {
		String result = admin1.getFirstName();
		assertEquals("barry", result);
		String result2 = assistant1.getFirstName();
		assertEquals("jenny", result2);
	}

	@Test
	public void getLastNameTest() {
		String result = admin1.getLastName();
		assertEquals("jones", result);
		String result2 = assistant1.getLastName();
		assertEquals("kyle", result2);
	}

	@Test
	public void getEmployIDTest() {
		String result = admin1.getEmployID();
		assertEquals("s13", result);
		String result2 = assistant1.getEmployID();
		assertEquals("a123", result2);
	}

	@Test
	public void getAccTypeTest() {
		AccountType result = admin1.getAccType();
		assertEquals(AccountType.Administrator, result);
		AccountType result2 = assistant1.getAccType();
		assertEquals(AccountType.Assistant, result2);
	}

	@Test
	public void printUserTest() {
		System.out.println("print user test....");
		System.out.println("Admin user one...");
		admin1.printUser(admin1);
		System.out.println();
		System.out.println("Assistant user one...");
		assistant1.printUser(assistant1);
		System.out.println();
	}

	@Test
	public void disableAccountTest() {
		System.out.println("admin disable test....");
		admin1.disableAccount(assistant2);
		System.out.println("admin disable already disabled account...");
		admin1.disableAccount(assistant2);
		System.out.println("inactive admin attempt disable account...");
		admin1.disableAccount(admin2);
		admin2.disableAccount(admin1);
		System.out.println("assistant attempt account disable...");
		assistant1.disableAccount(assistant2);
		System.out.println();
	}

	@Test
	public void enableAccountTest() {
		System.out.println("admin enable test....");
		admin1.disableAccount(assistant2);
		admin1.enableAccount(assistant2);
		System.out.println("admin enable already active account...");
		admin1.enableAccount(assistant1);
		System.out.println("disabled account attempt enable...");
		admin1.disableAccount(admin2);
		admin2.enableAccount(admin2);
		System.out.println("assistant attempt enable account...");
		assistant1.enableAccount(admin2);
		System.out.println();
	}

	@Test
	public void checkActiveAdminTest() {
		admin1.getAccType();
		admin1.checkActiveAdmin();
		assistant1.getAccType();
		assistant1.checkActiveAdmin();
	}

	@Test
	public void checkAccountStatusTest() {
		admin1.getAccType();
		admin1.checkAccountStatus(admin1);
		admin1.checkAccountStatus(assistant1);
		assistant1.getAccType();
		assistant1.checkAccountStatus(assistant1);
		assistant1.checkAccountStatus(admin1);
	}

}