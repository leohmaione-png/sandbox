import Image from 'next/image';

export function Hero() {
  return (
    <header className="relative overflow-hidden border-b bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Domine o Blues
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Aprenda escalas, licks e técnicas de forma estruturada e intuitiva
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg order-1 lg:order-2">
            <div className="relative aspect-square">
              <Image
                src="/images/hero-guitar.svg"
                alt="Guitar illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
