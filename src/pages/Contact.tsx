import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">

          <header className="mb-16">
            <h1 className="text-5xl font-light tracking-wider mb-2">Giacomo Piussi</h1>
            <p className="text-lg text-gray-500">Artist</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-16">
            <main className="md:col-span-8 lg:col-span-9">
              <section className="mb-16">
                <h2 className="text-3xl tracking-tight text-gray-900 mb-8 border-b border-gray-300 pb-4">Contact</h2>

                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p>
                    <strong>Carver Hill Gallery</strong><br />
                    36 BAY VIEW STREET<br />
                    CAMDEN, MAINE 04843<br />
                    207-975-6563 Gallery<br />
                    207-542-9895 Cell.<br />
                    carverhillgallerymaine@gmail.com
                  </p>
                </div>

                <div className="border-b border-gray-300 my-[50px]"></div>

                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p>
                    <strong>22MUSE GALLERY</strong><br />
                    Oudaaan 22<br />
                    2000 Antwerp<br />
                    M +32 467 00 26 27<br />
                    Info@22muse.com
                  </p>
                </div>

                <div className="border-b border-gray-300 my-[50px]"></div>

                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p>
                    <strong>Robin Rice Gallery</strong><br />
                    325 West 11th Street<br />
                    New York, NY 10014<br />
                    Telephone 917 375 6660<br />
                    Robin@robinricegallery.com<br />
                    www.robinricegallery.com
                  </p>
                </div>

                <div className="border-b border-gray-300 my-[50px]"></div>

                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p>
                    <strong>Raab Galerie</strong><br />
                    Goethestrasse 81 d-<br />
                    10623 Berlin.<br />
                    tel:  ++49 +30 261 92 18<br />
                    raab-galerie.de
                  </p>
                </div>

                <div className="border-b border-gray-300 my-[50px]"></div>

                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p>
                    contact mail<br />
                    giacomopiussi@gmail.com
                  </p>
                </div>

              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
