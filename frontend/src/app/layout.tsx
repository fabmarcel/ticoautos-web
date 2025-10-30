export const metadata = {
  title: "TicoAutos",
  description: "Compra y venta de autos usados en Costa Rica",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
}
