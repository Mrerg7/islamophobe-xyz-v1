export const SITE_URL = 'https://islamophobe.xyz';
export const HERO_IMAGE =
  'https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/b898a16d-4ed1-44f6-b8fc-d9ec5f042800/public';
export const SECONDARY_IMAGE =
  'https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/5cafa138-5431-4b54-acd2-507077324f00/public';
export const ACQUISITION_EMAIL = 'sales@desertrich.com';

export function acquisitionMailto(subject?: string): string {
  const params = new URLSearchParams({
    subject: subject ?? 'Domain acquisition inquiry: islamophobe.xyz',
    body: 'Hello,\n\nI am interested in acquiring islamophobe.xyz. Please share terms and next steps.\n\nThank you,',
  });
  return `mailto:${ACQUISITION_EMAIL}?${params.toString()}`;
}
