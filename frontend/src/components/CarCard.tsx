type Car = {
  id: string;
  title: string;
  price: number;
  year: number;
  brand: string;
  model: string;
  mileage?: number;
  image?: string;
  location?: string;
};

export default function CarCard({ car }: { car: Car }) {
  return (
    <article className="rounded-2xl border p-4 shadow-sm hover:shadow-md transition">
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
        {car.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={car.image} alt={car.title} className="h-full w-full object-cover" />
        ) : null}
      </div>
      <h3 className="mt-3 text-lg font-semibold">{car.title}</h3>
      <p className="text-sm text-gray-600">
        {car.brand} {car.model} • {car.year}
        {car.mileage ? ` • ${car.mileage.toLocaleString()} km` : ""}
      </p>
      <p className="mt-2 text-xl font-bold">₡ {car.price.toLocaleString("es-CR")}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-gray-500">{car.location ?? "Costa Rica"}</span>
        <a
          className="rounded-xl border px-3 py-1 text-sm hover:bg-gray-50"
          href={`https://wa.me/50688888888?text=Hola%2C%20me%20interesa%20${encodeURIComponent(car.title)}`}
          target="_blank"
        >
          WhatsApp
        </a>
      </div>
    </article>
  );
}
