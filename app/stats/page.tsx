import Link from "next/link";
import { cpus, totalmem } from "os";

export const dynamic = "force-dynamic";

async function getServerStats() {
  const bunVersion = Bun.version;
  const bunRevision = Bun.revision;
  const cpuUsage = process.cpuUsage();
  const processUptime = process.uptime();

  // Calculate CPU usage percentage to avoid showing falsy cumulative values
  // CPU percentage = (total CPU time / (uptime * number of cores)) * 100
  const numCores = cpus().length;
  const totalCpuTime = (cpuUsage.user + cpuUsage.system) / 1_000_000; // Convert microseconds to seconds
  const cpuPercentage =
    processUptime > 0
      ? Math.min(100, (totalCpuTime / (processUptime * numCores)) * 100)
      : 0;

  const cpuInfo = cpus()[0];

  return {
    bunVersion,
    bunRevision,
    platform: process.platform,
    arch: process.arch,
    pid: process.pid,
    uptime: Math.floor(processUptime),
    cpu: {
      percentage: Math.round(cpuPercentage * 100) / 100,
      cores: numCores,
    },
    environment: {
      cpuModel: cpuInfo?.model || "Unknown",
      totalMemory: totalmem(),
    },
  };
}

function formatUptime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  if (hours > 0) {
    return `${hours}h ${minutes}m ${secs}s`;
  }
  if (minutes > 0) {
    return `${minutes}m ${secs}s`;
  }
  return `${secs}s`;
}

function formatBytes(bytes: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
  });

  const gb = bytes / (1024 * 1024 * 1024);
  if (gb >= 1) {
    return `${formatter.format(gb)} GB`;
  }
  const mb = bytes / (1024 * 1024);
  if (mb >= 1) {
    return `${formatter.format(mb)} MB`;
  }
  const kb = bytes / 1024;
  return `${formatter.format(kb)} KB`;
}

export default async function Stats() {
  const stats = await getServerStats();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 antialiased">
      <div className="w-full max-w-md">
        <div className="relative grid h-[550px] max-h-4/5 grid-rows-[auto_1fr_auto] overflow-hidden rounded-2xl border border-border/50 bg-card/80 text-card-foreground shadow-2xl backdrop-blur-xl">
          <div className="px-8 py-6">
            <div className="space-y-2 py-2 text-center">
              <h1 className="font-semibold text-2xl text-foreground tracking-tight">
                Server Stats
              </h1>
              <p className="-mt-2 font-medium text-lg text-muted-foreground">
                Runtime information
              </p>
            </div>
          </div>

          <div className="overflow-y-auto px-8">
            <div className="space-y-4 border-border/30 border-t pt-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1 text-center">
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">
                    Bun Version
                  </p>
                  <p className="font-medium text-foreground">
                    {stats.bunVersion}
                  </p>
                </div>
                <div className="space-y-1 text-center">
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">
                    Revision
                  </p>
                  <p className="font-medium font-mono text-foreground text-xs">
                    {stats.bunRevision?.slice(0, 8)}
                  </p>
                </div>
                <div className="space-y-1 text-center">
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">
                    Platform
                  </p>
                  <p className="font-medium text-foreground">
                    {stats.platform}
                  </p>
                </div>
                <div className="space-y-1 text-center">
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">
                    Architecture
                  </p>
                  <p className="font-medium text-foreground">{stats.arch}</p>
                </div>
                <div className="space-y-1 text-center">
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">
                    Process ID
                  </p>
                  <p className="font-medium text-foreground">{stats.pid}</p>
                </div>
                <div className="space-y-1 text-center">
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">
                    Uptime
                  </p>
                  <p className="font-medium text-foreground">
                    {formatUptime(stats.uptime)}
                  </p>
                </div>
                <div className="space-y-1 text-center">
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">
                    CPU Cores
                  </p>
                  <p className="font-medium text-foreground">
                    {stats.cpu.cores}
                  </p>
                </div>
                <div className="space-y-1 text-center">
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">
                    CPU Usage
                  </p>
                  <p className="font-medium text-foreground">
                    {stats.cpu.percentage}%
                  </p>
                </div>
              </div>
              <div className="border-border/30 border-t pt-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1 text-center">
                    <p className="text-muted-foreground text-xs uppercase tracking-wide">
                      CPU Model
                    </p>
                    <p className="font-medium text-foreground text-xs">
                      {stats.environment.cpuModel}
                    </p>
                  </div>
                  <div className="space-y-1 text-center">
                    <p className="text-muted-foreground text-xs uppercase tracking-wide">
                      Total Memory
                    </p>
                    <p className="font-medium text-foreground">
                      {formatBytes(stats.environment.totalMemory)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 pb-6">
            <div className="pt-6">
              <Link
                className="block w-full rounded-lg bg-foreground px-4 py-2 text-center font-medium text-background text-sm transition-opacity hover:opacity-90"
                href="/"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
