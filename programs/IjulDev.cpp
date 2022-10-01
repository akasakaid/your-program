#include <iostream>

using namespace std;

int main() {
    float a, b;
    int operation;
    char lagi = 'y';
    cout << "\n";
    cout << "      \x1b[38;5;46m██████╗ █████╗ ██╗      ██████╗██╗   ██╗\n";
    cout << "     ██╔════╝██╔══██╗██║     ██╔════╝╚██╗ ██╔╝\n";
    cout << "     ██║     ███████║██║     ██║      ╚████╔╝ \n";
    cout << "     ██║     ██╔══██║██║     ██║       ╚██╔╝\n";
    cout << "     ╚██████╗██║  ██║███████╗╚██████╗   ██║\n";
    cout << "      ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝   ╚═╝   \n";
    cout << "              \x1b[38;5;231mKalkulator Sederhana by \x1b[38;5;208mIjulDev\n\n";

    while (lagi == 'y')
    {
        cout << "    \x1b[38;5;46m╔═║ \x1b[38;5;231mPilih Menu \x1b[38;5;46m║══════════════════════════╗\n\n";

        cout << "     [\x1b[38;5;231m 1 \x1b[38;5;46m] \x1b[38;5;231mPenjumlahan     \x1b[38;5;46m[\x1b[38;5;231m 3 \x1b[38;5;46m] \x1b[38;5;231mPerkalian\n";
        cout << "     \x1b[38;5;46m[\x1b[38;5;231m 2 \x1b[38;5;46m] \x1b[38;5;231mPengurangan     \x1b[38;5;46m[\x1b[38;5;231m 4 \x1b[38;5;46m] \x1b[38;5;231mPembagian\n\n";

        cout << "    \x1b[38;5;46m╚═════════════════════════════════════════╝\n\n";

        cout << "     [\x1b[38;5;231m * \x1b[38;5;46m] \x1b[38;5;231mPilih : ";
        cin >> operation;
        cout << "     \x1b[38;5;46m[\x1b[38;5;231m * \x1b[38;5;46m] \x1b[38;5;231mAngka Pertama : ";
        cin >> a;
        cout << "     \x1b[38;5;46m[\x1b[38;5;231m * \x1b[38;5;46m] \x1b[38;5;231mAngka Kedua : ";
        cin >> b;
        cout << "\n";

        cout << "     \x1b[38;5;46m═════════════════════════════════════════\n\n";

        switch (operation)
        {
        case 1:
            cout << "     [\x1b[38;5;231m * \x1b[38;5;46m] \x1b[38;5;231mHasilnya Adalah : " << a + b << endl;
            cout << endl;
            break;
        
        case 2:
            cout << "     [\x1b[38;5;231m * \x1b[38;5;46m] \x1b[38;5;231mHasilnya Adalah : " << a - b << endl;
            cout << endl;
            break;
        
        case 3:
            cout << "     [\x1b[38;5;231m * \x1b[38;5;46m] \x1b[38;5;231mHasilnya Adalah : " << a * b << endl;
            cout << endl;
            break;
        
        case 4:
            cout << "     [\x1b[38;5;231m * \x1b[38;5;46m] \x1b[38;5;231mHasilnya Adalah : " << a / b << endl;
            cout << endl;
            break;
        
        }

        cout << "     Mau lagi? (y/n) : ";
        cin >> lagi;
        cout << endl;
    }

    return 0;
}