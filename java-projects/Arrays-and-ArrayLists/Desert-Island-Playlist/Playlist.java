import java.util.ArrayList;

class Playlist {

    public static void main(String[] args) {
        // #2
        ArrayList<String> desertIslandPlaylist;
        desertIslandPlaylist = new ArrayList<String>();
        // #3
        desertIslandPlaylist.add("If We're Honest - Francesca Battistelli");
        desertIslandPlaylist.add("Cosmic Castaway - Electrasy");
        desertIslandPlaylist.add("Starlight - Muse");
        desertIslandPlaylist.add("Till Kingdom Come - Coldplay");
        desertIslandPlaylist.add("Let It Go - Idina Menzel");
        desertIslandPlaylist.add("Somebody That I Used to Know - Gotye");
        desertIslandPlaylist.add("Exo-Politics - Muse");
        desertIslandPlaylist.add("Rise from the Ashes - Quietdrive");
        desertIslandPlaylist.add("In The End - Linkin Park");
        desertIslandPlaylist.add("A Step Too Far - Aida");
        desertIslandPlaylist.add("Supermassive Black Hole - Muse");
        desertIslandPlaylist.add("Give It To Me - Vota");
        desertIslandPlaylist.add("My Ghost - Glass Pear");
        desertIslandPlaylist.add("I Caught Myself - Paramore");
        // #4
        System.out.println(desertIslandPlaylist);
        // Cut It Down
        // #5
        System.out.println(desertIslandPlaylist.size());
        // #6
        desertIslandPlaylist.remove("Let It Go - Idina Menzel");
        desertIslandPlaylist.remove("Exo-Politics - Muse");
        desertIslandPlaylist.remove("Rise from the Ashes - Quietdrive");
        desertIslandPlaylist.remove("In The End - Linkin Park");
        desertIslandPlaylist.remove("A Step Too Far - Aida");
        desertIslandPlaylist.remove("Supermassive Black Hole - Muse");
        desertIslandPlaylist.remove("Give It To Me - Vota");
        desertIslandPlaylist.remove("My Ghost - Glass Pear");
        desertIslandPlaylist.remove("I Caught Myself - Paramore");
        System.out.println(desertIslandPlaylist.size());
        System.out.println(desertIslandPlaylist);

        // Swap Songs
        // #7 - (Read upcoming steps)

        // #8
        int a = desertIslandPlaylist.indexOf("Starlight - Muse");
        int b = desertIslandPlaylist.indexOf("Till Kingdom Come - Coldplay");
        String tempA = "Starlight - Muse";
        desertIslandPlaylist.set(a, "Till Kingdom Come - Coldplay");
        System.out.println(desertIslandPlaylist);
        desertIslandPlaylist.set(b, tempA);
        System.out.println(desertIslandPlaylist);


    }

}