package InheritanceAndPolymorphism;

public class SinoTibetan extends Language {

    public SinoTibetan(String name, int num) {
        super(name, num, "Asia", "subject-object-verb");

        if (this.name.contains("Chinese")) {
            this.wordOrder = "subject-verb-object";
        }
    }
}
