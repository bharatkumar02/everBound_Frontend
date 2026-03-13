import { Heart, Globe, Sparkles, Users, Gift, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white font-sans text-slate-900">
      {/* 1. Hero Section */}
      <section className="relative flex h-[60vh] items-center justify-center overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=2000"
            alt="Gift wrapping background"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        </div>

        <div className="relative z-10 max-w-4xl px-4 text-center">
          <h1 className="mb-6 font-serif text-5xl font-light md:text-7xl">
            Connecting Hearts, <br />
            <span className="font-normal italic">Everbound</span> by Love.
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            We believe that a gift is more than just an object—it's a bridge
            between souls, a memory in the making, and a testament to the bonds
            we cherish most.
          </p>
        </div>
      </section>

      {/* 2. Our Story Section (Split Layout) */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl">
              The everBound Story
            </h2>
            <p className="leading-relaxed text-slate-600">
              Founded in 2023, everBound began in a small studio with a simple
              realization: in a world moving faster than ever, the moments we
              stop to show appreciation are what truly define us.
            </p>
            <p className="leading-relaxed text-slate-600">
              What started as a curated collection of artisanal finds has grown
              into a global community for thoughtful gift-givers. We don't just
              sell products; we help you curate experiences that resonate long
              after the ribbon is untied.
            </p>
            <div className="flex gap-8 border-t border-slate-100 pt-4">
              <div>
                <p className="font-serif text-3xl text-amber-600">50k+</p>
                <p className="text-sm tracking-tighter text-slate-500 uppercase">
                  Bonds Created
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-amber-600">120+</p>
                <p className="text-sm tracking-tighter text-slate-500 uppercase">
                  Artisan Partners
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800"
              alt="Artisan workspace"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 hidden max-w-[200px] rounded-xl bg-white p-6 shadow-xl lg:block">
              <p className="text-sm font-medium italic">
                "Quality is the only thing that never goes out of style."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values (Icon Grid) */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto mb-16 max-w-7xl text-center">
          <h2 className="mb-4 font-serif text-3xl md:text-4xl">
            What Guides Us
          </h2>
          <div className="mx-auto h-1 w-20 bg-amber-400"></div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Sparkles className="h-8 w-8 text-amber-600" />,
              title: "Curated Quality",
              desc: "Every item is hand-selected and tested for durability and aesthetic beauty.",
            },
            {
              icon: <Globe className="h-8 w-8 text-amber-600" />,
              title: "Eco-Conscious",
              desc: "We use 100% recyclable packaging and prioritize sustainable sourcing.",
            },
            {
              icon: <Heart className="h-8 w-8 text-amber-600" />,
              title: "Deep Connection",
              desc: "Our gifts are designed to spark meaningful conversations and lasting memories.",
            },
            {
              icon: <Users className="h-8 w-8 text-amber-600" />,
              title: "Community First",
              desc: "We support small makers and independent artisans from around the globe.",
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-slate-100 bg-white p-8 transition-colors hover:border-amber-200"
            >
              <div className="mb-4 transition-transform group-hover:scale-110">
                {value.icon}
              </div>
              <h3 className="mb-2 text-xl font-medium">{value.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. The "Everbound" Mission */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Gift className="mx-auto mb-6 h-12 w-12 text-slate-300" />
        <h2 className="mb-8 font-serif text-4xl italic">
          "Our mission is to ensure no milestone goes uncelebrated, and no bond
          remains unspoken."
        </h2>
        <p className="text-slate-500">
          Whether it’s a 'just because' note or a grand anniversary gesture, we
          are here to make your expression of love effortless and extraordinary.
        </p>
      </section>

      {/* 5. Call to Action */}
      <section className="mb-20 px-6">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-900 p-12 text-center md:p-20">
          <div className="absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="mb-6 font-serif text-3xl text-white md:text-5xl">
              Start Your Story Today
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-slate-400">
              Explore our latest collection and find a gift that truly speaks to
              your connection.
            </p>
            <button className="mx-auto flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-slate-900 transition-colors hover:bg-amber-50">
              Browse Collection <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
