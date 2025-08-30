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
        <div className="max-w-4xl mx-auto prose prose-invert">
          <div className="mb-12">
            <p className="text-lg text-muted-foreground mb-2">Born in Udine on July 5, 1967</p>
            <p className="text-lg text-muted-foreground">Lives and works in Florence, Italy</p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-light mb-8 text-primary">Solo Shows</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2025</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Le mani sui fianchi, Palazzo del Pegaso, Firenze</li>
                  <li>Friends of Friends, Robin Rice gallery, Hudson, NY, USA</li>
                  <li>Living the dream, Carver Hill Gallery, Camden, Maine, USA</li>
                  <li>People I know, 22 Muse gallery, Antwerpen, BE</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2024</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Palace, Raab Galerie, Berlino, DE</li>
                  <li>Solid Ground; Carver Hill Gallery, Camden, Maine, USA</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2023</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Daylight; Robin Rice Gallery; New York City; USA</li>
                  <li>L'ordine delle cose, viaggio in Italia; Palazzo pretorio, a cura di Lorenzo Nannelli, Certaldo, FI</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2022</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Perfect Day, Raab Galerie, Berlino, DE</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2021</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Ancora tu; Galleria C2, Firenze</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2018</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Camere con vista; a cura di Ivan Quaroni, Galleria Susanna Orlando; Pietrasanta LU</li>
                  <li>L'uomo universale; Chiesa dei santi Lorentino e Pergentino, Arezzo</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2014</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Il mondo è grande; a cura di Luigi Di Corato, Museo della terracotta di Petroio, Trequanda, SI</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2013</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Part One; Galleria Alessandro Bagnai; Firenze</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2010</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Il giardino delle delizie, a cura di Chiara Guidi; galleria Susanna Orlando; Forte dei Marmi, LU</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2009</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Still, a cura di Niccolò Mancuso; Cinema Visionario, Udine</li>
                  <li>Persone, Animali, Cose; Galleria Andrea Ciani; Genova</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2008</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Giungla; Galleria One Piece; Roma</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2004</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Flux; Villa Romana; Firenze</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2002</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>l'educazione Sentimentale; a cura di Luigi Di Corato; Galleria Poggiali e Forconi; Firenze</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">1999</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Galatea; a cura di Chiara Guidi; Galleria Alessandro Bagnai; Siena</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">1998</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Beau Geste; a cura di Luigi Di Corato, Museo d'Arte Contemporanea, Santa Sofia, Forlì</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">1997</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Flipper, a cura di Chiara Guidi, Galleria Diecidue, Milano</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-light mb-8 text-primary">Group Shows</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2025</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Der mensch und der wolf; Raab gallerie, Berlin, DE</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2024</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Solid ground, Carver Hill Gallery, Camden, Maine, USA</li>
                  <li>Oh du fröliche, Raab Galerie, Berlin, DE</li>
                  <li>22Muse, 22 Muse gallery, Antwerp, BE</li>
                  <li>Fleurs Fiori Flowers, Raab Galerie, Berlin, DE</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2023</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Frölich, Raab Galerie, Berlino, DE</li>
                  <li>Mondo Tondo, Galleria 93; Prato</li>
                  <li>New is always better; Raab, Galerie, Berlino, DE</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2022</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Japan, Raab Galerie, Berlino, DE</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2021</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Spring Salon; Robin Rice Gallery; New York City, USA</li>
                  <li>Grand Hotel Orlando; Galleria Susanna Orlando; Pietrasanta, LU</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2018</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Apparizioni; Galleria Alessandro Bagnai; Foiano della Chiana; AR</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2014</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Diptyques, Triptyques, Polyptyques; Artiscope gallery; Bruxelles, BE</li>
                  <li>DR Albert Deluq, Journal d'une collection de province; Gallerie Coullard & Koulinsky, Parigi, FR</li>
                  <li>Biennale di Venezia Danza; abitare il mondo, a cura di Virgilio Sieni, video animazioni, Teatro La Fenice, Piccolo Arsenale, Ca' Giustinian, Venezia</li>
                  <li>Sprint, MOCA, Montecatini Terme; PT</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2012</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Stanze segrete, disegni animati con Virgilio Tieni; Palazzo Pitti, La Specola, Cango, Firenze</li>
                  <li>Uovo performing art festival, con Virgilio Sieni, Teatro Franco Parenti, Milano</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2011</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>54° Biennale di Venezia, Padiglione Italia, Torino</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2008</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Outsider, Galleria Alessandro Bagnai, Firenze</li>
                  <li>Monnalisa, Gherardini-Braccialini, Stazione Leopolda, Firenze</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2006</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Walk in, galleria Alessandro Bagnai, Firenze</li>
                  <li>Premio Cairo, Palazzo della Permanente, Milano</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">2000</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>No Random, Istituto di cultura italiana; Amsterdam, Olanda</li>
                  <li>Carissimi Artisti, Galleria Pananti, Firenze</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;