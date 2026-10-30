'use client';

import { useActionState } from 'react';

import { submitContactForm, type ContactFormState } from '@/app/contact/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CONTACT_FORM } from '@/lib/studio-pio';
import { cn } from '@/lib/utils';

const initialState: ContactFormState = {
  ok: false,
  message: '',
};

const selectClassName = cn(
  'bg-muted h-10 w-full rounded-sm border border-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none md:text-sm',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
);

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="text-destructive text-sm" role="alert">
      {message}
    </p>
  );
}

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
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  return (
    <section className="hero-padding container max-w-3xl space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl">{CONTACT_FORM.title}</h1>
        <p className="text-muted-foreground text-lg">{CONTACT_FORM.intro}</p>
      </div>

      {state.message ? (
        <p
          role="status"
          className={cn(
            'rounded-sm border px-4 py-3 text-sm',
            state.ok
              ? 'border-foreground/15 bg-muted text-foreground'
              : 'border-destructive/30 bg-destructive/5 text-destructive',
          )}
        >
          {state.message}
        </p>
      ) : null}

      <form
        key={state.ok ? 'sent' : 'draft'}
        action={formAction}
        className="space-y-14"
      >
        <fieldset className="space-y-4" disabled={pending}>
          <legend className="text-lg font-medium">
            {CONTACT_FORM.sections.contact}
          </legend>
          <div className="space-y-2">
            <Input name="fullName" placeholder="Nome completo" required />
            <FieldError message={state.fieldErrors?.fullName} />
          </div>
          <div className="space-y-2">
            <Input name="email" type="email" placeholder="Melhor e-mail" required />
            <FieldError message={state.fieldErrors?.email} />
          </div>
          <Input name="whatsapp" type="tel" placeholder="WhatsApp com DDD (opcional)" />
          <Input name="instagram" placeholder="Instagram da empresa (opcional)" />
        </fieldset>

        <fieldset className="space-y-4" disabled={pending}>
          <legend className="text-lg font-medium">
            {CONTACT_FORM.sections.company}
          </legend>
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
          <Input
            name="offerings"
            placeholder="Produtos ou serviços que a empresa oferece (ou vai oferecer)"
          />
          <Input name="idealClient" placeholder="Cliente que você mais quer atrair" />
        </fieldset>

        <fieldset className="space-y-4" disabled={pending}>
          <legend className="text-lg font-medium">
            {CONTACT_FORM.sections.project}
          </legend>
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
          <div className="space-y-2">
            <Textarea
              name="challenge"
              placeholder="Fale sobre a sua empresa e o principal desafio da marca hoje"
              className="min-h-[140px] resize-none"
              required
            />
            <FieldError message={state.fieldErrors?.challenge} />
          </div>
        </fieldset>

        <Button type="submit" size="lg" disabled={pending}>
          {pending ? 'Enviando…' : CONTACT_FORM.submit}
        </Button>
      </form>
    </section>
  );
}
