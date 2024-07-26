import java.util.Scanner;

public class EnergyBillCalculator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get customer details
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        System.out.print("Enter your address: ");
        String address = scanner.nextLine();

        // Get usage details
        System.out.print("Enter electricity usage (in kWh): ");
        double electricityUsage = scanner.nextDouble();
        System.out.print("Enter gas usage (in units): ");
        double gasUsage = scanner.nextDouble();

        // Check if using green energy
        System.out.print("Do you use solar energy? (yes/no): ");
        String solarResponse = scanner.next();
        EnergyBill bill;

        // Create appropriate bill object
        if (solarResponse.equalsIgnoreCase("yes")) {
            System.out.print("Enter solar energy contribution (in kWh): ");
            double solarContribution = scanner.nextDouble();
            bill = new GreenEnergyBill(name, address, electricityUsage, gasUsage, solarContribution);
        } else {
            bill = new EnergyBill(name, address, electricityUsage, gasUsage);
        }

        // Display the bill
        System.out.println("\n" + bill);
    }
}
