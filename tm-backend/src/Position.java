
/* Class Position will represent the X and Y coordinates of locations*/

public class Position {

    private int xPos;
    private int yPos;

    private static final int DEFAULT_COORD = 1;

    //Constructor takes an X and a Y coordinate
    public Position(int xPos, int yPos) {
        this.xPos = validateCoordinate(xPos);
        this.yPos = validateCoordinate(yPos);

    }

    // Getter Methods
    public int getXPos() {
        return xPos;
    }

    public int getYPos() {
        return yPos;
    }

    // Setter methods
    public void setXPos(int xPos) {
        if(xPos > 0) {
            this.xPos = xPos;
        } else {
            System.out.println("Y-Coord of " + xPos + " is invalid. Please enter a value greater than 0.");
        }
    }

    public void setYPos(int yPos) {
        if(yPos > 0) {
            this.yPos = yPos;
        } else {
            System.out.println("Y-Coord of " + yPos + " is invalid. Please enter a value greater than 0.");
        }
    }

    // Since X and Y coordinates can't be 0 or less, if and x or y
    //coordinate is less than 1 then the coordinate defaults to 1
    public int validateCoordinate(int pos) {
        int temp;
        if(pos > 0) {
            temp = pos;
        } else {
            System.out.println("Invalid xPos, defaulting to xPos = " + DEFAULT_COORD);
            temp = DEFAULT_COORD;
        }
        return temp;
    }
}
