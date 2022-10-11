package pkgbintang73

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner line = new Scanner(System.in);
        System.out.println("===== Blangko Mahasiswa =====");
        System.out.print("Nama = ");
        String Nama = line.nextLine();
        System.out.print("Nim = ");
        String Nim = line.nextLine();
        System.out.print("Kelas = ");
        String Kelas = line.nextLine();
        System.out.print("Ipk = ");
        String Ipk = line.nextLine();
        System.out.println("\n\n===== BIODATA ===== \nNama = " + Nama + "\nNim = " + Nim + "\nKelas = " + Kelas + "\nIpk = " + Ipk);
    }
}
