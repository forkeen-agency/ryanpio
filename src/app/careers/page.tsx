import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Colaboração',
  description:
    'Como Ryan Pio trabalha com clientes e especialistas em projetos de branding.',
};

export default function CareersPage() {
  return (
    <>
      <section className="hero-padding space-y-18 md:space-y-20 lg:space-y-26">
        <h1 className="container text-center text-5xl md:text-6xl lg:text-7xl">
          Vamos construir algo juntos.
        </h1>

        <div className="bigger-container">
          <div className="relative h-[335px] w-full overflow-hidden md:h-[450px] lg:h-[900px]">
            <Image
              src="/images/about/hero.webp"
              alt="Colaboração em projeto de branding"
              fill
              className="object-cover object-center grayscale"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-padding container grid gap-10 md:grid-cols-2">
        <h2 className="text-4xl">Trabalhando comigo</h2>
        <div className="text-muted-foreground space-y-8 text-lg md:space-y-10">
          <p>
            Ryan Pio é um estúdio solo de branding. Isso significa acesso
            direto, comunicação clara e um ponto de vista consistente — sem
            repasse entre departamentos.
          </p>
          <p>
            Assumo um número limitado de projetos por vez para cada marca
            receber a atenção que merece. O fluxo inclui diagnóstico,
            estratégia, exploração de design, refinamento e entrega de arquivos
            e manuais prontos para uso.
          </p>
          <p>
            Em escopos maiores, colaboro com uma rede enxuta de designers,
            ilustradores e desenvolvedores. Você continua comigo como parceiro
            principal do início ao fim.
          </p>
        </div>
      </section>

      <section className="section-padding container space-y-8">
        <h2 className="text-4xl">Quer colaborar?</h2>
        <p className="text-muted-foreground max-w-2xl text-lg">
          Conte um pouco sobre sua marca, prazo e o que você busca. Respondo com
          os próximos passos e se faz sentido seguirmos juntos.
        </p>
        <Button variant="outline" size="lg" asChild>
          <Link href="/contact">Entrar em contato</Link>
        </Button>
      </section>
    </>
  );
}
