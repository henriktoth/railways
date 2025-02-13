# Railways
A Railways egy javascript webalkalmazás, amelyben egy 5x5 vagy 7x7-es pályán, különböző szabályok betartásával egy olyan összefüggő sínhálózatot kell kialakítani, amely minden lehetséges mezőn áthalad. A program a legjobb eredményt elérő játékosok nevét és játékidejét elmenti egy ranglistába.

## A játék működése
Kezdetben a játékosnak ki kell választania a tábla méretét (5x5 vagy 7x7), illetve meg kell adnia a nevét. A játékmenethez részletes leírást kaphat a menüben található "Leírás" gombra kattintva. <br>

<img width="1426" alt="image" src="https://github.com/user-attachments/assets/81247a9c-2427-4036-bc38-9c3e69d17a5e" /> <br>

Ezután a "Játék indítása" gombra kattintva kezdődhet a játék. <br>
A cél egy minden mezőn áthaladó, összefüggő vasútvonalat kiépíteni. Vannak mezők amelyekre bárhogyan elhelyezhetünk síneket, azonban vannak olyanok is amikre megkötésekkel. <br>
A hegy típusú mezőkön csak a kijelölt irányba kanyarodó sínpárt tudunk elhelyezni, a híd típusúra csak a híddal megegyező irányút, a tó típusú mezőkre pedig egyáltalán nem helyezhetünk sínpárt. <br>
<img width="1426" alt="image" src="https://github.com/user-attachments/assets/91572742-34d0-4f92-929c-568a6fc115bc" />


## Irányítás
| Funckió | Irányítás  |
|----------|--------|
| Sínpár elhelyezése és forgatása    | Bal egérgomb     |
| Sínpár kanyarodása | Jobb egérgomb | 
