import React from 'react';

const NewsPage = () => {
  const newsItems = [
    {
      title: 'Unsere Stars....',
      image: 'https://www.wiet.at/wp-content/uploads/2022/12/0C1A8558.jpg',
      text: 'Mario, Alexander und Dominik haben im Projektmanagement hervorragende Arbeit geleistet. Durch ihre umsichtige Planung und koordinierte Umsetzung konnten die Projektziele fristgerecht erreicht werden. Sie haben alle relevanten Stakeholder stets informiert und ein offenes Ohr für alle Fragen und Anliegen gehabt. Auch in stressigen Phasen haben sie stets einen kühlen Kopf bewahrt und Lösungen gefunden, um Herausforderungen zu meistern. Insgesamt haben sie damit wesentlich zum Erfolg des Projekts beigetragen.'
    },
    {
      title: 'Automatisierung....',
      image: 'https://www.wiet.at/wp-content/uploads/2019/02/anlagentechnik.png',
      text: 'Mario, Alexander und Dominik haben in der Automatisierungstechnik eine hervorragende Arbeit geleistet. Sie haben das Automatisierungssystem unseres Kunden von Grund auf konzipiert und erfolgreich implementiert. Dabei haben sie eine maßgeschneiderte Lösung entwickelt, die genau auf die Bedürfnisse des Kunden zugeschnitten war. Sie haben innovative Ideen eingebracht und technische Herausforderungen mit Geschick gemeistert. Dank ihres umfassenden Fachwissens und ihrer Erfahrung in der Automatisierungstechnik konnte das Projekt erfolgreich abgeschlossen werden. Mario, Alexander und Dominik haben damit wesentlich zur Optimierung der Produktionsprozesse beigetragen und dem Kunden einen klaren Wettbewerbsvorteil verschafft.'
    },
    {
      title: 'Gebäudetechnik....',
      image: 'https://www.wiet.at/wp-content/uploads/2019/02/gebaeudetechnik.png',
      text: 'Mario, Alexander und Dominik haben in der Gebäudetechnik eine exzellente Arbeit geleistet. Sie haben ein komplexes Gebäudetechnikprojekt geplant, koordiniert und umgesetzt. Dabei haben sie alle relevanten Anforderungen und Vorgaben berücksichtigt und eine innovative, effiziente und nachhaltige Lösung entwickelt. Sie haben die Schnittstelle zwischen den verschiedenen Gewerken erfolgreich koordiniert und so einen reibungslosen Projektablauf gewährleistet. Durch ihr fundiertes Fachwissen und ihre langjährige Erfahrung konnten sie auch unvorhergesehene Probleme schnell und effektiv lösen. Mario, Alexander und Dominik haben damit einen erheblichen Beitrag zur Modernisierung des Gebäudes geleistet und den Nutzern eine komfortable, energieeffiziente und sichere Umgebung geschaffen.'
    },
    {
      title: 'Kältetechnik....',
      image: 'https://www.wiet.at/wp-content/uploads/2019/02/kaeltetechnik.png',
      text: 'Mario, Alexander und Dominik haben bei einem Kunden eine hervorragende Arbeit in der Kältetechnik geleistet. Sie haben eine Kältetechnikanlage geplant, installiert und in Betrieb genommen, die den hohen Anforderungen des Kunden vollumfänglich gerecht wurde. Dabei haben sie die spezifischen Anforderungen der Branche und des Kunden berücksichtigt und eine innovative und zuverlässige Lösung entwickelt. Sie haben die Anlage sorgfältig und effizient installiert, in Betrieb genommen und kontinuierlich überwacht, um eine optimale Leistung und Energieeffizienz sicherzustellen. Dank ihrer Expertise und Erfahrung konnten Mario, Alexander und Dominik auch bei der Instandhaltung und Wartung der Anlage einen herausragenden Service bieten. Sie haben damit wesentlich zur Zufriedenheit des Kunden und zur Steigerung seiner Produktivität beigetragen.'
    }
  ];

  const numberOfCols = 2; // Anzahl der Spalten
  const numberOfRows = Math.ceil(newsItems.length / numberOfCols); // Anzahl der Zeilen
  const gridTemplateColumns = `repeat(${numberOfCols}, minmax(0, 1fr))`; // CSS für die Anzahl der Spalten

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-900">Was gibt es neues.....</h1>
        <div className={`grid grid-cols-1 gap-8 sm:grid-cols-${numberOfCols} sm:gap-6`} style={{ gridTemplateColumns }}>
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden news-item">
              <img src={item.image} alt={item.title} className="w-full h-48 object-contain news-item-image" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-blue-900">{item.title}</h2>
                <p className="text-gray-700">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
