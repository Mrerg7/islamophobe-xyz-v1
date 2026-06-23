export const SITE = {
  name: 'islamophobe.xyz',
  title: 'Islamophobe.xyz | All Generations Must Reject Sharia Law — Without Patience, Remorse, or Apologies',
  description:
    'Previous generations rejected fascism and communism without apology. Sharia deserves the same clarity. Every living generation has a duty to reject it — without patience, without remorse, and with zero apologies.',
  url: 'https://islamophobe.xyz',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'United States',
  googleSiteVerification: '1uAq4UX8awhYMcv3Oih8-rhyddLqt-BrGUCWSF3Esnw',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: 'b898a16d-4ed1-44f6-b8fc-d9ec5f042800',
  secondaryImageId: '5cafa138-5431-4b54-acd2-507077324f00',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);
export const SECONDARY_IMAGE = cfImageUrl(CF_IMAGES.secondaryImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('islamophobe.xyz Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring islamophobe.xyz.\n\nIntended use:\nBudget range:\n\nThank you.')}`;
