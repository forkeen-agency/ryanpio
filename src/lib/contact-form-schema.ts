import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z.string().trim().min(2, 'Informe seu nome completo.'),
  email: z.string().trim().email('Informe um e-mail válido.'),
  whatsapp: z.string().trim().optional(),
  instagram: z.string().trim().optional(),
  company: z.string().trim().optional(),
  businessStage: z.string().trim().optional(),
  teamSize: z.string().trim().optional(),
  offerings: z.string().trim().optional(),
  idealClient: z.string().trim().optional(),
  projectNeed: z.string().trim().optional(),
  revenue: z.string().trim().optional(),
  timeline: z.string().trim().optional(),
  referral: z.string().trim().optional(),
  challenge: z
    .string()
    .trim()
    .min(10, 'Conte um pouco mais sobre o desafio da marca.'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function contactFormFromFormData(formData: FormData): ContactFormValues {
  const value = (key: keyof ContactFormValues) => {
    const raw = formData.get(key);
    if (raw == null || typeof raw !== 'string') return '';
    return raw;
  };

  return {
    fullName: value('fullName'),
    email: value('email'),
    whatsapp: value('whatsapp') || undefined,
    instagram: value('instagram') || undefined,
    company: value('company') || undefined,
    businessStage: value('businessStage') || undefined,
    teamSize: value('teamSize') || undefined,
    offerings: value('offerings') || undefined,
    idealClient: value('idealClient') || undefined,
    projectNeed: value('projectNeed') || undefined,
    revenue: value('revenue') || undefined,
    timeline: value('timeline') || undefined,
    referral: value('referral') || undefined,
    challenge: value('challenge'),
  };
}
