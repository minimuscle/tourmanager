public class Position {

    private int xPos;
    private int yPos;

    //Constructor takes an X and a Y coordinate
    public Position(int xPos, int yPos) {
        this.xPos = xPos;
        this.yPos = yPos;
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
