public class Location {
    /* add new locations to the set of locations: a location should be
    specified by its name, x-y coordinates, description, and the
    min. time to be spent on the location (the time depends on the length
    of the description, as the robot will “pronounce” it using text-to-voice
    feature),
    edit existing locations (name, x-y coordinates, description, min. time),
    copy existing locations,
    REMOVE existing locations */

    private String name;
    private Position position;
    private String description;
    private double minDuration;

    public Location(String name, String description, Position position, double minDuration) {
        this.name = name;
        this.description = description;
        this.minDuration = minDuration;
        this.position = position;
    }

    // Getter methods
    public String getName() {
        return name;
    }

    public double getMinDuration() {
        return minDuration;
    }

    public String getDescription() {
        return description;
    }

    // Setter methods
    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setMinDuration(double minDuration) {
        this.minDuration = minDuration;
    }
}
