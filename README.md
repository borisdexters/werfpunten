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
3. Optioneel een foto. Bewaar het punt.
4. Achteraf: **Kopieer verslagtekst** geeft een gestructureerde tekst per zone, klaar voor verwerking.

Weer en bezetting staan als vaste velden bovenaan, omdat die bij werfverslagen doorgaans per
vergadering genoteerd moeten worden.

## Installeren
Open de gepubliceerde URL in **Safari** (iOS) of Chrome (Android) → deel-knop → **Zet op beginscherm**.
Open de app één keer met netwerk; daarna start ze ook zonder bereik.

## Techniek
Eén HTML-bestand, geen afhankelijkheden, geen server. Punten in `localStorage`, foto's in `IndexedDB`,
offline via een service worker met cache-first strategie. Er wordt niets verstuurd: alle gegevens
blijven op het toestel.

## Status
Prototype. Eerste veldtest augustus 2026.
