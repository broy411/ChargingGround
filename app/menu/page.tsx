import { menu } from "@/lib/menuData";
import MenuCard from "@/components/MenuCard";

export default function MenuPage() {
  const sections = [
    { id: "breakfast", title: "Breakfast" },
    { id: "bowls", title: "Bowls" },
    { id: "snacks", title: "Snacks" },
    { id: "smoothies", title: "Smoothies" },
    { id: "drinks", title: "Drinks" },
  ];
              

  return (
    <section className="py-10 md:py-14">
      <div className="container-page">
        <h1 className="text-3xl md:text-4xl font-bold">Menu</h1>
        <p className="mt-2 text-neutral-700">
          Nutrient-dense options made fast. Prices include tax.
        </p>

        <nav className="mt-6 flex flex-wrap gap-2">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-4 py-2 rounded-full border text-sm hover:bg-neutral-50"
            >
              {s.title}
            </a>
          ))}
        </nav>

        {sections.map((s) => (
          <div key={s.id} id={s.id} className="mt-10">
            <h2 className="text-2xl font-semibold">{s.title}</h2>
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {menu[s.id as keyof typeof menu].map((item) => (
                <MenuCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
