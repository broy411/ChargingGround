// components/MenuCard.tsx

type MenuItem = {
  name: string;
  description: string;
  price: number;
  calories: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
  image: string;
};

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover rounded-md"
      />

      <h3 className="mt-3 text-lg font-semibold">{item.name}</h3>
      <p className="text-sm text-neutral-600 mt-1">{item.description}</p>

      <div className="mt-3 flex justify-between text-sm">
        <span className="font-medium">${item.price.toFixed(2)}</span>
        <span className="text-neutral-500">{item.calories} cal</span>
      </div>
    </div>
  );
}
