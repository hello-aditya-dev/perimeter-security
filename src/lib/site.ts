export const site = {
  /**
   * TEMPLATE NOTE: Replace every value below with the real company's
   * brand, domain and contact details before deploying.
   */
  name: "Perimeter",
  legalName: "Perimeter Security, Inc.",
  tagline: "Security that stays ahead of the threat.",
  description:
    "Perimeter is the unified security operations platform for detection, cloud security, identity and DevSecOps — protect every workload, detect every threat.",
  url: "https://perimeter-security.vercel.app",
  email: "hello@example.com",
  securityEmail: "security@example.com",
  location: "San Francisco · London · Singapore",
  statusUrl: "/security#status",
};

export type NavChild = { label: string; href: string; desc?: string };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const nav: NavItem[] = [
  { label: "Platform", href: "/platform" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        label: "Threat Detection",
        href: "/solutions/threat-detection",
        desc: "Real-time detection, EDR/XDR and threat hunting",
      },
      {
        label: "Cloud Security",
        href: "/solutions/cloud-security",
        desc: "CNAPP, posture management and workload protection",
      },
      {
        label: "DevSecOps",
        href: "/solutions/devsecops",
        desc: "Secure the pipeline from commit to cloud",
      },
      {
        label: "Compliance",
        href: "/compliance",
        desc: "Audit-ready evidence for SOC 2, ISO, HIPAA and more",
      },
    ],
  },
  { label: "Customers", href: "/customers" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog", href: "/blog", desc: "Research, guidance and product notes" },
      { label: "Case Studies", href: "/case-studies", desc: "Outcomes from security teams" },
      { label: "Integrations", href: "/integrations", desc: "Cloud, CI/CD, SIEM and ticketing" },
      { label: "Trust & Security", href: "/security", desc: "How we secure Perimeter itself" },
    ],
  },
];

export const footerColumns: { title: string; links: NavChild[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "Threat Detection", href: "/solutions/threat-detection" },
      { label: "Cloud Security", href: "/solutions/cloud-security" },
      { label: "DevSecOps", href: "/solutions/devsecops" },
      { label: "Compliance", href: "/compliance" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Customers", href: "/customers" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Contact", href: "/contact" },
      { label: "Trust & Security", href: "/security" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Resource Library", href: "/resources" },
      { label: "Legal", href: "/legal" },
    ],
  },
];
