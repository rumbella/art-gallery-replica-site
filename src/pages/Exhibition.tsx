import React from 'react';
import { Link } from 'react-router-dom';

const Exhibition = () => {
  return (
    <div className="min-h-screen font-inter text-black bg-custom-bg">
      <div className="container mx-auto px-6 py-20">
        {/* Swiss design grid structure */}
        <div className="max-w-6xl mx-auto">
          {/* Top border */}
          <div className="mb-12" style={{ borderTop: '4px solid black' }}></div>
          
          {/* Main content grid */}
          <div className="grid grid-cols-12 gap-8">
            {/* Left column with vertical border */}
            <div className="col-span-12 md:col-span-3 pr-8" style={{ borderRight: '4px solid black' }}>
              <div className="sticky top-24">
                <div className="pl-6" style={{ borderLeft: '4px solid black' }}>
                  <p className="text-sm font-mono uppercase tracking-wider text-black/70 mb-2">Artist</p>
                  <h1 className="text-2xl font-light mb-6 text-black">Giacomo Piussi</h1>
                </div>
                <div className="pt-6 mt-6" style={{ borderTop: '4px solid black' }}>
                  <p className="text-sm text-black/70 mb-1">Born in Udine</p>
                  <p className="text-sm text-black/70 mb-1">July 5, 1967</p>
                  <p className="text-sm text-black/70">Lives and works in Florence, Italy</p>
                </div>
              </div>
            </div>

            {/* Right content area */}
            <div className="col-span-12 md:col-span-9 pl-0 md:pl-8">
              <div className="pb-8 mb-12" style={{ borderBottom: '4px solid black' }}>
                <h2 className="text-sm font-mono uppercase tracking-wider text-black mb-2">Biography</h2>
              </div>

              <section className="mb-16">
                <div className="pl-8 mb-12" style={{ borderLeft: '4px solid black' }}>
                  <h2 className="text-2xl font-mono uppercase tracking-wider text-black mb-8">Solo Shows</h2>
                </div>
                
                <div className="space-y-12">
                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2025</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Le mani sui fianchi, Palazzo del Pegaso, Firenze</p>
                      </div>
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Friends of Friends, Robin Rice gallery, Hudson, NY, USA</p>
                      </div>
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Living the dream, Carver Hill Gallery, Camden, Maine, USA</p>
                      </div>
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">People I know, 22 Muse gallery, Antwerpen, BE</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2024</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Palace, Raab Galerie, Berlino, DE</p>
                      </div>
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Solid Ground; Carver Hill Gallery, Camden, Maine, USA</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2023</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Daylight; Robin Rice Gallery; New York City; USA</p>
                      </div>
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">L'ordine delle cose, viaggio in Italia; Palazzo pretorio, a cura di Lorenzo Nannelli, Certaldo, FI</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2022</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Perfect Day, Raab Galerie, Berlino, DE</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2021</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Ancora tu; Galleria C2, Firenze</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2018</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Camere con vista; a cura di Ivan Quaroni, Galleria Susanna Orlando; Pietrasanta LU</p>
                      </div>
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">L'uomo universale; Chiesa dei santi Lorentino e Pergentino, Arezzo</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2014</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Il mondo è grande; a cura di Luigi Di Corato, Museo della terracotta di Petroio, Trequanda, SI</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2013</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Part One; Galleria Alessandro Bagnai; Firenze</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2010</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Il giardino delle delizie, a cura di Chiara Guidi; galleria Susanna Orlando; Forte dei Marmi, LU</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2009</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Still, a cura di Niccolò Mancuso; Cinema Visionario, Udine</p>
                      </div>
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Persone, Animali, Cose; Galleria Andrea Ciani; Genova</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2008</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Giungla; Galleria One Piece; Roma</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2004</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Flux; Villa Romana; Firenze</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2002</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">l'educazione Sentimentale; a cura di Luigi Di Corato; Galleria Poggiali e Forconi; Firenze</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>1999</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Galatea; a cura di Chiara Guidi; Galleria Alessandro Bagnai; Siena</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>1998</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Beau Geste; a cura di Luigi Di Corato, Museo d'Arte Contemporanea, Santa Sofia, Forlì</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>1997</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Flipper, a cura di Chiara Guidi, Galleria Diecidue, Milano</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="pl-8 mb-12" style={{ borderLeft: '4px solid black' }}>
                  <h2 className="text-2xl font-mono uppercase tracking-wider text-black mb-8">Group Shows</h2>
                </div>
                
                <div className="space-y-12">
                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2025</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Der mensch und der wolf; Raab gallerie, Berlin, DE</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2024</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Solid ground, Carver Hill Gallery, Camden, Maine, USA</p>
                      </div>
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Oh du fröliche, Raab Galerie, Berlin, DE</p>
                      </div>
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">22Muse, 22 Muse gallery, Antwerp, BE</p>
                      </div>
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Fleurs Fiori Flowers, Raab Galerie, Berlin, DE</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2023</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Frölich, Raab Galerie, Berlino, DE</p>
                      </div>
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Mondo Tondo, Galleria 93; Prato</p>
                      </div>
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">New is always better; Raab, Galerie, Berlino, DE</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2022</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Japan, Raab Galerie, Berlino, DE</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2021</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Spring Salon; Robin Rice Gallery; New York City, USA</p>
                      </div>
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Grand Hotel Orlando; Galleria Susanna Orlando; Pietrasanta, LU</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2018</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Apparizioni; Galleria Alessandro Bagnai; Foiano della Chiana; AR</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2014</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Diptyques, Triptyques, Polyptyques; Artiscope gallery; Bruxelles, BE</p>
                      </div>
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">DR Albert Deluq, Journal d'une collection de province; Gallerie Coullard & Koulinsky, Parigi, FR</p>
                      </div>
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Biennale di Venezia Danza; abitare il mondo, a cura di Virgilio Sieni, video animazioni, Teatro La Fenice, Piccolo Arsenale, Ca' Giustinian, Venezia</p>
                      </div>
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Sprint, MOCA, Montecatini Terme; PT</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2012</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Stanze segrete, disegni animati con Virgilio Tieni; Palazzo Pitti, La Specola, Cango, Firenze</p>
                      </div>
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Uovo performing art festival, con Virgilio Sieni, Teatro Franco Parenti, Milano</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2011</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">54° Biennale di Venezia, Padiglione Italia, Torino</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2008</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Outsider, Galleria Alessandro Bagnai, Firenze</p>
                      </div>
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Monnalisa, Gherardini-Braccialini, Stazione Leopolda, Firenze</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2006</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Walk in, galleria Alessandro Bagnai, Firenze</p>
                      </div>
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Premio Cairo, Palazzo della Permanente, Milano</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-8" style={{ borderBottom: '4px solid black' }}>
                    <h3 className="text-lg font-mono mb-6 text-black pl-4" style={{ borderLeft: '4px solid black' }}>2000</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">No Random, Istituto di cultura italiana; Amsterdam, Olanda</p>
                      </div>
                      <div className="pl-4" style={{ borderLeft: '4px solid black' }}>
                        <p className="text-black">Carissimi Artisti, Galleria Pananti, Firenze</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Bottom border */}
              <div className="mt-16" style={{ borderBottom: '4px solid black' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;