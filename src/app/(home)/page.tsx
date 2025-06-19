import Image from "next/image";
import Header from "../_components/header";
import { WelcomeText } from "../_components/welcome-text";
import { HomeButtons } from "../_components/home-buttons";

export default function WelcomePage() {
  return (
    <div className="flex flex-col flex-1 text-foreground overflow-x-hidden">
      <Header />
      <div className="fixed inset-0 z-0">
        <Image
          src="https://img.freepik.com/fotos-gratis/visao-3d-do-planeta-terra_23-2150499233.jpg?semt=ais_hybrid&w=740"
          data-ai-hint="institute building"
          fill
          style={{ objectFit: "cover" }}
          alt="Map Background"
          priority
          className="opacity-60 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background backdrop-blur-sm"></div>
      </div>

      <div className="relative h-[calc(60vh-4rem)] w-full flex items-center justify-center shrink-0">
        <div className="relative z-10 text-center p-4">
          <WelcomeText />
        </div>
      </div>

      <div className="relative flex-grow bg-background flex flex-col items-center justify-center p-6 md:p-8 -mt-12 md:-mt-16 z-20 rounded-t-[2rem] md:rounded-t-[3rem] shadow-2xl pt-16 md:pt-24">
        <div className="flex flex-col items-center w-full max-w-4xl mb-12">
          <HomeButtons />
        </div>
      </div>
    </div>
  );
}
