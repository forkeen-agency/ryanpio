'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CONTACT_FORM } from '@/lib/studio-pio';
import { cn } from '@/lib/utils';

const selectClassName = cn(
  'bg-muted h-10 w-full rounded-sm border border-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none md:text-sm',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
);

function FieldSelect({
  id,
  options,
  placeholder,
}: {
  id: string;
  options: readonly string[];
  placeholder: string;
}) {
  return (
    <select id={id} name={id} className={selectClassName} defaultValue="">
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default function ContactPage() {
  return (
    <section className="hero-padding container max-w-3xl space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl">{CONTACT_FORM.title}</h1>
        <p className="text-muted-foreground text-lg">{CONTACT_FORM.intro}</p>
      </div>

      <form className="space-y-14">
        <fieldset className="space-y-4">
          <legend className="text-lg font-medium">{CONTACT_FORM.sections.contact}</legend>
          <Input name="fullName" placeholder="Nome completo" required />
          <Input name="email" type="email" placeholder="Melhor e-mail" required />
          <Input name="whatsapp" type="tel" placeholder="WhatsApp com DDD (opcional)" />
          <Input name="instagram" placeholder="Instagram da empresa (opcional)" />
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="text-lg font-medium">{CONTACT_FORM.sections.company}</legend>
          <Input name="company" placeholder="Nome da empresa ou do projeto" />
          <div className="space-y-2">
            <Label htmlFor="businessStage">Momento do negócio</Label>
            <FieldSelect
              id="businessStage"
              options={CONTACT_FORM.businessStage}
              placeholder="Selecione"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="teamSize">Tamanho da equipe</Label>
            <FieldSelect
              id="teamSize"
              options={CONTACT_FORM.teamSize}
              placeholder="Selecione"
            />
          </div>
          <Input name="offerings" placeholder="Produtos ou serviços que a empresa oferece (ou vai oferecer)" />
          <Input name="idealClient" placeholder="Cliente que você mais quer atrair" />
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="text-lg font-medium">{CONTACT_FORM.sections.project}</legend>
          <div className="space-y-2">
            <Label htmlFor="projectNeed">O que você precisa</Label>
            <FieldSelect
              id="projectNeed"
              options={CONTACT_FORM.projectNeed}
              placeholder="Selecione"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="revenue">Faturamento mensal</Label>
            <FieldSelect
              id="revenue"
              options={CONTACT_FORM.revenue}
              placeholder="Selecione"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="timeline">Prazo desejado</Label>
            <FieldSelect
              id="timeline"
              options={CONTACT_FORM.timeline}
              placeholder="Selecione"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="referral">Como nos encontrou</Label>
            <FieldSelect
              id="referral"
              options={CONTACT_FORM.referral}
              placeholder="Selecione"
            />
          </div>
          <Textarea
            name="challenge"
            placeholder="Fale sobre a sua empresa e o principal desafio da marca hoje"
            className="min-h-[140px] resize-none"
            required
          />
        </fieldset>

        <Button type="submit" size="lg">
          {CONTACT_FORM.submit}
        </Button>
      </form>
    </section>
  );
}
