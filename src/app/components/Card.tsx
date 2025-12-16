
export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-gray-200 h-26 py-4 px-4 ">{children}</div>
  );
}
