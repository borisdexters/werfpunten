# Werfpunten

Kleine web-app om tijdens een werfronde punt voor punt vast te leggen: **zone, vaststelling, foto**.
Werkt offline, installeerbaar op het beginscherm van een telefoon.

## Waarom
Registreren op een werf moet in het gewone gedrag passen: rondlopen, kijken, praten, fotograferen.
Elke handeling die daar bovenop komt — een item zoeken, een formulier openen, een app wisselen —
wordt op de werf overgeslagen. Deze app beperkt zich daarom tot één tik voor de zone, één veld voor
de vaststelling en één knop voor de foto.

## Gebruik
1. Kies de zone bovenaan. Die blijft actief tot je hem wisselt.
2. Typ of dicteer de vaststelling. Begin met `CB:`, `P:` of `LA:` om ze aan een partij toe te wijzen.
3. Optioneel een foto, via **Doc** een scan of document (plan, papier, bon — scan met de scanner van
   Notities of Bestanden, die maakt een PDF), of via **Schets** een losse tekening.
   **Tik op een foto in de lijst om erop te tekenen**: aanduiden wat er aan de hand is, in vier kleuren,
   met ongedaan maken.
4. Bewaar het punt.
   Alleen fotograferen mag ook: **tik later op een punt om de notitie toe te voegen.**
   Vastleggen op de werf, uitschrijven achteraf.
   Een punt verwijderen doe je door het **naar links te vegen**; daarna kan het nog ongedaan gemaakt worden.
5. Achteraf: **Kopieer verslagtekst** geeft een gestructureerde tekst per zone, klaar voor verwerking.

Weer en bezetting staan als vaste velden bovenaan, omdat die bij werfverslagen doorgaans per
vergadering genoteerd moeten worden. **Het weer vult zichzelf in**: de app haalt op basis van je
locatie en het tijdstip de actuele waarneming op, plus de dagcijfers (min/max temperatuur, totale
neerslag, hoogste windsnelheid). Die dagcijfers gaan mee in de export — bruikbaar wanneer achteraf
moet worden beoordeeld of het weer de werken verhinderde. Bron: open-meteo.com, zonder account.

## Installeren
Open de gepubliceerde URL in **Safari** (iOS) of Chrome (Android) → deel-knop → **Zet op beginscherm**.
Open de app één keer met netwerk; daarna start ze ook zonder bereik.

## Contacten
Voeg je vaste gesprekspartners toe met een korte code (bijvoorbeeld `Jan Peeters = JP`). Wie je als
aanwezig aanvinkt, verschijnt als snelknop bij het invoerveld: één tik zet de code voor je vaststelling,
zodat in het verslag zichtbaar blijft wie wat gezegd heeft. De lijst staat alleen op je eigen toestel.

## Techniek
Eén HTML-bestand, geen afhankelijkheden, geen server. Punten in `localStorage`, foto's in `IndexedDB`,
offline via een service worker met cache-first strategie. Er wordt niets verstuurd: alle gegevens
blijven op het toestel.

## Status
Prototype. Eerste veldtest augustus 2026.
