import React from 'react';
import './App.css';

const App = () => {
  // Funktion für die Addition von zwei Zahlen
  const add = (a, b) => a + b;

  // Funktion für die Quadratwurzel einer Zahl
  const squareRoot = (x) => Math.sqrt(x);

  // Funktion zum Generieren einer zufälligen Farbe
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Funktion zum Ändern der Farbe bei Klick
  const changeColorOnClick = () => {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
  };

  // Zufällige Zahl zwischen 1 und 100
  const randomNum = Math.floor(Math.random() * 100) + 1;

  // Aktuelles Datum
  const currentDate = new Date().toLocaleDateString();

  return (
    <div>
      <header>
        <h1 className="text-large" style={{ color: '#ff8800' }}>Willkommen zu ha210524 von Kevin Böhning</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Über Uns</a></li>
            <li><a href="#services">Dienstleistungen</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </nav>
      </header>

      <section id="home">
        <h2>Home</h2>
        <p>Dies ist die Startseite unserer schönen React-Anwendung. Beauftragt von Techstarter. (Verantwortlicher Teacher: Suheib)</p>
        <button onClick={changeColorOnClick}>Hintergrundfarbe ändern</button>
      </section>

      <section id="about">
        <h2>Über Uns</h2>
        <p>Wir sind die Klasse 24-01-ON.</p>
      </section>

      <section id="services">
        <h2>Dienstleistungen</h2>
        <p>Entdecken Sie unsere Dienstleistungen in Zukunft, einschließlich Webdesign, Entwicklung und mehr. (Dauert aber noch da wir noch Lernen)</p>
      </section>

      <section id="contact">
        <h2>Kontakt</h2>
        <p>Kontaktieren Sie uns auf www.techstarter.de</p>
      </section>

      <section id="additional-info">
        <h2>Zusätzliche Informationen</h2>
        <p>Um zusätzliche Informationen zu bekommen wenden Sie sich bitte an das Teaching-Team.</p>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} ha210524. Alle Rechte vorbehalten.</p>
      </footer>

      {/* Mathematische Berechnungen */}
      <h3>Ergebnis der Addition von 5 und 3: {add(5, 3)}</h3>
      <h3>Quadratwurzel von 16: {squareRoot(16)}</h3>

      {/* Zufällige Zahl und aktuelles Datum */}
      <p>Zufällige Zahl zwischen 1 und 100: {randomNum}</p>
      <p>Aktuelles Datum: {currentDate}</p>
    </div>
  );
};

export default App;
