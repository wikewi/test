// ==UserScript==
// @name     Servicedesk Toolbox
// @match    https://topdesk.uc-it.vu.nl/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant    GM_addStyle
// @version  1.0
// @updateURL   http://mw-015866.clients.vu.nl/qb/sdtoolbox5.js
// ==/UserScript==
//
/*- The @grant directive is needed to work around a design change
    introduced in GM 1.0.   It restores the sandbox.
*/




const u = new KeyboardEvent("keypress", { bubbles: true });
Object.defineProperty(u, "charCode", {get() { return 85 && 67 ; }, });
const t = new KeyboardEvent("keypress", { bubbles: true });
Object.defineProperty(t, "charCode", {get() { return 84; }, });
const i = new KeyboardEvent("keypress", { bubbles: true });
Object.defineProperty(i, "charCode", {get() { return 73; }, });
const k = new KeyboardEvent("keypress", { bubbles: true });
Object.defineProperty(k, "charCode", {get() { return 75; }, });
const l = new KeyboardEvent("keypress", { bubbles: true });
Object.defineProperty(l, "charCode", {get() { return 76; }, });
const n = new KeyboardEvent("keypress", { bubbles: true });
Object.defineProperty(n, "charCode", {get() { return 78; }, });
const s = new KeyboardEvent("keypress", { bubbles: true });
Object.defineProperty(s, "charCode", {get() { return 83; }, });
const d = new KeyboardEvent("keypress", { bubbles: true });
Object.defineProperty(d, "charCode", {get() { return 68; }, });
const v = new KeyboardEvent("keypress", { bubbles: true });
Object.defineProperty(v, "charCode", {get() { return 86; }, });
const right = new KeyboardEvent("keypress", { bubbles: true });
Object.defineProperty(right, "charCode", {get() { return 38; }, });
const down = new KeyboardEvent("keypress", { bubbles: true });
Object.defineProperty(down, "keyCode", {get() { return 40; }, });
var selection = document.querySelector('div[aria-label="TOPdesk Menu"]');


var myMenu  = $( `
    <menu type="context" id="myFirstContextMenu">
        <menuitem data-bg-color="standaard"  label="Standaard Telefonische melding"></menuitem>
        <menuitem data-bg-color="doorverwijzing" label="Doorwezen naar andere afdeling"></menuitem>
        <menuitem data-bg-color="Status navraag" label="Status navraag"></menuitem>
        <menuitem data-bg-color="Algemene vraag" label="Algemene vraag"></menuitem>
        <menuitem data-bg-color="test" label="test"></menuitem>
    </menu>
` ).appendTo ("body");

$("body").attr ("contextmenu", 'myFirstContextMenu');

myMenu.on ("click", "menuitem", function (zEvent) {
    var targBgColor = $(this).data ("bgColor")  ||  "ERROR";


if (selection != null) {
let frame = document.querySelectorAll('iframe');
let wframe = frame[frame.length- 1];
var binnenkomst = wframe.contentDocument.body.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Soort binnenkomst"]');
var melding = wframe.contentDocument.body.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Soort melding"]');
var impact = wframe.contentDocument.body.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Impact"]');
var urgentie = wframe.contentDocument.body.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Urgentie"]');
var object = wframe.contentDocument.body.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Object ID"]');
var categor = wframe.contentDocument.body.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Categorie"]')
var categori = categor.getAttribute('id');
var categorie = wframe.contentDocument.body.querySelector('input[id="' + CSS.escape(categori) + '"]');
var subc = wframe.contentDocument.body.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Subcategorie"]');
var subca = subc.getAttribute('id');
var subcat = wframe.contentDocument.body.querySelector('input[id="' + CSS.escape(subca) + '"]');
var kort = wframe.contentDocument.body.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Korte omschrijving"]');
} else {
var binnenkomst = document.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Soort binnenkomst"]');
var melding = document.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Soort melding"]');
var impact = document.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Impact"]');
var urgentie = document.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Urgentie"]');
var object = document.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Object ID"]');
var categor = document.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Categorie"]');
var categori = categor.getAttribute('id');
var categorie = document.querySelector('input[id="' + CSS.escape(categori) + '"]');
var subc = document.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Subcategorie"]');
var subca = subc.getAttribute('id');
var subcat = document.querySelector('input[id="' + CSS.escape(subca) + '"]');
var kort = document.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Korte omschrijving"]');
}


    switch (targBgColor) {
        case "standaard":
if (selection != null) {
wframe.contentDocument.body.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Soort binnenkomst"]').dispatchEvent(t);
wframe.contentDocument.body.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Soort melding"]').dispatchEvent(i);
wframe.contentDocument.body.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Impact"]').dispatchEvent(k);
wframe.contentDocument.body.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Object ID"]').dispatchEvent(n);
} else {
document.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Soort binnenkomst"]').dispatchEvent(t);
document.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Soort melding"]').dispatchEvent(i);
document.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Impact"]').dispatchEvent(k);
document.querySelector('input[mangoinfobox="<b>-</b> Vul de volgende informatie in: Urgentie"]').dispatchEvent(l);
document.querySelector('input[value="Geregistreerd"]').dispatchEvent(i);
}
break;
case "doorverwijzing":
binnenkomst.dispatchEvent(t);
melding.dispatchEvent(i);
impact.dispatchEvent(k);
urgentie.dispatchEvent(l);
categorie.dispatchEvent(s);
object.dispatchEvent(n);
kort.value = 'Doorverwijzing';
kort.dispatchEvent(n);
setTimeout(function(){ categorie.dispatchEvent(down);}, 1000);
setTimeout(function(){ subcat.dispatchEvent(d);}, 2000);
break;
case "Status navraag":
binnenkomst.dispatchEvent(t);
melding.dispatchEvent(i);
impact.dispatchEvent(k);
urgentie.dispatchEvent(l);
categorie.dispatchEvent(s);
object.dispatchEvent(n);
kort.value = 'Status navraag';
kort.dispatchEvent(n);
setTimeout(function(){ categorie.dispatchEvent(down);}, 1000);
setTimeout(function(){ subcat.dispatchEvent(s);}, 2000);
break;
case "Algemene vraag":
binnenkomst.dispatchEvent(t);
melding.dispatchEvent(i);
impact.dispatchEvent(k);
urgentie.dispatchEvent(l);
categorie.dispatchEvent(d);
object.dispatchEvent(n);
kort.value = 'Vraag over';
kort.dispatchEvent(n);
setTimeout(function(){ subcat.dispatchEvent(v);}, 3000);
setTimeout(function(){ subcat.dispatchEvent(down);}, 5000);
setTimeout(function(){ subcat.dispatchEvent(down);}, 7000);
break;
        default:
            alert ('<menuitem> "' + targBgColor + '" not wired-in correctly.');
    }
} );
