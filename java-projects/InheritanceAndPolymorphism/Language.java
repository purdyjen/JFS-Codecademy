package InheritanceAndPolymorphism;

public class Language {

    protected String name;
    protected int numSpeakers;
    protected String regionsSpoken;
    protected String wordOrder;

    public Language(String langName, int langNum, String langRegions, String langOrder) {
        name = langName;
        numSpeakers = langNum;
        regionsSpoken = langRegions;
        wordOrder = langOrder;
    }

    public void getInfo() {
        System.out.println(name + " is spoken by " + numSpeakers + " people mainly in " + regionsSpoken + ".");
        System.out.println("The language follows the word order: " + wordOrder + ".");
    }

    public static void main(String[] args) {
        Language spanish = new Language("Spanish", 555000000, "Spain, Latin America, and Equatorial Guinea",
                "subject-verb-object");
        spanish.getInfo();

        Mayan tzeltal = new Mayan("Tzeltal", 445856);
        tzeltal.getInfo();

        SinoTibetan mandarin = new SinoTibetan("Mandarin Chinese", 920000000);
        mandarin.getInfo();
        SinoTibetan burmese = new SinoTibetan("Burmese", 33000000);
        burmese.getInfo();
    }

}
