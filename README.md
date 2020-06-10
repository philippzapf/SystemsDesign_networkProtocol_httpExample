# Network Protocols - HTTP request-response example

Ein kleines Beispiel, um das request-response Konzept des HTTP Protocols besser zu verstehen.

Im Gegensatz zu IP und TCP, die sich überwiegend auf das Senden und Empfangen von Daten beschränken, bietet HTTP mithilfe von Objekten (oder Properties) die Möglichkeit eine Business-Logik zu implementieren.

## Erster Schritt
Öffne ein Terminal, navigiere zum Ordner mit den Code-Files mit cd "Pfad-Name", starte den Server mit "node server.js"

## Zweiter Schritt - GET
Öffne ein weiteres Terminal, navigiere zum gleichen Ordner, tippe "curl localhost: 3000/hello" >> GET request im Server

## Dritter Schritt - POST
tippe "curl --header 'content-type: application/json' localhost:3000/hello --data '{"foo": "bar"}' >> POST request im Server
