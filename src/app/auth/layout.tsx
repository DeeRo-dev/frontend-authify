"use client";
import AnimatedBackground from "@/components/animated-background/animated-background";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLogin = pathname === "/auth/login";

  return (
    <div className="relative flex h-screen">
      <div className="absolute inset-0 z-0">
      <AnimatedBackground />
      </div>
      <div className="relative z-10 w-1/4 md:w-1/2 flex justify-center items-center text-white pl-6">
      <section className="p-12 h-full w-1/2">
        <h2 className="text-4xl font-bold">Follow me</h2>
        <ul className="mt-4 space-y-2">
        <li>🔗 GitHub</li>
        <li>🔗 LinkedIn</li>
        <li>🔗 Twitter</li>
        <li>🔗 Behance</li>
        </ul>
      </section>
      <section className="h-full items-center justify-end flex w-1/2">
        <div className="mt-8 flex flex-col gap-4">
        <Link
          href="/auth/login"
          className={`px-4 py-2 rounded-tl-full w-32 h-16 justify-center font-semibold items-center flex rounded-bl-full ${
          isLogin ? "bg-white text-purple-600" : "text-white"
          }`}
        >
          Log in
        </Link>
        <Link
          href="/auth/register"
          className={`px-4 py-2 rounded-tl-full w-32 h-16 justify-center font-semibold items-center flex rounded-bl-full ${
          !isLogin ? "bg-white text-purple-600" : "text-white"
          }`}
        >
          Sign up
        </Link>
        </div>
      </section>
      </div>

      {/* Lado Derecho - Dinámico (cambia entre Login/Register) */}
      <div className="relative z-10 w-1/2 flex justify-center items-center">
      {children}
      </div>
    </div>
  );
}
