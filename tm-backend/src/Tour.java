import java.util.ArrayList;

public class Tour {

    /*create a new tour out of the specified locations:
    the tour should be specified by its name, type,
    min. duration (which is a
    sum of the minimal times to spend at each location),*/

    private String tourName;
    private TourType type;
    private double minTotalDuration; //The sum of the min duration of each location
    private ArrayList<Location> locations = new ArrayList<>();

    // Constructor to create a new tour
    public Tour(String tourName, TourType type) {
        this.tourName = tourName;
        this.type = type;

    }

    // Getter methods
    public String getTourName() {
        return tourName;
    }

    public TourType getType() {
        return type;
    }

    public double getMinDuration() {
        return minTotalDuration;
    }

    // Setter methods
    public void setTourName(String tourName) {
        this.tourName = tourName;
    }

    public void setType(TourType type) {
        this.type = type;
    }

    public void setMinDuration(double minDuration) {
        this.minTotalDuration = minDuration;
    }

    // When a new element is added, the total duration is also updated
    public void addLocation(Location location) {
        boolean valid = validateLocation(location);

        // If the location does not already exist in the tour, add it
        if(valid) {
            locations.add(location);
            updateMinTotDuration();
        } else {
            //If the location exists, let user know why it has not been added
            System.out.println("Location already exists in this tour.");
        }
    }

    // This method checks to see if a Tour already has a location
    public boolean validateLocation(Location location) {
        boolean locExists = true;

        // Check to see if the location already exists so we do not duplicate
        for (int i = 0; i < locations.size(); i++) {
            if(locations.get(i) == location) {
                locExists = false;
            }
        }
        return locExists;
    }

    // Removes a location from a tour when needed
    public void removeLocation(Location location) {
        locations.remove(location);

        // When a location is removed, the arraylist is cut to size
        locations.trimToSize();
    }

    public void updateMinTotDuration() {
        calcMinTotalDuration();
    }

    public double calcMinTotalDuration() {
        double totTime = 0;
        if(locations.size() <= 0) {
            totTime = 0;
        } else {
            for (int i = 0; i < locations.size(); i++) {
                totTime += locations.get(i).getMinDuration();
            }
        }
        return totTime;
    }
}
