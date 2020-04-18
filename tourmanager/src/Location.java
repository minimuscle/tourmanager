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
    //coords
    private String description;
    private double minDuration;

    public Location(String name, String description, double minDuration) {
        this.name = name;
        this.description = description;
        this.minDuration = minDuration;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getMinDuration() {
        return minDuration;
    }

    public void setMinDuration(double minDuration) {
        this.minDuration = minDuration;
    }
}
