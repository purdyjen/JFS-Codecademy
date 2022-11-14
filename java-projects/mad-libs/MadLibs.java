public class MadLibs {
    /*
     * Your description here
     */
    public static void main(String[] args) {
        String name1 = "Jenna";
        String adjective1 = "chipper";
        String adjective2 = "great";
        String adjective3 = "happy";
        String verb1 = "dance";
        String noun1 = "cat";
        String noun2 = "mice";
        String noun3 = "drums";
        String noun4 = "dog";
        String noun5 = "Kool-Aid";
        String noun6 = "duck";
        String name2 = "Melissa";
        int number = 3745;
        String place1 = "England";

        // The template for the story
        String story = "This morning " + name1 + " woke up feeling " + adjective1 + ". 'It is going to be a "
                + adjective2 + " day!' Outside, a bunch of " + noun1 + "s were protesting to keep " + noun2
                + " in stores. They began to " + verb1 + " to the rhythm of the " + noun3 + ", which made all the "
                + noun4 + "s very " + adjective3 + ". Concerned, " + name1 + " texted " + name2 + ", who flew " + name1
                + " to " + place1 + " and dropped " + name1 + " in a puddle of frozen " + noun5 + ". " + name1
                + " woke up in the year " + number + ", in a world where " + noun6 + "s ruled the world.";

        System.out.println(story);
    }
}
