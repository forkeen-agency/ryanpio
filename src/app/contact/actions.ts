'use server';

import { Resend } from 'resend';

import { CONTACT_EMAIL } from '@/lib/constants';
import {
  contactFormFromFormData,
  contactFormSchema,
} from '@/lib/contact-form-schema';

export type ContactFormState = {
  ok: boolean;
  message: string;
  fieldErrors?: Partial<Record<string, string>>;
};

const initialFieldErrors = undefined;

function formatField(label: string, value?: string) {
  if (!value?.trim()) return '';
  return `<tr><td style="padding:4px 12px 4px 0;vertical-align:top;color:#666;">${label}</td><td style="padding:4px 0;">${escapeHtml(value)}</td></tr>`;
}

function escapeHtml(text: string) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function buildEmailHtml(data: ReturnType<typeof contactFormSchema.parse>) {
  const rows = [
    formatField('Nome', data.fullName),
    formatField('E-mail', data.email),
    formatField('WhatsApp', data.whatsapp),
    formatField('Instagram', data.instagram),
    formatField('Empresa / projeto', data.company),
    formatField('Momento do negócio', data.businessStage),
    formatField('Tamanho da equipe', data.teamSize),
    formatField('Produtos ou serviços', data.offerings),
    formatField('Cliente ideal', data.idealClient),
    formatField('O que precisa', data.projectNeed),
    formatField('Faturamento mensal', data.revenue),
    formatField('Prazo desejado', data.timeline),
    formatField('Como nos encontrou', data.referral),
    formatField('Desafio da marca', data.challenge),
  ].filter(Boolean);

  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;line-height:1.5;color:#111;">
<p>Novo formulário de diagnóstico no site Studio Pio.</p>
<table style="border-collapse:collapse;">${rows.join('')}</table>
</body></html>`;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = contactFormSchema.safeParse(contactFormFromFormData(formData));

  if (!parsed.success) {
    const fieldErrors: Partial<Record<string, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === 'string' && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return {
      ok: false,
      message: 'Revise os campos destacados e tente novamente.',
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      message: 'Envio temporariamente indisponível. Escreva para contato@studiopio.com.br.',
      fieldErrors: initialFieldErrors,
    };
  }

  const from = process.env.RESEND_FROM ?? `Studio Pio. <${CONTACT_EMAIL}>`;
  const to = process.env.RESEND_TO ?? CONTACT_EMAIL;

  const resend = new Resend(apiKey);
  const data = parsed.data;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject: `[Diagnóstico] ${data.fullName}${data.company ? ` — ${data.company}` : ''}`,
    html: buildEmailHtml(data),
    text: [
      'Novo formulário de diagnóstico — Studio Pio.',
      '',
      ...Object.entries({
        Nome: data.fullName,
        'E-mail': data.email,
        WhatsApp: data.whatsapp,
        Instagram: data.instagram,
        'Empresa / projeto': data.company,
        'Momento do negócio': data.businessStage,
        'Tamanho da equipe': data.teamSize,
        'Produtos ou serviços': data.offerings,
        'Cliente ideal': data.idealClient,
        'O que precisa': data.projectNeed,
        'Faturamento mensal': data.revenue,
        'Prazo desejado': data.timeline,
        'Como nos encontrou': data.referral,
        'Desafio da marca': data.challenge,
      })
        .filter(([, v]) => v?.trim())
        .map(([k, v]) => `${k}: ${v}`),
    ].join('\n'),
  });

  if (error) {
    console.error('Resend error:', error);
    return {
      ok: false,
      message:
        'Não foi possível enviar agora. Tente de novo ou escreva para contato@studiopio.com.br.',
      fieldErrors: initialFieldErrors,
    };
  }

  return {
    ok: true,
    message:
      'Recebemos seu formulário. Em breve entraremos em contato para marcar a conversa de diagnóstico.',
    fieldErrors: initialFieldErrors,
  };
}
