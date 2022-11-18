public class Droid {
    String name;
    int batteryLevel;

    public Droid(String droidName) {
        name = droidName;
        batteryLevel = 100;
    }

    public void performTask(String task) {
        System.out.println("Codey is performing task: " + task);
        batteryLevel -= 10;
    }

    public void energyReport() {
        System.out.println(name + "'s battery level is: " + batteryLevel + "%");
    }

    public String toString() {
        return "Hello, I'm the droid: " + name;
    }

    public static void batteryTransfer(Droid droid1, Droid droid2, int amount) {
        droid1.batteryLevel += amount;
        droid2.batteryLevel -= amount;
        System.out.println(droid2.name + " transferred some energy to " + droid1.name);
    }

    public static void main(String[] args) {
        Droid codey = new Droid("Codey");
        Droid becca = new Droid("Becca");
        codey.performTask("Dancing");
        codey.energyReport();
        becca.performTask("Reading");
        becca.performTask("Washing dishes");
        becca.performTask("Doing laundry");
        becca.performTask("Sweeping the floor");
        becca.performTask("Vacuuming");
        becca.energyReport();
        batteryTransfer(becca, codey, 10);
        becca.energyReport();
        codey.energyReport();
    }
}