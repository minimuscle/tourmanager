import org.junit.Test;

import static org.junit.Assert.*;

public class LocationTests {

	Position posA = new Position(1, 2);
	Location test = new Location("the spot", "it is the one and only", posA, 10.1);

	@Test
	public void getNameTest() {
		String result = test.getName();
		assertEquals("the spot", result);
	}
	
	@Test
	public void getMinDurationTest() {
		double result = test.getMinDuration();
		assertEquals(result, 10.1, Double.NaN);
	}
	
	@Test
	public void getDescriptionTest() {
		String result = test.getDescription();
		assertEquals("it is the one and only", result);
	}
	
	@Test
	public void setNameTest() {
		test.setName("yeet");
		assertEquals(test.getName(), "yeet");
	}
	
	@Test
	public void setMinDurationTest() {
		test.setMinDuration(9.1);
		assertEquals(test.getMinDuration(), 9.1, Double.NaN);
	}
	
	@Test
	public void setDescriptionTest() {
		test.setDescription("this is not a description");
		assertEquals(test.getDescription(), "this is not a description");
	}
}
	