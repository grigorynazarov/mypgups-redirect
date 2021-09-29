// ==UserScript==
// @name         MyPGUPS Redirect
// @namespace    mypgupsredirect@github.com
// @version      1.0
// @description  Переадресация на my.pgups.ru при нажатии кнопки Войти
// @author       grigorynazarov
// @match        *://sdo.pgups.ru/mod/forum/discuss.php?d=41150*
// @icon         https://raw.githubusercontent.com/grigorynazarov/mypgups-redirect/main/Firefox/icons/favicon-48.png
// @grant        none
// ==/UserScript==

console.log("Redirecting to my.pgups.ru");
window.location.replace("https://my.pgups.ru/");
