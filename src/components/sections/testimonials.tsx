import Image from 'next/image';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Marquee } from '@/components/ui/marquee';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote:
      'O Ryan nos entregou uma identidade ousada e confiante — simples, memorável e consistente em todas as plataformas.',
    author: 'Robert Evans',
    role: 'Fundador, BankPro',
    image: '/images/testimonials/robert-evans.webp',
  },
  {
    quote:
      'Transformou ideias soltas em uma marca limpa e atemporal. Processo fluido e resultado que temos orgulho de usar em todo lugar.',
    author: 'Anna Peterson',
    role: 'Fundadora, Nextdock',
    image: '/images/testimonials/anna-peterson.webp',
  },
  {
    quote:
      'Escutou nossa história e traduziu isso no design. A nova identidade já impressionou nossos clientes.',
    author: 'David Kim',
    role: 'Diretor, Scalar',
    image: '/images/testimonials/david-kim.webp',
  },
  {
    quote:
      'Precisávamos de um rebrand atual, mas fiel às nossas raízes. Foi exatamente isso — moderno, simples e versátil.',
    author: 'Sofia Martinez',
    role: 'Marketing, Neobase',
    image: '/images/testimonials/sofia-martinez.webp',
  },
  {
    quote:
      'Profissional, cuidadoso e criativo. A identidade já mudou a percepção dos clientes sobre a marca.',
    author: 'James Carter',
    role: 'CEO, Northwind Finance',
    image: '/images/testimonials/james-carter.webp',
  },
];

export const Testimonials = () => {
  return (
    <section className={cn('section-padding space-y-16 md:space-y-18')}>
      <h2 className="container text-4xl">Depoimentos</h2>

      <Marquee pauseOnHover className="[--gap:1.25rem] md:[--gap:1.5rem]">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="group/card w-[310px] justify-between sm:w-[450px]"
          >
            <CardContent className="text-muted-foreground text-lg">
              {testimonial.quote}
            </CardContent>

            <CardFooter className="flex items-center gap-4">
              <Image
                src={testimonial.image}
                alt={testimonial.author}
                width={48}
                height={48}
                className="object-cover grayscale transition-all duration-300 group-hover/card:grayscale-0"
              />
              <div className="flex flex-col gap-0">
                <p className="">{testimonial.author}</p>
                <p className="text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </Marquee>
    </section>
  );
};
