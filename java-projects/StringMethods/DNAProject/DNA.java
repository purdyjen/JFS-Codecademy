package StringMethods.DNAProject;

// This program determines whether or not there is a protein within a strand of DNA
public class DNA {

    public boolean hasProtein(String dna) {
        int start = dna.indexOf("ATG");
        int stop = dna.indexOf("TGA");

        if (start != -1 &&
                stop != -1 &&
                (stop - start) % 3 == 0) {
            String protein = dna.substring(start, stop + 3);
            System.out.println(protein);
            return true;
        } else {
            System.out.println("No protein.");
            return false;
        }

    }

    public static void main(String[] args) {
        DNA d = new DNA();
        String dna1 = "ATGCGATACGCTTGA";
        String dna2 = "ATGCGATACGTGA";
        String dna3 = "ATTAATATGTACTGA";

        d.hasProtein(dna1);
        d.hasProtein(dna2);
        d.hasProtein(dna3);
    }

}
