"use client";
export default function ContactPage() {
        return (
          <section className="py-10 md:py-14">
            <div className="container-page grid lg:grid-cols-2 gap-10">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
                <p className="mt-3 text-neutral-700">
                  Have ideas, feedback, or partnership inquiries? We’d love to hear from you.
                </p>
      
                <form
                  className="mt-6 grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thanks! This demo form doesn’t send emails yet.");
                  }}
                >
                  <div className="grid gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      className="rounded-xl border p-3 outline-none focus:ring-2 focus:ring-tufts-blue"
                      placeholder="Your name"
                    />
                  </div>
      
                  <div className="grid gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="rounded-xl border p-3 outline-none focus:ring-2 focus:ring-tufts-blue"
                      placeholder="you@tufts.edu"
                    />
                  </div>
      
                  <div className="grid gap-1.5">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="rounded-xl border p-3 outline-none focus:ring-2 focus:ring-tufts-blue"
                      placeholder="Tell us what’s on your mind"
                    />
                  </div>
      
                  <button className="btn btn-primary" type="submit">
                    Send Message
                  </button>
                </form>
              </div>
      
              <div className="rounded-2xl border p-8 bg-white shadow-soft">
                <h3 className="font-semibold text-lg">Find Us</h3>
                <p className="mt-2 text-neutral-700">
                  Joyce Cummings Center, Tufts University
                </p>
                <div className="mt-4 h-64 rounded-xl border overflow-hidden bg-neutral-100 flex items-center justify-center text-neutral-500">
                  {/* Replace with real map embed when ready */}
                  Map placeholder
                </div>
                <div className="mt-6">
                  <div className="text-sm text-neutral-700">
                    Email: <span className="underline">hello@chargingground.com</span>
                  </div>
                  <div className="text-sm text-neutral-700 mt-1">
                    Instagram: <span className="underline">@chargingground</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      }
      