public class main {

    public static  void main (String[] args) {

        Admin brendan = new Admin("Brendan", "Grinbergs", "AD123456");
        
        Assistant liam = new Assistant("Liam", "Carnie", "AS123456");
        brendan.printUser(liam);
        liam.printUser(brendan);

    }
}
