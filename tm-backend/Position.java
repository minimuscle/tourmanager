public class Position {

    private int xPos;
    private int yPos;

    private static final int DEFAULT_COORD = 1;

    //Constructor takes an X and a Y coordinate
    public Position(int xPos, int yPos) {
        if(xPos > 0) {
            this.xPos = xPos;
        } else {
            System.out.println("Invalid xPos, defaulting to xPos = " + DEFAULT_COORD);
            this.xPos = DEFAULT_COORD;
        }

        if(yPos > 0) {
            this.yPos = yPos;
        } else {
            System.out.println("Invalid yPos, defaulting to yPos = " + DEFAULT_COORD);
            this.yPos = DEFAULT_COORD;
        }
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
}
