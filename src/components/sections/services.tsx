import Link from 'next/link';

import {
  BrandIdentityIcon,
  DiamondShapesIcon,
  DropletIcon,
  LogoDesignIcon,
} from '@/components/icons/service-icons';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

const services = [
  {
    slug: 'logo-design',
    icon: LogoDesignIcon,
    title: 'Design de logo',
    description:
      'Logotipos e wordmarks simples, memoráveis e versáteis — alinhados aos valores da sua marca e ao público que você quer alcançar.',
  },
  {
    slug: 'brand-identity',
    icon: BrandIdentityIcon,
    title: 'Identidade visual',
    description:
      'Sistemas completos — cores, tipografia, patterns e manuais — para a marca ser consistente em cada ponto de contato.',
  },
  {
    slug: 'rebranding',
    icon: DropletIcon,
    title: 'Rebranding',
    description:
      'Atualize um visual datado com uma identidade moderna que respeita sua história e fala com o público de hoje.',
  },
  {
    slug: 'icon-design',
    icon: DiamondShapesIcon,
    title: 'Design de ícones',
    description:
      'Ícones e marcas de apoio que estendem a identidade em apps, marketing e produto — claros e coerentes.',
  },
];

export const Services = () => {
  return (
    <section
      className={cn(
        'section-padding container',
        'grid gap-5 md:grid-cols-2 md:gap-x-6 md:gap-y-9',
      )}
    >
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <Card key={index} className="bg-muted border-none">
            <CardHeader>
              <Icon className="size-9" />
            </CardHeader>

            <CardContent className="space-y-6">
              <CardTitle className="text-2xl">{service.title}</CardTitle>
              <CardDescription className="max-w-lg">
                {service.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={`/services/${service.slug}`}>
                <Button variant="outline" size="lg">
                  Saiba mais
                </Button>
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </section>
  );
};
