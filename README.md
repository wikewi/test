# test
toolbox

Hierbij een PAC file waarmee je via de stepstone een proxy opzet voor toegang. De PAC file is ingesteld om alleen verkeer binnen het domein te gebruiken
Voor alle andere sites zal de stepstone niet worden gebruikt.

Stap 1:
Firefox is momenteel de enige browser voor Windows 10 welke eigen Proxy settings gebruikt en niet de globale Windows 10 proxy instelt. 
Voeg deze URL in als URL voor automatische proxy configuratie:

https://raw.githubusercontent.com/wikewi/test/master/vu.pac

Step 2:
Sinds Windows 10 (1903) wellicht ook eerder is SSH ondersteuning ingebouwd. Start daarom cmd.exe en typ het volgende commando:

ssh -D 8888 <vunetID>:ssh.data.vu.nl

Uiteraard kan dit ook via Putty maar op dit momenteel is dat waarschijnlijk het makkelijkst

Bevestig daarna je wachtwoord en je proxy kan worden gebruikt
