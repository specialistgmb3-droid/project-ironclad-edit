import React, { useEffect } from 'react';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceSchemaData {
  name: string;
  description: string;
  category?: string;
  priceRange?: string;
  image?: string;
}

export interface ArticleSchemaData {
  title: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}

export interface SEOHeadProps {
  /** Kept for page-level compatibility; titles/descriptions are rendered server-side in each route's head(). */
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  serviceData?: ServiceSchemaData;
  articleData?: ArticleSchemaData;
  locationName?: string;
}

export const BASE_URL = 'https://ironcladcommercialfloors.ca';
export const DEFAULT_IMAGE = `${BASE_URL}/IRONCLAD-COMMERCIAL-FLOORS.jpg`;

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': `${BASE_URL}/#business`,
  additionalType: 'https://schema.org/FlooringContractor',
  name: 'IRONCLAD COMMERCIAL FLOORS',
  legalName: 'Ironclad Commercial Flooring Solutions Ltd.',
  description:
    'Commercial flooring contractor in Vancouver, BC. Concrete polishing, industrial epoxy coatings, carpet tile, luxury vinyl and subfloor preparation, available 24/7.',
  url: BASE_URL,
  logo: `${BASE_URL}/IRONCLAD-COMMERCIAL-FLOORS.jpg`,
  image: DEFAULT_IMAGE,
  telephone: '+1-604-540-3999',
  email: 'info@ironcladcommercialfloors.ca',
  priceRange: '$$',
  currenciesAccepted: 'CAD',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer, Cheque, Invoicing',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '783 E 60th Ave',
    addressLocality: 'Vancouver',
    addressRegion: 'BC',
    postalCode: 'V5X 2A5',
    addressCountry: 'CA'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.2158341,
    longitude: -123.088378
  },
  hasMap:
    'https://www.google.com/maps?q=Ironclad+Commercial+Floors+783+E+60th+Ave+Vancouver+BC+V5X+2A5',
  sameAs: [
    'https://www.facebook.com/ironcladcommercialfloors',
    'https://www.linkedin.com/company/ironcladcommercialfloors',
    'https://www.instagram.com/ironcladcommercialfloors'
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    }
  ],
  areaServed: [
    { '@type': 'City', name: 'Vancouver' },
    { '@type': 'City', name: 'Burnaby' },
    { '@type': 'City', name: 'New Westminster' },
    { '@type': 'City', name: 'Coquitlam' },
    { '@type': 'City', name: 'Port Coquitlam' },
    { '@type': 'City', name: 'Richmond' },
    { '@type': 'City', name: 'Surrey' }
  ]
};

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'Ironclad Commercial Floors',
  url: BASE_URL,
  publisher: { '@id': `${BASE_URL}/#business` }
};

/**
 * Renders structured data (JSON-LD) only.
 * Title, description, canonical, Open Graph and Twitter tags are rendered
 * server-side by each route's head() so crawlers see them in the HTML source.
 */
export const SEOHead: React.FC<SEOHeadProps> = ({
  canonicalPath = '/',
  ogImage = DEFAULT_IMAGE,
  breadcrumbs,
  faqs,
  serviceData,
  articleData,
  locationName
}) => {
  useEffect(() => {
    const fullCanonicalUrl = canonicalPath.startsWith('http')
      ? canonicalPath
      : `${BASE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

    const injectSchema = (id: string, schemaObj: object) => {
      let scriptEl = document.getElementById(id) as HTMLScriptElement | null;
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = id;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schemaObj);
    };

    const removeSchema = (id: string) => {
      document.getElementById(id)?.remove();
    };

    const localSchema = locationName
      ? {
          ...LOCAL_BUSINESS_SCHEMA,
          '@id': `${fullCanonicalUrl}#business`,
          name: `IRONCLAD COMMERCIAL FLOORS - ${locationName}`,
          description: `Commercial flooring contractor serving ${locationName}, BC. Concrete polishing, industrial epoxy, commercial carpet tile and vinyl flooring, available 24/7.`
        }
      : LOCAL_BUSINESS_SCHEMA;
    injectSchema('schema-localbusiness', localSchema);
    injectSchema('schema-website', WEBSITE_SCHEMA);

    if (breadcrumbs && breadcrumbs.length > 0) {
      injectSchema('schema-breadcrumbs', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.name,
          item: item.path.startsWith('http') ? item.path : `${BASE_URL}${item.path}`
        }))
      });
    } else {
      removeSchema('schema-breadcrumbs');
    }

    if (faqs && faqs.length > 0) {
      injectSchema('schema-faq', {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer }
        }))
      });
    } else {
      removeSchema('schema-faq');
    }

    if (serviceData) {
      injectSchema('schema-service', {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceData.name,
        description: serviceData.description,
        serviceType: serviceData.category || 'Commercial Flooring',
        provider: { '@id': `${BASE_URL}/#business` },
        areaServed: LOCAL_BUSINESS_SCHEMA.areaServed,
        image: serviceData.image || ogImage,
        url: fullCanonicalUrl
      });
    } else {
      removeSchema('schema-service');
    }

    if (articleData) {
      injectSchema('schema-article', {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: articleData.title,
        description: articleData.description,
        image: articleData.image || ogImage,
        datePublished: articleData.datePublished || '2026-08-01',
        dateModified: articleData.dateModified || '2026-08-23',
        author: {
          '@type': 'Person',
          name: articleData.authorName || 'Ironclad Commercial Floors'
        },
        publisher: { '@id': `${BASE_URL}/#business` },
        mainEntityOfPage: { '@type': 'WebPage', '@id': fullCanonicalUrl }
      });
    } else {
      removeSchema('schema-article');
    }
  }, [canonicalPath, ogImage, breadcrumbs, faqs, serviceData, articleData, locationName]);

  return null;
};
