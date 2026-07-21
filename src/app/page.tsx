import { DrawProvider } from "@/context/draw-context";
import { PrizeBanner } from "@/components/draw/prize-banner";
import { DrawStage } from "@/components/draw/draw-stage";
import { DrawActionButton } from "@/components/draw/draw-action-button";
import { ControlsBar } from "@/components/draw/controls-bar";
import { WinnerModal } from "@/components/draw/winner-modal";

export default function Home() {
  return (
    <DrawProvider>
      <WinnerModal />
      <div className="relative flex h-dvh flex-col overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 -z-10 retro-dots" />

        <header className="flex flex-col items-center gap-2 px-4 pt-3">
          <h1 className="text-center font-extrabold uppercase tracking-wide text-foreground text-[clamp(2rem,5.5vw,4.25rem)]">
            Apresiasi Emas
          </h1>
          <PrizeBanner />
        </header>

        <main className="flex flex-1 min-h-0 flex-col gap-2 p-4">
          <DrawStage />
          <div className="flex justify-center pb-1">
            <DrawActionButton />
          </div>
        </main>

        <ControlsBar />
      </div>
    </DrawProvider>
  );
}
