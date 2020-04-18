public class Tour {

    /*create a new tour out of the specified locations:
    the tour should be specified by its name, type,
    min. duration (which is a
    sum of the minimal times to spend at each location),*/

    private String tourName;
    private TourType type;
    private double minTotalDuration; //The sum of the min duration of each location

//    private locations;
//    private double maxDuration; // For validation purposes

    // Constructor to create a new tour
    public Tour(String tourName, TourType type, double minDuration) {
        this.tourName = tourName;
        this.type = type;
        this.minTotalDuration = minDuration;
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
}
