export default function AboutPage() {
        return (
          <section className="py-10 md:py-14">
            <div className="container-page grid lg:grid-cols-2 gap-10">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Our Story</h1>
                <p className="mt-4 text-neutral-700">
                  The Charging Ground began with a simple observation: students spend
                  long hours in classes, labs, and at the athletic facilities — but
                  nutritious, convenient food wasn’t always close by. We set out to fix that.
                </p>
                <p className="mt-3 text-neutral-700">
                  We’re a student-run, health-focused grab-and-go café committed to
                  whole ingredients, balanced options, and clear nutrition. Whether
                  you need a post-workout protein boost or a quick bite between lectures,
                  we’ve got your back.
                </p>
                <div className="mt-6 rounded-2xl border p-6 bg-neutral-50">
                  <h3 className="font-semibold">Values</h3>
                  <ul className="mt-3 list-disc pl-5 space-y-1 text-neutral-700">
                    <li>Healthy-first menus with transparent ingredients</li>
                    <li>Fast service without sacrificing quality</li>
                    <li>Friendly, student-centered hospitality</li>
                    <li>Sustainable packaging and responsible sourcing</li>
                  </ul>
                </div>
              </div>
      
              <div className="rounded-2xl border p-8 bg-white shadow-soft">
                <h3 className="font-semibold text-lg">Location & Hours</h3>
                <p className="mt-2 text-neutral-700">
                  Joyce Cummings Center (JCC), Tufts University
                </p>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border p-4">
                    <div className="font-medium">Weekdays</div>
                    <div className="text-neutral-700">Mon–Fri • 8:00a – 6:00p</div>
                  </div>
                  <div className="rounded-xl border p-4">
                    <div className="font-medium">Weekends</div>
                    <div className="text-neutral-700">Pop-ups • Follow our IG</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-neutral-600">
                  Hours may adjust during exams/holidays.
                </p>
              </div>
            </div>
          </section>
        );
      }
      