public class TourType {

    /* edit the set of tour types –
    add new types, REMOVE the types that are
    unnecessary, change the type label */

    private String label;

    // Constructor for a tour type, only takes one parameter to get the label/name of the type
    public TourType(String label) {
        this.label = label;
    }

    // Get label(name) of tour type
    public String getLabel() {
        return label;
    }

    // Set a label(name) for the tour type
    public void setLabel(String label) {
        this.label = label;
    }
}
