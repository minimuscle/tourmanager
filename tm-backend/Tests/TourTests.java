import java.util.ArrayList;
import org.junit.*;
import static org.junit.Assert.*;


public class TourTests {

	
	private ArrayList<Location> locations = new ArrayList<>();
	private Position posA = new Position(12344,54535);
	private Position posB = new Position(4,2);
	private Position posC = new Position(2,1);
    private TourType testType = new TourType("Travel");
    private Location testLocation  = new Location("HN","Nice!", posA, 50.5);
    private Location testPlace = new Location("A", "something", posB, 21.2);
    private Location placeholder = new Location("LN", "info", posC, 11.3);
    private Tour testTour = new Tour( "Tour!", testType);

    
    @Before
    public void sysOut () {
        testTour.addLocation(testLocation);
    	testTour.addLocation(testPlace);
    } 
    
    @Test
    public void addLocationTest() {
    	System.out.println("adding a new location...");
    	testTour.addLocation(placeholder);
    	System.out.println("adding a duplicate...");
    	testTour.addLocation(placeholder);
    }
    
    
    @Test
    public void validateLocationTest() {
    	testTour.validateLocation(placeholder);
    }
    
    @Test
    public void removeLocationTest() {
    	testTour.addLocation(placeholder);
    	testTour.removeLocation(placeholder);
    }
    
    @Test
    public void getTourNameTest() {
    	String result = testTour.getTourName();
    	assertEquals("Tour!", result);
    }
    
    @Test
    public void getTourTypeTest() {
    	TourType result = testTour.getType();
    	assertEquals(testType, result);
    }
    
    @Test
    public void calcMinTotalDurationTest() {
    	Double result = testTour.calcMinTotalDuration();
    	assertEquals(result, 71.7, Double.NaN);
    }
    
    @Test
    public void getMinTotalDurationTest() {
    	testTour.setMinDuration(testTour.calcMinTotalDuration());
    	testTour.updateMinTotDuration();
    	Double result = testTour.getMinDuration();
    	assertEquals(result, 71.7, Double.NaN);
    }
    
//	@Test
//	public void addTour() {
//		locations.add(localtion);
//		System.out.print("Case 1:" + "Created Tour\n");
//        assertFalse(testTour.isEmpty());
//	}
//	
//	@Test
//    public void deleteTour() {
//    	myTour.deleteTour();
//		System.out.print("Case 2: " + "Deleted Tour\n\n");
//    	assertTrue(myTour.isEmpty());
//    }
}