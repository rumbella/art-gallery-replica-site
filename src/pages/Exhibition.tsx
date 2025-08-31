import React from 'react';

const Exhibition = () => {
  const soloShows = [
    { year: '2025', shows: [
      "Le mani sui fianchi, Palazzo del Pegaso, Firenze",
      "Friends of Friends, Robin Rice gallery, Hudson, NY, USA",
      "Living the dream, Carver Hill Gallery, Camden, Maine, USA",
      "People I know, 22 Muse gallery, Antwerpen, BE"
    ]},
    { year: '2024', shows: [
      "Palace, Raab Galerie, Berlino, DE",
      "Solid Ground; Carver Hill Gallery, Camden, Maine, USA"
    ]},
    { year: '2023', shows: [
      "Daylight; Robin Rice Gallery; New York City; USA",
      "L'ordine delle cose, viaggio in Italia; Palazzo pretorio, a cura di Lorenzo Nannelli, Certaldo, FI"
    ]},
    { year: '2022', shows: ["Perfect Day, Raab Galerie, Berlino, DE"]},
    { year: '2021', shows: ["Ancora tu; Galleria C2, Firenze"]},
    { year: '2018', shows: [
      "Camere con vista; a cura di Ivan Quaroni, Galleria Susanna Orlando; Pietrasanta LU",
      "L'uomo universale; Chiesa dei santi Lorentino e Pergentino, Arezzo"
    ]},
    { year: '2014', shows: ["Il mondo è grande; a cura di Luigi Di Corato, Museo della terracotta di Petroio, Trequanda, SI"]},
    { year: '2013', shows: ["Part One; Galleria Alessandro Bagnai; Firenze"]},
    { year: '2010', shows: ["Il giardino delle delizie, a cura di Chiara Guidi; galleria Susanna Orlando; Forte dei Marmi, LU"]},
    { year: '2009', shows: [
      "Still, a cura di Niccolò Mancuso; Cinema Visionario, Udine",
      "Persone, Animali, Cose; Galleria Andrea Ciani; Genova"
    ]},
    { year: '2008', shows: ["Giungla; Galleria One Piece; Roma"]},
    { year: '2004', shows: ["Flux; Villa Romana; Firenze"]},
    { year: '2002', shows: ["l'educazione Sentimentale; a cura di Luigi Di Corato; Galleria Poggiali e Forconi; Firenze"]},
    { year: '1999', shows: ["Galatea; a cura di Chiara Guidi; Galleria Alessandro Bagnai; Siena"]},
    { year: '1998', shows: ["Beau Geste; a cura di Luigi Di Corato, Museo d'Arte Contemporanea, Santa Sofia, Forlì"]},
    { year: '1997', shows: ["Flipper, a cura di Chiara Guidi, Galleria Diecidue, Milano"]},
  ];

  const groupShows = [
    { year: '2025', shows: ["Der mensch und der wolf; Raab gallerie, Berlin, DE"]},
    { year: '2024', shows: [
      "Solid ground, Carver Hill Gallery, Camden, Maine, USA",
      "Oh du fröliche, Raab Galerie, Berlin, DE",
      "22Muse, 22 Muse gallery, Antwerp, BE",
      "Fleurs Fiori Flowers, Raab Galerie, Berlin, DE"
    ]},
    { year: '2023', shows: [
      "Frölich, Raab Galerie, Berlino, DE",
      "Mondo Tondo, Galleria 93; Prato",
      "New is always better; Raab, Galerie, Berlino, DE"
    ]},
    { year: '2022', shows: ["Japan, Raab Galerie, Berlino, DE"]},
    { year: '2021', shows: [
      "Spring Salon; Robin Rice Gallery; New York City, USA",
      "Grand Hotel Orlando; Galleria Susanna Orlando; Pietrasanta, LU"
    ]},
    { year: '2018', shows: ["Apparizioni; Galleria Alessandro Bagnai; Foiano della Chiana; AR"]},
    { year: '2014', shows: [
      "Diptyques, Triptyques, Polyptyques; Artiscope gallery; Bruxelles, BE",
      "DR Albert Deluq, Journal d'une collection de province; Gallerie Coullard & Koulinsky, Parigi, FR",
      "Biennale di Venezia Danza; abitare il mondo, a cura di Virgilio Sieni, video animazioni, Teatro La Fenice, Piccolo Arsenale, Ca' Giustinian, Venezia",
      "Sprint, MOCA, Montecatini Terme; PT"
    ]},
    { year: '2012', shows: [
      "Stanze segrete, disegni animati con Virgilio Tieni; Palazzo Pitti, La Specola, Cango, Firenze",
      "Uovo performing art festival, con Virgilio Sieni, Teatro Franco Parenti, Milano"
    ]},
    { year: '2011', shows: ["54° Biennale di Venezia, Padiglione Italia, Torino"]},
    { year: '2008', shows: [
      "Outsider, Galleria Alessandro Bagnai, Firenze",
      "Monnalisa, Gherardini-Braccialini, Stazione Leopolda, Firenze"
    ]},
    { year: '2006', shows: [
      "Walk in, galleria Alessandro Bagnai, Firenze",
      "Premio Cairo, Palazzo della Permanente, Milano"
    ]},
    { year: '2000', shows: [
      "No Random, Istituto di cultura italiana; Amsterdam, Olanda",
      "Carissimi Artisti, Galleria Pananti, Firenze"
    ]},
  ];

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          
          <header className="mb-16">
            <h1 className="text-5xl font-light tracking-wider mb-2">Giacomo Piussi</h1>
            <p className="text-lg text-gray-500">Artist</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-16">

            <aside className="md:col-span-4 lg:col-span-3">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h2 className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-3">Biography</h2>
                  <p className="text-base text-gray-700">
                    Born in Udine, July 5, 1967.
                    <br />
                    Lives and works in Florence, Italy.
                  </p>
                </div>
              </div>
            </aside>

            <main className="md:col-span-8 lg:col-span-9">
              <section className="mb-16">
                <h2 className="text-3xl tracking-tight text-gray-900 mb-8 border-b border-gray-300 pb-4">Solo Shows</h2>
                <div>
                  {soloShows.map((item) => (
                    <div key={item.year} className="grid grid-cols-1 sm:grid-cols-4 gap-x-6 border-b border-gray-300 py-6">
                      <div className="sm:col-span-1">
                        <h3 className="text-lg text-gray-900 mb-2 sm:mb-0">{item.year}</h3>
                      </div>
                      <div className="sm:col-span-3">
                        <ul className="space-y-2">
                          {item.shows.map((show, index) => (
                            <li key={index} className="text-base text-gray-700">{show}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl tracking-tight text-gray-900 mb-8 border-b border-gray-300 pb-4">Group Shows</h2>
                <div>
                  {groupShows.map((item) => (
                    <div key={item.year} className="grid grid-cols-1 sm:grid-cols-4 gap-x-6 border-b border-gray-300 py-6">
                      <div className="sm:col-span-1">
                        <h3 className="text-lg text-gray-900 mb-2 sm:mb-0">{item.year}</h3>
                      </div>
                      <div className="sm:col-span-3">
                        <ul className="space-y-2">
                          {item.shows.map((show, index) => (
                            <li key={index} className="text-base text-gray-700">{show}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </main>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;