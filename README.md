# Mathias Portfolio (Portfolio)

### Rozpoczęcie projektu: 29 kwietnia 2021 r.

Celem projektu jest utworzenie profesjonalnej strony autobiograficznej, zawierającej prezentowane w przystępnej formie informacje na temat historii zainteresowań programistycznych, dotychczasowych realizacji (hobbystycznych i komercyjnych), doświadczeń zawodowych i edukacyjnych, a także poznanych technologii. Portfolio powinno zawierać także dane kontaktowe oraz formularz kontaktowy. 

Zarówno etapowy sposób tworzenia projektu, jak i wykorzystywane języki, biblioteki i rozwiązania mają charakter podsumowujący dotychczasowe efekty nauki programowania. Dodatkowo portfolio powinno być reużywalne, tj. zdatne do wykorzystania także przez inne osoby do tworzenia własnych stron-wizytówek, jak również przydatne przy tworzeniu innych projektów z uwagi na zastosowanie odpowiednich praktyk programistycznych.

## Struktura strony

### I. Header.
Nagłówek strony zawiera przede wszystkim jej nawigację (**Navigation**), złożoną z pojedynczych elementów (**NavElement**).

### II. Main.
Właściwa część portfolio zbudowana jest z **bloków** (tagi html ***article***), które z kolei dzielą się na mniejsze części składowe. Powtarzalne segmenty bloków (gł. tzw. **boxy**) są generowane dynamicznie.

 1. Start (**Home**).
 2. O mnie (**About**).
 3. Oś czasu (**Timeline**).
 4. Projekty (**Work**).
 5. Usługi/Technologie (**Services**).
 6. Rekomendacje (**Testimonial**).
 7. Kontakt (**Contact**).

### III. Footer.
Stopka strony zawiera informację o autorze oraz wzmiankę nt. praw autorskich (***copyright***).

## Harmonogram prac

### Stan na dzień 5 maja 2021 r.

 - [x] 1. Stworzenie struktury portfolio typu Single-Page-App (***HTML, CSS, vanilla JavaScript***).
 - [x] 2. Przebudowa HTML pod kątem ***semantyki***.
 - [x] 3. Przebudowa klas CSS zgodnie z metodologią ***BEM***.
 - [x] 4. Instalacja ***React.js*** (Create React App). Usunięcie zbędnych plików.
 - [x] 5. Prosta implementacja dotychczasowego projektu w aplikacji React (komponent App.js).
 - [x] 6. Utworzenie ***komponentów funkcyjnych***:
	 - [x] a) **główne części** (Header, Main, Footer, Navigation <-> NavElement),
	 - [x] b) **bloki** (tagi article),
	 - [x] c) **segmenty bloków** (heading, boxy, form, inne),
	 - [x] d) **komponenty uniwersalne** (Image, Icon, Button)
		 - [x] poprawki składni JSX (typu class -> className),
		 - [x] propsy z walidacją, reużywalność komponentów powtarzalnych.
- [x] 7. Przepisanie CSS na ***SCSS***, podział na pliki według bloków/komponentów.
- [x] 8. Zastąpienie dotychczasowej logiki JavaScript nową, wykorzystującą m. in. ***React Hooks***.
- [x] 9. Dodanie ikon (***react-font-awesome***) oraz Timeline (***react-vertical-timeline-component***).
- [ ] 10. Dynamiczne generowanie treści na stronie.
	- [ ] a) utworzenie plików z danymi (tablice obiektów w katalogu ***data***) - rozwiązanie tymczasowe,
	- [ ] b) wykorzystanie ww. plików do generowania komponentów (zastosowanie m. in. metody ***map()*** oraz ***react-html-parser***),
	- [ ] c) ew. konieczne modyfikacje komponentów.
- [ ] 11. Rozważenie implementacji ***React Router DOM*** w związku z rozrostem aplikacji.
- [ ] 12. Obsługa **formularza** i innych elementów tego rodzaju na stronie.
- [ ] 13. Utworzenie **backendu**. 
