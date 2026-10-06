# Frågor om koden

## State-hantering: Hur håller din app reda på vilka uppgifter som finns och om de är klara? Vad händer med gränssnittet när datan uppdateras?

`todos` state håller alla todo uppgifter i form av en array av objekt. Det är `done` egenskapen på varje todo-objekt som håller reda på om en uppgift är klar eller inte. När datan uppdateras med en set-funktion triggar det en React re-render, vilket kör komponent koden igen och uppdaterar gränssnittet med den nya datan.

## Oföränderlighet (Immutability): Varför får man inte ändra en befintlig array direkt med t.ex. .push() i React? Hur gör du istället när du lägger till eller tar bort en uppgift?

När man använder `.push()` på den nuvarande array listan läggs värdet till, men det säger inte till React att datan har uppdaterats (ingen re-render). Även om man anropar set-funktionen fast med samma muterade array kan React missa uppdateringen eftersom det fortfarande är samma array referens. Istället behöver man skapa en ny array, vilket man kan göra genom att spread:a nuvarande todos samt lägga till en ny uppgift i en ny array när man ska lägga till en uppgift, eller använda `.filter()` för att endast spara de todo-objekt som klarar villkoret i en ny array när man tar bort en uppgift.

# Kodgranskning

Koden försöker lägga till en uppgift med `.push()`, men problemet är att den ändrar direkt i befintligt state, så att React inte upptäcker ändringen. Ett bättre sätt är att anropa `setTodos` med en ny array som kopierar befintliga todos med spread operatorn samt lägger till den nya texten på slutet. Funktionen behöver inte heller returnera listan eftersom `setTodos` nu sköter state-uppdateringen.

# Problemlösning & Reflektion

Problemet var att jag var osäker på hur en checkbox skulle styras av om en todo var klarmarkerad eller inte. Jag visste att värdet skulle drivas av `done` på todo objektet, men inte vilket JSX attribut som skulle användas. Jag testade först `value` vilket inte fungerade. Jag frågade därefter AI om vilket attribut som kontrollerar om en checkbox är markerad eller inte, där fick jag svaret `checked`. Vilket hjälpte mig lösa problemet, då jag redan visste hur man sätter ett värde på ett attribut med `={}`.
