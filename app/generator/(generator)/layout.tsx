import Background from "@/app/ui/background";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background />
      <main className="relative z-10">{children}</main>
    </div>
  );
}
