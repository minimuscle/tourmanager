public class main {

    public static  void main (String[] args) {
        Admin brendan = new Admin("Brendan", "Grinbergs", "AD123456");

        Assistant liam = new Assistant("Liam", "Carnie", "AS12387");

        System.out.println("========== INITIAL TEST ==========");
        liam.printUser();

        System.out.println("========== FIRST ACCOUNT DISABLE ==========");
        brendan.disableAccount(liam);
        System.out.println("========== FIRST ACCOUNT DISABLE ==========");
        brendan.disableAccount(liam);

        System.out.println("========== CHECK ACCOUNT STATUS ==========");
        System.out.println(liam.isAccEnabled());

        System.out.println("========== FIRST ACCOUNT ENABLE ==========");
        brendan.enableAccount(liam);
        System.out.println("========== FIRST ACCOUNT ENABLE ==========");
        brendan.enableAccount(liam);

        System.out.println("========== TEST ADMIN ACCOUNT ==========");
        System.out.println(brendan.getAccType());
        System.out.println(brendan.getEmployID());

    }
}
