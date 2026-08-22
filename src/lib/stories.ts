// ============================================================
// Perimeter — social proof, editorial & legal demo content
//
// TEMPLATE NOTE: Every company, person, quote, metric and
// article below is FICTIONAL demonstration content shipped
// with this template. Replace with real, verified data —
// and only publish customer names/quotes with permission.
// ============================================================

/* ---------------- types ---------------- */

export type CaseStudy = {
  company: string;
  industry: string;
  size: string;
  headline: string;
  challenge: string;
  approach: string[];
  metrics: { label: string; before: string; after: string; delta: string }[];
  quote: string;
  name: string;
  role: string;
};

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: number;
  excerpt: string;
  body: PostBlock[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type LegalDoc = {
  slug: string;
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};

/* ---------------- disclaimers ---------------- */

export const CASE_STUDY_DISCLAIMER =
  "Demonstration content. Companies, people, quotes and metrics on this page are fictional examples that illustrate how results can be presented. Never publish customer names or metrics without explicit written permission.";

export const TESTIMONIAL_DISCLAIMER =
  "Illustrative examples. These quotes are placeholders — replace them with genuine, attributed customer testimonials before publishing.";

export const LEGAL_DISCLAIMER =
  "Template notice: the documents in this section are generic placeholder text for demonstration purposes only. They are not legal advice. Have qualified counsel review and replace all legal copy before publishing.";

/* ---------------- case studies ---------------- */

export const caseStudies: CaseStudy[] = [
  {
    company: "Meridian Pay",
    industry: "Fintech · Payments",
    size: "~850 employees",
    headline: "Cutting a 3,100-issue backlog before an acquisition audit",
    challenge:
      "Meridian Pay's vulnerability management program ran on spreadsheets across four disconnected scanners. An acquiring bank's due-diligence review was eight weeks away, and the open critical/high count stood at 3,100 with no reliable owner mapping.",
    approach: [
      "Consolidated SAST, SCA and container findings into a single risk-scored queue",
      "Applied reachability filtering to drop unreachable dependency noise from triage",
      "Routed every finding to code owners via Jira with severity-based fix SLAs",
      "Published a weekly burn-down to the board and the acquirer's security team",
    ],
    metrics: [
      { label: "Open critical & high vulnerabilities", before: "3,100", after: "412", delta: "-86.7%" },
      { label: "Mean time to remediate (critical)", before: "21 days", after: "3 days", delta: "-85.7%" },
      { label: "Asset scan coverage", before: "41%", after: "98%", delta: "+139.0%" },
    ],
    quote:
      "For the first time, the dashboard our board saw on Friday matched what engineers were fixing on Monday morning.",
    name: "Dana Whitfield",
    role: "VP of Engineering",
  },
  {
    company: "BlueRidge Health",
    industry: "Healthcare SaaS",
    size: "~400 employees",
    headline: "HIPAA audit readiness in one quarter instead of four",
    challenge:
      "Evidence collection for HIPAA and SOC 2 consumed two engineers for six weeks per cycle. Access reviews were manual spreadsheets, and PHI access anomalies were discovered weeks late.",
    approach: [
      "Mapped technical safeguards to platform controls with continuous checks",
      "Automated quarterly access reviews against the identity provider",
      "Streamed PHI-access anomalies into on-call rotations with context",
      "Generated auditor evidence packages directly from live control state",
    ],
    metrics: [
      { label: "Audit evidence collection", before: "6 weeks", after: "2 days", delta: "-95.2%" },
      { label: "Critical findings open >30 days", before: "57", after: "0", delta: "-100%" },
      { label: "PHI anomaly detection lag", before: "18 days", after: "<1 hour", delta: "-99.8%" },
    ],
    quote:
      "Our auditors asked how we produced evidence so fast. The honest answer was: we stopped collecting it by hand.",
    name: "Amara Osei",
    role: "Director of Compliance",
  },
  {
    company: "Vantage Retail Group",
    industry: "E-commerce · Retail",
    size: "~2,300 employees",
    headline: "Closing 1,200 cloud misconfigurations during peak season",
    challenge:
      "After a rapid cloud migration, Vantage entered Q4 with public storage buckets, over-privileged service roles and no unified view across 140 AWS accounts. Freezing changes before peak season was not an option.",
    approach: [
      "Onboarded all accounts agentless in one afternoon; baselined exposure paths",
      "Prioritized toxic combinations touching cardholder data flows",
      "Shipped guardrail policies into Terraform pipelines to stop recurrence",
      "Auto-remediated low-risk classes like unencrypted snapshots overnight",
    ],
    metrics: [
      { label: "Public storage buckets exposed", before: "38", after: "0", delta: "-100%" },
      { label: "Over-privileged IAM roles", before: "1,240", after: "96", delta: "-92.3%" },
      { label: "Cloud incident MTTR", before: "9 hours", after: "47 min", delta: "-91.3%" },
    ],
    quote:
      "Peak season came and went without a single security-related outage. That had never happened before.",
    name: "Tomas Keller",
    role: "Head of Platform Engineering",
  },
];

/* ---------------- testimonials & logos ---------------- */

export const testimonials: Testimonial[] = [
  {
    quote:
      "Perimeter replaced three dashboards our team ignored with one console our board actually reads.",
    name: "Priya Raman",
    role: "CISO",
    company: "Northwind Labs",
  },
  {
    quote:
      "Detection engineering went from a side project to a core practice in six weeks. The coverage map made the gaps impossible to argue with.",
    name: "Jonas Feld",
    role: "Head of Security Operations",
    company: "Helios Cloud",
  },
  {
    quote:
      "We walked into our SOC 2 Type II with continuous evidence already collected. Zero exceptions, first attempt.",
    name: "Sofia Marchetti",
    role: "Director of Compliance",
    company: "Corevia",
  },
];

export const trustedBy = [
  "Northwind Labs",
  "Helios Cloud",
  "Meridian Pay",
  "Corevia",
  "BlueRidge Health",
  "Statice Systems",
  "Kite Financial",
  "Vantage Retail Group",
];

/* ---------------- blog posts ---------------- */

export const posts: Post[] = [
  {
    slug: "xdr-for-lean-security-teams",
    title: "What XDR actually means for lean security teams",
    category: "Threat Intel",
    date: "2026-07-14",
    readingTime: 6,
    excerpt:
      "Extended detection and response is mostly a data problem in disguise. Here's how to evaluate whether consolidation genuinely helps a five-person team.",
    body: [
      {
        type: "p",
        text: "Every vendor now claims XDR. Strip away the branding and you're asking one question: does my team investigate faster because signals arrive pre-correlated? For lean teams, the answer depends far more on data architecture than on detection counts.",
      },
      { type: "h2", text: "Correlation should happen upstream" },
      {
        type: "p",
        text: "If your XDR requires analysts to pivot between consoles to reconstruct an incident, it hasn't removed work — it has relabeled it. Look for platforms that stitch process trees, authentication events and network flows into a single timeline before an analyst ever opens the case.",
      },
      {
        type: "list",
        items: [
          "One entity model across users, hosts, containers and cloud principals",
          "Alert-to-telemetry drill-down without exporting logs elsewhere",
          "Detection rules versioned and testable, not black boxes",
        ],
      },
      { type: "h2", text: "Run a two-week bake-off" },
      {
        type: "p",
        text: "Feed the same three realistic attack emulations through candidate platforms and measure time-to-understood, not time-to-alert. A tool that pages you ninety seconds sooner but adds forty minutes of pivoting is losing.",
      },
      {
        type: "quote",
        text: "The best XDR is measured by questions it answers without being asked, not dashboards it ships.",
      },
    ],
  },
  {
    slug: "the-devsecops-maturity-curve",
    title: "The DevSecOps maturity curve: from reactive gates to continuous proof",
    category: "DevSecOps",
    date: "2026-06-30",
    readingTime: 8,
    excerpt:
      "Most organizations stall at 'scanning everything' and call it a program. The teams that escape share four habits worth copying.",
    body: [
      {
        type: "p",
        text: "Security maturity in engineering organizations tends to follow the same arc: ignore, bolt on, scan everything, then — rarely — make security a property of the delivery system itself. Understanding where you sit on that curve matters more than any tool purchase.",
      },
      { type: "h2", text: "Stage three is where programs go to die" },
      {
        type: "p",
        text: "'We run scanners in CI' feels like progress until the findings queue hits five digits and developers start auto-dismissing alerts. Volume without reachability analysis trains everyone to look away.",
      },
      {
        type: "list",
        items: [
          "Filter dependency findings by actual call-path reachability",
          "Route findings to owners automatically, never to a shared inbox",
          "Set fix SLAs per severity and report them like uptime",
          "Track escape rate: vulnerabilities found post-release vs pre-release",
        ],
      },
      { type: "h2", text: "Stage four looks boring" },
      {
        type: "p",
        text: "Mature programs are quiet. Gates block what policy says must be blocked, fixes land as routine PRs, and the monthly security review reads like an SLO report. If your program generates constant drama, it is still stage three.",
      },
      {
        type: "quote",
        text: "Great DevSecOps doesn't feel like security. It feels like shipping, with receipts.",
      },
    ],
  },
  {
    slug: "cloud-misconfiguration-top-breach-vector",
    title: "Misconfiguration remains the top cloud breach vector — and that's good news",
    category: "Cloud Security",
    date: "2026-06-12",
    readingTime: 5,
    excerpt:
      "Zero-days get headlines, but open buckets and leaked keys still cause most incidents. Unlike zero-days, these are fully preventable.",
    body: [
      {
        type: "p",
        text: "Year after year, breach forensics tell the same story: attackers didn't need a novel exploit. They needed a public object store, an over-permissive role, or a long-lived access key committed to a public repository.",
      },
      { type: "h2", text: "Preventable does not mean prevented" },
      {
        type: "p",
        text: "The gap between 'we have a CSPM' and 'misconfigurations stopped reaching production' is usually workflow. Findings that route to nobody get fixed by nobody. The fix loop has to terminate where the change originated: the pull request.",
      },
      {
        type: "list",
        items: [
          "Scan infrastructure-as-code before plan, not after apply",
          "Block merges on internet-exposure classes of finding",
          "Auto-remediate mechanical fixes like encryption defaults",
          "Recognize compensating controls so teams aren't double-alerted",
        ],
      },
      { type: "h2", text: "Measure exposure, not findings" },
      {
        type: "p",
        text: "A thousand findings behind a private network matter less than two toxic combinations on the internet edge. Report leadership numbers that track reachable exposure over time and watch the argument about severity ratings disappear.",
      },
    ],
  },
  {
    slug: "building-a-detection-engineering-practice",
    title: "Building a detection engineering practice that lasts",
    category: "Threat Intel",
    date: "2026-05-22",
    readingTime: 7,
    excerpt:
      "Detections rot silently until the night you need them. Treat rules like production code and they'll still work at 3 a.m.",
    body: [
      {
        type: "p",
        text: "Most detection content decays the moment it ships. Data sources change schemas, services get renamed, and the rule that fired brilliantly during the tabletop quietly stops matching anything real.",
      },
      { type: "h2", text: "Rules are code. Act like it." },
      {
        type: "p",
        text: "Version control, peer review, staged rollouts and rollback plans apply to detection logic exactly as they do to application code. A rule without an owner is an orphan waiting to false-positive at scale.",
      },
      {
        type: "list",
        items: [
          "Declare data-source dependencies and alert when they vanish",
          "Unit-test rules against recorded event fixtures",
          "Budget false positives explicitly per rule",
          "Review coverage against ATT&CK each quarter",
        ],
      },
      { type: "h2", text: "Prove coverage with emulation, not assertion" },
      {
        type: "p",
        text: "Purple-team exercises shouldn't be annual theater. Safe emulation packs can validate entire tactic chains monthly, producing a heatmap your auditors will accept and your engineers will trust.",
      },
    ],
  },
  {
    slug: "identity-is-the-new-perimeter",
    title: "Identity is the new perimeter (again)",
    category: "Identity",
    date: "2026-04-15",
    readingTime: 6,
    excerpt:
      "Attackers log in; they don't break in. Treating identity telemetry as a first-class detection source changes that math.",
    body: [
      {
        type: "p",
        text: "The perimeter moved to the identity provider years ago, but most monitoring stacks still treat auth logs as compliance exhaust rather than primary telemetry. That mismatch is why credential abuse remains both the cheapest and most successful attack path.",
      },
      { type: "h2", text: "Signals hiding in plain sight" },
      {
        type: "list",
        items: [
          "Impossible travel paired with device-posture context",
          "MFA fatigue patterns: repeated push denials preceding approval",
          "Dormant account revival followed by consent grants",
          "Service-principal secrets created outside change windows",
        ],
      },
      {
        type: "p",
        text: "None of these require exotic telemetry. All of them hide inside logs nobody graphs. The value comes from correlation: pairing the auth event with what happened next on the endpoint and in the cloud control plane.",
      },
      { type: "h2", text: "Response needs to keep pace" },
      {
        type: "p",
        text: "Revoking sessions and disabling accounts must be automatable with approval gates. When containment waits for a human to notice a ticket, the attacker's dwell time is set by your pager rotation.",
      },
    ],
  },
  {
    slug: "soc2-without-the-chaos",
    title: "SOC 2 without the chaos: a pragmatic timeline",
    category: "Compliance",
    date: "2026-03-08",
    readingTime: 9,
    excerpt:
      "A realistic 90-day plan for a first-time Type I audit, based on patterns that repeatedly work for seed-to-Series-B companies.",
    body: [
      {
        type: "p",
        text: "SOC 2 projects fail from scope creep, not difficulty. The companies that certify quickly pick a narrow scope, automate evidence early, and treat the auditors as reviewers rather than adversaries.",
      },
      { type: "h2", text: "Days 0–30: scope and baseline" },
      {
        type: "list",
        items: [
          "Choose Trust Services Criteria deliberately — skip availability/confidentiality unless customers demand them",
          "Inventory systems that touch customer data; exclude the rest in writing",
          "Baseline existing controls honestly; gaps go on a dated remediation plan",
        ],
      },
      { type: "h2", text: "Days 31–60: automate the evidence" },
      {
        type: "p",
        text: "Manual screenshots don't survive personnel churn. Connect the systems that inherently prove controls — identity, cloud, code hosting, HR — and let continuous checks generate the artifact trail.",
      },
      { type: "h2", text: "Days 61–90: dry run and audit window" },
      {
        type: "p",
        text: "Run an internal mock audit against the criteria list. Every failure becomes a documented exception with an owner. Auditors respect honesty with remediation timelines far more than perfection they can't trace.",
      },
      {
        type: "quote",
        text: "Compliance is a systems problem wearing a legal costume. Automate accordingly.",
      },
    ],
  },
];

/* ---------------- legal documents ---------------- */

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    updated: "2026-01-15",
    intro:
      "This template privacy policy explains in plain language what the placeholder organization would collect, why, and the rights visitors hold. Replace all bracketed details and have counsel review before use.",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "We collect information you provide directly — such as your name, work email and company when you request a demo or subscribe to updates — and limited technical data such as IP address, browser type and pages visited, collected automatically to operate and secure the site.",
          "This site does not run advertising trackers. Analytics, if enabled, are configured without cross-site tracking identifiers.",
        ],
      },
      {
        heading: "How we use information",
        body: [
          "We use collected information to respond to inquiries, provide requested materials, operate and improve the website, protect against abuse, and comply with law. We do not sell personal information.",
        ],
      },
      {
        heading: "Legal bases (EEA/UK)",
        body: [
          "Where GDPR applies, we process personal data under legitimate interest (site operation and security), consent (optional communications) and legal obligation (statutory retention).",
        ],
      },
      {
        heading: "Data sharing",
        body: [
          "We share data only with service providers operating under contract (hosting, email delivery, CRM), and where required by law. A current subprocessor list is maintained in the Trust Center.",
        ],
      },
      {
        heading: "Retention",
        body: [
          "Inquiry records are retained for up to 24 months after last contact; server logs for 90 days; and records required by law for their statutory periods, after which data is deleted or anonymized.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Depending on jurisdiction you may request access, correction, deletion, restriction, portability, or object to processing, and may withdraw consent at any time. Contact [privacy@yourcompany.example] to exercise rights; EEA/UK residents may lodge a complaint with their supervisory authority.",
        ],
      },
      {
        heading: "International transfers",
        body: [
          "Where data crosses borders we rely on recognized safeguards such as Standard Contractual Clauses plus supplementary measures described in our documentation.",
        ],
      },
      {
        heading: "Contact",
        body: ["Questions about this policy: [privacy@yourcompany.example]."],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Service",
    updated: "2026-01-15",
    intro:
      "Placeholder terms governing use of this website and any trial offerings. This template text is illustrative and must be replaced with counsel-reviewed terms.",
    sections: [
      {
        heading: "Acceptance",
        body: [
          "By accessing this site you agree to these terms. If you do not agree, do not use the site. These terms do not govern product subscriptions, which are covered by separate signed agreements.",
        ],
      },
      {
        heading: "Permitted use",
        body: [
          "You may browse and link to this site freely. You may not scrape at disruptive volumes, probe or scan without written authorization, impersonate the site in phishing, or use content commercially without a license.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "Site content, branding and design are protected by intellectual property laws. Template licensees should replace all brand assets with their own marks.",
        ],
      },
      {
        heading: "Disclaimers",
        body: [
          "The site is provided 'as is' without warranties of any kind. Demonstration statistics and sample content are illustrative and not representations of performance.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "To the maximum extent permitted by law, liability arising from use of this website is excluded for indirect and consequential damages and capped at the amount paid for use of the site, if any.",
        ],
      },
      {
        heading: "Changes",
        body: [
          "These terms may be updated; material changes will be noted with a new effective date at the top of this page.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          "Placeholder clause: disputes are governed by the laws of [jurisdiction] excluding conflict-of-law rules. Insert your counsel-approved venue and governing law.",
        ],
      },
    ],
  },
  {
    slug: "dpa",
    title: "Data Processing Addendum (Summary)",
    updated: "2026-01-15",
    intro:
      "A summary DPA reflecting standard GDPR Article 28 commitments. Enterprises typically require the full executed DPA before procurement — provide yours on request.",
    sections: [
      {
        heading: "Roles",
        body: [
          "For customer data processed by the platform, the customer acts as controller and the vendor as processor. Each party remains responsible for its own regulatory obligations.",
        ],
      },
      {
        heading: "Processing instructions",
        body: [
          "Personal data is processed only on documented instructions, including with regard to international transfers, except where EU or member-state law requires otherwise.",
        ],
      },
      {
        heading: "Confidentiality & staff",
        body: [
          "Personnel processing personal data are bound by confidentiality obligations and receive role-appropriate security training.",
        ],
      },
      {
        heading: "Subprocessors",
        body: [
          "A current list of subprocessors is published in the Trust Center with an RSS/email change feed; customers may object to new subprocessors on reasonable grounds within 14 days of notice.",
        ],
      },
      {
        heading: "Security measures",
        body: [
          "Encryption in transit and at rest, least-privilege access, logging, vulnerability management and tested incident response are maintained as described in the Security page.",
        ],
      },
      {
        heading: "Assistance, audits & deletion",
        body: [
          "The processor assists with data-subject requests and DPIAs, submits to audits via certifications and reports, and deletes or returns personal data at contract end unless law requires retention.",
        ],
      },
    ],
  },
  {
    slug: "acceptable-use",
    title: "Acceptable Use Policy",
    updated: "2026-01-15",
    intro:
      "Baseline acceptable-use boundaries for the website and any trial environments. Adapt to your product's actual enforcement posture.",
    sections: [
      {
        heading: "Prohibited activity",
        body: [
          "No unauthorized security testing, credential stuffing, resource abuse, malware distribution, phishing that references this brand, or unlawful content.",
        ],
      },
      {
        heading: "Responsible testing",
        body: [
          "Security research against this site is welcome only within the published scope of the Vulnerability Disclosure Policy and with no degradation of service.",
        ],
      },
      {
        heading: "Enforcement",
        body: [
          "Violations may result in rate limiting, suspension, and referral to law enforcement where legally warranted.",
        ],
      },
      {
        heading: "Reporting",
        body: [
          "Report suspected abuse to [security@yourcompany.example]. Acknowledgment target: one business day.",
        ],
      },
    ],
  },
];
