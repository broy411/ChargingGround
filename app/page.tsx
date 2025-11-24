import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
            <div>
              <span className="inline-block text-sm tracking-wide uppercase text-tufts-brown">
                Student-run • Healthy • Fast
              </span>
              <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
                Fuel your day at{" "}
                <span className="text-tufts-blue">The Charging Ground</span>
              </h1>
              <p className="mt-4 text-lg text-neutral-700">
                A grab-and-go café serving nutrient-dense smoothies, protein bowls,
                and smart snacks so you can power through classes, practice, and everything in between.
              </p>
              <div className="mt-6 flex gap-3">
                <Link href="/menu" className="btn btn-primary">
                  View Menu
                </Link>
                <Link href="/about" className="btn btn-outline">
                  Our Story
                </Link>
              </div>
              <div className="mt-6 text-sm text-neutral-600">
                Located in the Joyce Cummings Center • Open Mon–Fri, 8am–6pm
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl p-6 md:p-8 bg-gradient-to-br from-tufts-blue/10 via-white to-tufts-brown/10 border border-neutral-200 shadow-soft">
                <ul className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Smoothies", desc: "Fruit-forward + protein boost" },
                    { title: "Power Bowls", desc: "Greens, grains, proteins" },
                    { title: "Yogurt Cups", desc: "Probiotic-rich & fresh" },
                    { title: "Grab Snacks", desc: "Smart carbs for class" }
                  ].map((item) => (
                    <li key={item.title} className="rounded-xl bg-white p-4 border">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-neutral-600">{item.desc}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-neutral-600">
                  Thoughtfully curated by students, for students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-12 md:py-16 bg-neutral-50 border-t">
        <div className="container-page grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Healthy-first",
              copy:
                "Whole ingredients, balanced macros, and transparent nutrition."
            },
            {
              title: "Campus-convenient",
              copy:
                "Right where you are, so you never have to skip a meal again."
            },
            {
              title: "Powered by peers",
              copy:
                "Student-run operation focused on performance and well-being."
            }
          ].map((b) => (
            <div key={b.title} className="bg-white p-6 rounded-2xl border shadow-soft">
              <h3 className="font-semibold text-lg">{b.title}</h3>
              <p className="mt-2 text-neutral-700">{b.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to charge up?
          </h2>
          <p className="mt-3 text-neutral-700">
            Try our top student picks and customize your bowl or smoothie.
          </p>
          <div className="mt-6">
            <Link href="/menu" className="btn btn-primary">
              Explore the Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
