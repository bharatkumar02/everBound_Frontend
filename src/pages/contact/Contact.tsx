import {
  MessageCircle,
  Mail,
  Phone,
  Truck,
  RefreshCw,
  Gift,
  CreditCard,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  const categories = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Shipping & Delivery",
      desc: "Track your gift's journey",
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Returns & Exchanges",
      desc: "Our 30-day 'Love it' policy",
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Gift Services",
      desc: "Wrapping and personalized notes",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payments & Pricing",
      desc: "Secure checkout & billing",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. Search Hero */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 font-serif text-4xl md:text-5xl">
            How can we help you celebrate?
          </h1>
        </div>
      </section>

      {/* 2. Quick Topic Categories */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="group rounded-2xl border border-slate-100 p-8 text-left transition-all hover:border-amber-400 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-white">
                {cat.icon}
              </div>
              <h3 className="mb-1 text-lg font-semibold">{cat.title}</h3>
              <p className="text-sm text-slate-500">{cat.desc}</p>
            </button>
          ))}
        </div>
      </section>

      {/* 3. Contact Methods & Form */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-3">
        {/* Left: Direct Contact Info */}
        <div className="space-y-8 lg:col-span-1">
          <div>
            <h2 className="mb-4 font-serif text-3xl">Get in Touch</h2>
            <p className="mb-8 text-slate-600">
              Whether you're curious about a product or need help with an
              existing order, the everBound team is here for you.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-slate-100 p-3">
                <MessageCircle className="h-6 w-6 text-slate-700" />
              </div>
              <div>
                <p className="font-medium">Live Chat</p>
                <p className="text-sm text-slate-500 italic">
                  Response time: ~5 mins
                </p>
                <button className="mt-1 flex items-center gap-1 text-sm font-semibold text-amber-600">
                  Start Chat <ExternalLink className="h-3 w-3" />
                </button>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-slate-100 p-3">
                <Mail className="h-6 w-6 text-slate-700" />
              </div>
              <div>
                <p className="font-medium">Email Support</p>
                <p className="text-sm text-slate-500">support@everbound.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-slate-100 p-3">
                <Phone className="h-6 w-6 text-slate-700" />
              </div>
              <div>
                <p className="font-medium">Call Us</p>
                <p className="text-sm text-slate-500">+1 (800) 123-BOUND</p>
                <p className="mt-1 text-xs text-slate-400">
                  Mon-Fri: 9am - 6pm EST
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm lg:col-span-2">
          <form
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-slate-200 p-3 transition-all outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Email Address
              </label>
              <input
                type="email"
                className="w-full rounded-xl border border-slate-200 p-3 transition-all outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-700">
                Order Number (Optional)
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-slate-200 p-3 transition-all outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                placeholder="#EB-12345"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-700">
                How can we help?
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-slate-200 p-3 transition-all outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                placeholder="Tell us about your gifting needs..."
              ></textarea>
            </div>
            <button className="rounded-xl bg-slate-900 py-4 font-medium text-white shadow-lg shadow-slate-200 transition-colors hover:bg-slate-800 md:col-span-2">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* 5. Bottom Trust Banner */}
      <section className="border-t border-slate-100 py-12 text-center text-slate-500">
        <p className="text-sm italic">
          "Our goal is 100% gift-giving satisfaction."
        </p>
      </section>
    </div>
  );
}
