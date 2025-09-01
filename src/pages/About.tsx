import React from 'react';

const About = () => {
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
                <h2 className="text-3xl tracking-tight text-gray-900 mb-8 border-b border-gray-300 pb-4">About</h2>
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p>Born in 1967 in Udine, lives in Florence. His work develops the idea of substituting the written word with images that is typical of much of the art of non-literate societies of the past.</p>
                  <p>The images are those of a world reduced to its essence, where every element has a function and very little is added to what is needed for the core meaning to be delivered, with a style that is inspired by Early Renaissance art in its clarity of intent: rather than imitating nature in its appearance, there is a reach for the philosophical structure underlying life and relations.</p>
                  <p>The environment and the characters that live within it are the quintessence of ease, peace and self-containment. The figures are gods in their daily Olympus. It is an ideal world that recalls common gestures, a step away from the flow of time and in the same moment, part of contemporary life.</p>
                  <p>The drama, or the lack thereof, is played out in simplified, almost abstract spaces, geometric backgrounds in which self-aware characters inhabit bourgeois interiors or a minimalist wilderness.”.</p>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
