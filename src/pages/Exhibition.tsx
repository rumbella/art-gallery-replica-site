import React from 'react';
import { Link } from 'react-router-dom';

const Exhibition = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-6 left-6 z-50">
        <Link
          to="/"
          className="flex items-center gap-3 text-white backdrop-blur-sm bg-black/20 px-6 py-3 rounded-full hover:bg-black/30 transition-all duration-300"
        >
          <span className="text-xl font-light">⟵</span>
          <span className="text-sm font-light tracking-wider">BACK</span>
        </Link>
      </div>

      <div className="container mx-auto px-6 py-20">
        {/* Swiss design grid structure */}
        <div className="max-w-6xl mx-auto">
          {/* Top border */}
          <div className="border-t border-foreground/20 mb-12"></div>
          
          {/* Main content grid */}
          <div className="grid grid-cols-12 gap-8">
            {/* Left column with vertical border */}
            <div className="col-span-12 md:col-span-3 border-r border-foreground/20 pr-8">
              <div className="sticky top-24">
                <div className="border-l-4 border-primary pl-6">
                  <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-2">Artist</p>
                  <h1 className="text-2xl font-light mb-6">Giacomo Piussi</h1>
                </div>
                <div className="border-t border-foreground/20 pt-6 mt-6">
                  <p className="text-sm text-muted-foreground mb-1">Born in Udine</p>
                  <p className="text-sm text-muted-foreground mb-1">July 5, 1967</p>
                  <p className="text-sm text-muted-foreground">Lives and works in Florence, Italy</p>
                </div>
              </div>
            </div>

            {/* Right content area */}
            <div className="col-span-12 md:col-span-9 pl-0 md:pl-8">
              <div className="border-b border-foreground/20 pb-8 mb-12">
                <h2 className="text-sm font-mono uppercase tracking-wider text-primary mb-2">Biography</h2>
              </div>

              <section className="mb-16">
                <div className="border-l-2 border-primary/30 pl-8 mb-12">
                  <h2 className="text-2xl font-mono uppercase tracking-wider text-primary mb-8">Solo Shows</h2>
                </div>
                
                <div className="space-y-12">
                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2025</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Le mani sui fianchi, Palazzo del Pegaso, Firenze</p>
                      </div>
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Friends of Friends, Robin Rice gallery, Hudson, NY, USA</p>
                      </div>
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Living the dream, Carver Hill Gallery, Camden, Maine, USA</p>
                      </div>
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">People I know, 22 Muse gallery, Antwerpen, BE</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2024</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Palace, Raab Galerie, Berlino, DE</p>
                      </div>
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Solid Ground; Carver Hill Gallery, Camden, Maine, USA</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2023</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Daylight; Robin Rice Gallery; New York City; USA</p>
                      </div>
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">L'ordine delle cose, viaggio in Italia; Palazzo pretorio, a cura di Lorenzo Nannelli, Certaldo, FI</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2022</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Perfect Day, Raab Galerie, Berlino, DE</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2021</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Ancora tu; Galleria C2, Firenze</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2018</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Camere con vista; a cura di Ivan Quaroni, Galleria Susanna Orlando; Pietrasanta LU</p>
                      </div>
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">L'uomo universale; Chiesa dei santi Lorentino e Pergentino, Arezzo</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2014</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Il mondo è grande; a cura di Luigi Di Corato, Museo della terracotta di Petroio, Trequanda, SI</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2013</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Part One; Galleria Alessandro Bagnai; Firenze</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2010</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Il giardino delle delizie, a cura di Chiara Guidi; galleria Susanna Orlando; Forte dei Marmi, LU</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2009</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Still, a cura di Niccolò Mancuso; Cinema Visionario, Udine</p>
                      </div>
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Persone, Animali, Cose; Galleria Andrea Ciani; Genova</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2008</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Giungla; Galleria One Piece; Roma</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2004</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Flux; Villa Romana; Firenze</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2002</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">l'educazione Sentimentale; a cura di Luigi Di Corato; Galleria Poggiali e Forconi; Firenze</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">1999</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Galatea; a cura di Chiara Guidi; Galleria Alessandro Bagnai; Siena</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">1998</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Beau Geste; a cura di Luigi Di Corato, Museo d'Arte Contemporanea, Santa Sofia, Forlì</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">1997</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Flipper, a cura di Chiara Guidi, Galleria Diecidue, Milano</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="border-l-2 border-primary/30 pl-8 mb-12">
                  <h2 className="text-2xl font-mono uppercase tracking-wider text-primary mb-8">Group Shows</h2>
                </div>
                
                <div className="space-y-12">
                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2025</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Der mensch und der wolf; Raab gallerie, Berlin, DE</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2024</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Solid ground, Carver Hill Gallery, Camden, Maine, USA</p>
                      </div>
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Oh du fröliche, Raab Galerie, Berlin, DE</p>
                      </div>
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">22Muse, 22 Muse gallery, Antwerp, BE</p>
                      </div>
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Fleurs Fiori Flowers, Raab Galerie, Berlin, DE</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2023</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Frölich, Raab Galerie, Berlino, DE</p>
                      </div>
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Mondo Tondo, Galleria 93; Prato</p>
                      </div>
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">New is always better; Raab, Galerie, Berlino, DE</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2022</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Japan, Raab Galerie, Berlino, DE</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2021</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Spring Salon; Robin Rice Gallery; New York City, USA</p>
                      </div>
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Grand Hotel Orlando; Galleria Susanna Orlando; Pietrasanta, LU</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2018</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Apparizioni; Galleria Alessandro Bagnai; Foiano della Chiana; AR</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2014</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Diptyques, Triptyques, Polyptyques; Artiscope gallery; Bruxelles, BE</p>
                      </div>
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">DR Albert Deluq, Journal d'une collection de province; Gallerie Coullard & Koulinsky, Parigi, FR</p>
                      </div>
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Biennale di Venezia Danza; abitare il mondo, a cura di Virgilio Sieni, video animazioni, Teatro La Fenice, Piccolo Arsenale, Ca' Giustinian, Venezia</p>
                      </div>
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Sprint, MOCA, Montecatini Terme; PT</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2012</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Stanze segrete, disegni animati con Virgilio Tieni; Palazzo Pitti, La Specola, Cango, Firenze</p>
                      </div>
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Uovo performing art festival, con Virgilio Sieni, Teatro Franco Parenti, Milano</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2011</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">54° Biennale di Venezia, Padiglione Italia, Torino</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2008</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Outsider, Galleria Alessandro Bagnai, Firenze</p>
                      </div>
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Monnalisa, Gherardini-Braccialini, Stazione Leopolda, Firenze</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2006</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Walk in, galleria Alessandro Bagnai, Firenze</p>
                      </div>
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Premio Cairo, Palazzo della Permanente, Milano</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-foreground/10 pb-8">
                    <h3 className="text-lg font-mono mb-6 text-accent border-l-4 border-accent pl-4">2000</h3>
                    <div className="grid grid-cols-1 gap-4 pl-8">
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">No Random, Istituto di cultura italiana; Amsterdam, Olanda</p>
                      </div>
                      <div className="border-l border-foreground/20 pl-4">
                        <p className="text-foreground/90">Carissimi Artisti, Galleria Pananti, Firenze</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Bottom border */}
              <div className="border-b border-foreground/20 mt-16"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;