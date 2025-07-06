export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jvad",
    "jobTitle": "Full-Stack Developer",
    "description": "Full-stack developer specializing in React, Next.js, and modern web technologies",
    "url": "https://jvad.dev",
    "sameAs": [
      "https://github.com/jvadebossan",
      "https://linkedin.com/in/jvadebossan",
      "https://twitter.com/jvadebossan"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Web Development",
      "UI/UX Design",
      "Mobile App Development"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-27-99802-2214",
      "contactType": "customer service",
      "email": "jvdebossan@gmail.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Jvad Portfolio",
    "url": "https://jvad.dev",
    "description": "Full-stack developer portfolio showcasing web development projects and services",
    "author": {
      "@type": "Person",
      "name": "Jvad"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://jvad.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jvad Development",
    "url": "https://jvad.dev",
    "logo": "https://jvad.dev/logo.svg",
    "description": "Professional web development services specializing in React, Next.js, and modern web technologies",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-27-99802-2214",
      "contactType": "customer service",
      "email": "jvdebossan@gmail.com"
    },
    "sameAs": [
      "https://github.com/jvadebossan",
      "https://linkedin.com/in/jvadebossan"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 