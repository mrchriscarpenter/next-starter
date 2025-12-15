import Image from "next/image";
import Link from "next/link";

async function getBunInfo() {
  return {
    version: Bun.version,
    revision: Bun.revision,
  };
}

export default async function Home() {
  const bunInfo = await getBunInfo();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 antialiased">
      <div className="w-full max-w-md">
        <div className="relative grid h-[550px] max-h-5/6 grid-rows-[auto_1fr_auto] overflow-hidden rounded-2xl border border-border/50 bg-card/80 text-card-foreground shadow-2xl backdrop-blur-xl">
          <div className="relative h-[250px] w-full overflow-hidden">
            <Image
              alt="Bun + Next.js"
              className="h-full w-full object-cover object-center"
              height={250}
              priority
              src="/header.webp"
              width={400}
            />
            <div className="absolute top-3 right-3 rounded-md bg-zinc-800/75 px-2.5 py-1.5 font-medium text-white text-xs shadow-2xl backdrop-blur-sm">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 animate-pulse rounded-full bg-[#39FF14] shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                <span>Bun {bunInfo.version}</span>
              </div>
              {bunInfo.revision && (
                <a
                  className="mt-0.5 pl-[18px] font-mono text-[10px] opacity-90 transition-opacity hover:opacity-100"
                  href={`https://github.com/oven-sh/bun/releases/tag/bun-v${bunInfo.version}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {bunInfo.revision.slice(0, 8)}
                </a>
              )}
            </div>
          </div>

          <div className="overflow-hidden px-4">
            <div className="flex min-h-full flex-col items-center justify-center py-6">
              <div className="w-full space-y-3 text-center">
                <div>
                  <h1
                    className="font-bold text-2xl text-card-foreground leading-tight tracking-tight"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Welcome to Next.js
                  </h1>
                  <p className="pb-2 font-medium text-muted-foreground text-sm tracking-wide">
                    Powered by Bun {"\u2764\uFE0F"}
                  </p>
                </div>
                <div className="border-border/30 border-t pt-2">
                  <p className="mx-auto mt-2 max-w-sm font-regular text-muted-foreground/90 text-sm leading-relaxed">
                    Edit{" "}
                    <code className="mx-0.5 rounded-xs bg-zinc-200 px-1 py-0.5 text-[11px] dark:bg-zinc-800">
                      app/page.tsx
                    </code>{" "}
                    to see HMR in action.
                    <br />
                    Visit{" "}
                    <Link
                      className="font-medium text-foreground/80 underline underline-offset-2 transition-colors hover:text-foreground"
                      href="/stats"
                    >
                      /stats
                    </Link>{" "}
                    for server-side info, or explore{" "}
                    <a
                      className="font-medium text-foreground/80 underline underline-offset-2 transition-colors hover:text-foreground"
                      href="https://bun.com/docs/runtime/bun-apis"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Bun&apos;s APIs
                    </a>
                    .<br />
                    <br />
                    Ready to deploy? Check out our{" "}
                    <a
                      className="font-medium text-foreground/80 underline underline-offset-2 transition-colors hover:text-foreground"
                      href="https://bun.com/docs/guides/deployment/vercel"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      deployment guides
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 pb-6">
            <div className="pt-6">
              <Link
                className="block w-full rounded-lg bg-foreground px-4 py-2 text-center font-medium text-background text-sm transition-opacity hover:opacity-90"
                href="/stats"
              >
                View Server Stats →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
