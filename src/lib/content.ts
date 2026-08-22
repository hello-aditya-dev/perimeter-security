// ============================================================
// Perimeter — product & platform demo content
//
// TEMPLATE NOTE: Every metric, claim, product name and number
// below is demonstration content shipped with this template.
// Replace it with real, verified data before publishing.
// ============================================================

/* ---------------- types ---------------- */

export type Solution = {
  slug: "threat-detection" | "cloud-security" | "devsecops";
  name: string;
  eyebrow: string;
  headline: string;
  subhead: string;
  stats: { value: string; label: string }[];
  capabilities: { title: string; body: string }[];
  sections: { title: string; body: string; bullets: string[] }[];
};

export type PipelineStage = {
  id: string;
  label: string;
  blurb: string;
  details: string[];
  finding: string;
  gate: string;
};

export type ArchitectureLayer = {
  id: string;
  name: string;
  tagline: string;
  controls: string[];
};

export type CapabilityCard = {
  title: string;
  module: string;
  href: string;
  icon: string;
  body: string;
  points: string[];
};

export type Framework = {
  abbr: string;
  name: string;
  scope: string;
  howWeHelp: string[];
};

/* ---------------- disclaimers ---------------- */

export const COMPLIANCE_DISCLAIMER =
  "Demonstration content only. The compliance badges in this template are placeholders. Only display certifications or attestations your organization actually holds — publishing false compliance claims may violate advertising rules, industry regulations and customer contracts.";

/* ---------------- homepage capability cards ---------------- */

export const capabilityCards: CapabilityCard[] = [
  {
    title: "Threat Detection",
    module: "SIGHTLINE",
    href: "/solutions/threat-detection",
    icon: "radar",
    body: "Detect adversary behavior across endpoints, identities and cloud workloads in real time.",
    points: ["EDR + XDR telemetry", "MITRE ATT&CK mapping", "Threat hunting workspace"],
  },
  {
    title: "Cloud Security",
    module: "STRATUS",
    href: "/solutions/cloud-security",
    icon: "cloud",
    body: "Continuous posture management and workload protection for multi-cloud estates.",
    points: ["CSPM & CIEM", "Misconfiguration remediation", "Container & Kubernetes security"],
  },
  {
    title: "Identity",
    module: "GATEKEEP",
    href: "/platform",
    icon: "fingerprint",
    body: "Spot credential abuse, impossible travel and privilege escalation before they spread.",
    points: ["ITDR signals", "Least-privilege reviews", "Session risk scoring"],
  },
  {
    title: "Endpoint",
    module: "HARDPOINT",
    href: "/platform",
    icon: "laptop",
    body: "One lightweight agent replaces point tools with prevention, EDR and device posture.",
    points: ["Ransomware canaries", "Device trust checks", "Remote isolation"],
  },
  {
    title: "Application Security",
    module: "FOUNDRY",
    href: "/solutions/devsecops",
    icon: "code",
    body: "Shift left with code, dependency and infrastructure scanning built into the pipeline.",
    points: ["SAST · SCA · IaC", "Secret detection", "Reachability-based priority"],
  },
];

/* ---------------- solution detail pages ---------------- */

export const solutions: Solution[] = [
  {
    slug: "threat-detection",
    name: "Threat Detection",
    eyebrow: "Solution",
    headline: "See every attack. Stop it mid-motion.",
    subhead:
      "Perimeter correlates endpoint, identity, network and cloud telemetry into a single detection fabric — so your team investigates one timeline instead of ten consoles.",
    stats: [
      { value: "4 min", label: "Median time to detect (sample)" },
      { value: "<1 s", label: "Streaming alert latency" },
      { value: "180+", label: "ATT&CK techniques mapped" },
    ],
    capabilities: [
      {
        title: "Behavioral EDR/XDR",
        body: "Lightweight agents stream process, file and network events into a behavioral engine that flags living-off-the-land tactics, not just known hashes.",
      },
      {
        title: "Identity threat detection",
        body: "Impossible travel, MFA fatigue, dormant-account revival and consent abuse are scored against session context automatically.",
      },
      {
        title: "Managed detections that tune themselves",
        body: "Rules arrive mapped to MITRE ATT&CK with false-positive budgets; suppression is versioned and reviewable like code.",
      },
      {
        title: "Threat hunting workspace",
        body: "Query petabytes of raw telemetry with a SQL-like language, save hunts, and promote findings into detections with one click.",
      },
      {
        title: "Case management built in",
        body: "Alerts collapse into incidents with timelines, entity graphs and analyst notes — exportable to SIEM, ticketing or your data lake.",
      },
      {
        title: "Response actions anywhere",
        body: "Isolate hosts, revoke sessions, disable accounts or block domains from one console — with approval workflows for sensitive actions.",
      },
    ],
    sections: [
      {
        title: "From signal to decision in minutes",
        body: "Analysts lose hours stitching together alerts from agents, logs and identity providers. Perimeter pre-correlates the story so triage starts at 'what happened', not 'which tool'.",
        bullets: [
          "Entity risk scores update in real time across users, hosts and services",
          "Attack timelines stitch related events across sources automatically",
          "One-click pivot from an alert to raw telemetry and affected assets",
        ],
      },
      {
        title: "Coverage your auditors can verify",
        body: "Every detection rule carries its ATT&CK technique, data-source dependency and last-tested timestamp — coverage you can prove, not assert.",
        bullets: [
          "Coverage heatmaps by tactic and business unit",
          "Purple-team test kits validate rules against safe emulations",
          "Detection-as-code workflow with peer review and rollback",
        ],
      },
    ],
  },
  {
    slug: "cloud-security",
    name: "Cloud Security",
    eyebrow: "Solution",
    headline: "Close every cloud gap before attackers find it.",
    subhead:
      "A CNAPP that unifies posture management, entitlements and runtime protection across AWS, Azure and Google Cloud — ranked by exploitability, not noise.",
    stats: [
      { value: "92%", label: "Alert noise reduction (sample)" },
      { value: "15 min", label: "Account onboarding to insights" },
      { value: "600+", label: "Cloud policy checks" },
    ],
    capabilities: [
      {
        title: "Agentless CSPM",
        body: "Read-only API connections map every resource, relationship and exposure path within minutes of connecting an account.",
      },
      {
        title: "Attack-path analysis",
        body: "Graph analysis combines misconfigurations, vulnerabilities and entitlements into end-to-end paths — fix the two nodes that break the chain.",
      },
      {
        title: "CIEM for least privilege",
        body: "Effective permissions are computed from actual usage, then right-sized with generated policies instead of guesswork.",
      },
      {
        title: "Workload & container defense",
        body: "eBPF-based runtime sensors protect Kubernetes clusters and VM workloads with drift detection and process lockdowns.",
      },
      {
        title: "IaC scanning at the source",
        body: "Terraform, CloudFormation and Kubernetes manifests are checked in pull requests so misconfigurations never reach production.",
      },
      {
        title: "Guided, owner-routed fixes",
        body: "Findings ship with CLI commands or console steps and route to the owning team via Jira, ServiceNow or Slack automatically.",
      },
    ],
    sections: [
      {
        title: "Prioritize by what's actually reachable",
        body: "A critical CVE on an isolated internal host matters less than a medium flaw on an internet-facing jump box. Perimeter ranks exposure by blast radius.",
        bullets: [
          "Internet-exposure and lateral-movement context on every finding",
          "Toxic combinations flagged (public bucket + key + sensitive data)",
          "Compensating controls recognized to cut duplicate alerts",
        ],
      },
      {
        title: "Built for platform teams",
        body: "Everything is queryable through the API, exportable to your warehouse and codified as policy — no click-ops governance.",
        bullets: [
          "Policy-as-code with versioned exceptions and expiry dates",
          "Drift detection between declared and deployed state",
          "Multi-account views with delegated admin for business units",
        ],
      },
    ],
  },
  {
    slug: "devsecops",
    name: "DevSecOps",
    eyebrow: "Solution",
    headline: "Ship fast. Break nothing. Prove it.",
    subhead:
      "Embed security into every stage of the pipeline — from first commit to production monitoring — without slowing release velocity.",
    stats: [
      { value: "68%", label: "Faster vulnerability MTTR (sample)" },
      { value: "0", label: "Critical releases shipped*" },
      { value: "40+", label: "Pipeline integrations" },
    ],
    capabilities: [
      {
        title: "Pipeline-native scanning",
        body: "SAST, SCA, container, IaC and secret scanning run as native pipeline steps with results inline on the pull request.",
      },
      {
        title: "Reachability over volume",
        body: "Dependency findings are filtered by whether your code actually calls the vulnerable function — cutting triage queues by up to 90%.",
      },
      {
        title: "Automated fix proposals",
        body: "Version-bump PRs, config patches and IaC corrections are generated and opened for you, ready to merge after review.",
      },
      {
        title: "Release gates as policy",
        body: "Codified gates block deploys on unresolved criticals, unsigned artifacts or missing SBOMs — with break-glass approvals.",
      },
      {
        title: "SBOM & supply chain integrity",
        body: "Generate signed SBOMs (CycloneDX/SPDX) per build and continuously monitor them for newly disclosed vulnerabilities.",
      },
      {
        title: "Developer-first experience",
        body: "Findings appear where developers already work — PR comments, IDE plugins and Slack — with fix guidance, not just severity labels.",
      },
    ],
    sections: [
      {
        title: "Security the pipeline enforces, not remembers",
        body: "Manual checklists decay. Perimeter turns your security requirements into executable gates that run identically on every repository.",
        bullets: [
          "Golden-path templates for new repos with security pre-wired",
          "Exception workflow with owners, reasons and expiry dates",
          "Metrics per team: fix SLAs, escape rate, gate pass rate",
        ],
      },
      {
        title: "*About these numbers",
        body: "All statistics on this page are sample values included to demonstrate layout. Replace them with your own measured results before publishing this site.",
        bullets: [],
      },
    ],
  },
];

/* ---------------- DevSecOps pipeline stages ---------------- */

export const pipelineStages: PipelineStage[] = [
  {
    id: "code",
    label: "Code",
    blurb:
      "Security starts at the keyboard. Repos are onboarded with guardrails from day zero.",
    details: [
      "Pre-commit secret scanning",
      "Secure-by-default repo templates",
      "Threat-model notes attached to services",
    ],
    finding: "Hardcoded AWS key detected — config/payments.ts:42",
    gate: "Every commit fingerprinted",
  },
  {
    id: "scan",
    label: "Scan",
    blurb:
      "SAST, SCA, container, IaC and secret scans run natively inside CI on every change.",
    details: [
      "SAST with custom rule packs",
      "SCA with reachability filtering",
      "Terraform / K8s manifest checks",
    ],
    finding: "CVE-2026-1337 · RCE in payments-sdk@2.3.1 (reachable)",
    gate: "1,204 checks per run (sample)",
  },
  {
    id: "analyze",
    label: "Analyze",
    blurb:
      "Risk scoring deduplicates and ranks findings by exploitability and business impact.",
    details: [
      "Exploit-path correlation",
      "SLA tiers by severity and asset",
      "Noise suppressed, evidence kept",
    ],
    finding: "Exploit chain confirmed: internet-facing → RCE → prod DB",
    gate: "92% noise reduction (sample)",
  },
  {
    id: "fix",
    label: "Fix",
    blurb:
      "Developers get one-click fixes where they work — PRs, tickets and chat, fully tracked.",
    details: [
      "Auto-generated patch PRs",
      "Owner routing via CODEOWNERS",
      "Fix verification on next scan",
    ],
    finding: "Patch proposed: payments-sdk 2.3.1 → 2.3.4",
    gate: "MTTR down 68% (sample)",
  },
  {
    id: "deploy",
    label: "Deploy",
    blurb:
      "Policy gates verify signed artifacts, SBOMs and open findings before anything ships.",
    details: [
      "Admission control for clusters",
      "Signed artifact verification",
      "Break-glass approval flow",
    ],
    finding: "Deploy blocked: 1 critical finding past SLA",
    gate: "Zero critical releases*",
  },
  {
    id: "monitor",
    label: "Monitor",
    blurb:
      "Runtime sensors watch what actually happens in production and feed learnings back upstream.",
    details: [
      "Runtime drift & behavior alerts",
      "New CVEs matched to live SBOMs",
      "Feedback loop into scan rules",
    ],
    finding: "Anomaly: crypto-mining pattern in cluster prod-eu",
    gate: "4 min median detect (sample)",
  },
];

/* ---------------- security architecture layers ---------------- */

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: "cloud",
    name: "Cloud",
    tagline: "Control-plane visibility across every account and region",
    controls: ["CSPM posture checks", "Entitlement management (CIEM)", "Attack-path analysis"],
  },
  {
    id: "firewall",
    name: "Firewall",
    tagline: "Network edges hardened and continuously verified",
    controls: ["NGFW policy validation", "East-west segmentation", "WAF rule tuning"],
  },
  {
    id: "identity",
    name: "Identity",
    tagline: "Every session scored, every privilege justified",
    controls: ["ITDR signals", "Least-privilege enforcement", "Session risk scoring"],
  },
  {
    id: "application",
    name: "Application",
    tagline: "Code-to-runtime protection for everything you ship",
    controls: ["API discovery & schema checks", "SAST/SCA findings", "Bot & abuse defense"],
  },
  {
    id: "data",
    name: "Data",
    tagline: "Sensitive assets found, classified and watched",
    controls: ["Data classification", "Encryption posture", "DLP signal routing"],
  },
];

/* ---------------- compliance frameworks ---------------- */

export const frameworks: Framework[] = [
  {
    abbr: "SOC 2",
    name: "Service Organization Control 2",
    scope: "AICPA Trust Services Criteria — security, availability, confidentiality",
    howWeHelp: [
      "Automated evidence collection across 60+ common controls",
      "Continuous control monitoring with failure alerts",
      "Auditor-ready exports mapped to criteria",
    ],
  },
  {
    abbr: "ISO 27001",
    name: "Information Security Management",
    scope: "Annex A control set for certified ISMS programs",
    howWeHelp: [
      "Statement of Applicability tracking in one register",
      "Risk register integration with treatment tasks",
      "Internal audit workflows with corrective-action tracking",
    ],
  },
  {
    abbr: "GDPR",
    name: "General Data Protection Regulation",
    scope: "EU/EEA personal data processing obligations",
    howWeHelp: [
      "Data discovery and classification support",
      "Processor records and DSR evidence trails",
      "Access reviews aligned to lawful-basis documentation",
    ],
  },
  {
    abbr: "HIPAA",
    name: "Health Insurance Portability & Accountability Act",
    scope: "US protected health information safeguards",
    howWeHelp: [
      "PHI access monitoring and alerting patterns",
      "Technical safeguard mapping to Security Rule citations",
      "BAA-ready subprocessor documentation templates",
    ],
  },
  {
    abbr: "PCI DSS",
    name: "Payment Card Industry Data Security Standard v4.0",
    scope: "Cardholder data environment (CDE) requirements",
    howWeHelp: [
      "CDE scoping support and segmentation checks",
      "Quarterly scan tracking with evidence storage",
      "Requirement-by-requirement control mapping",
    ],
  },
];

/* ---------------- platform features ---------------- */

export const platformFeatures: { icon: string; title: string; body: string }[] = [
  {
    icon: "database",
    title: "Unified security data lake",
    body: "Telemetry from agents, APIs and logs lands in one schema — retained 13 months and queryable in seconds.",
  },
  {
    icon: "zap",
    title: "Streaming detection engine",
    body: "Correlation runs in-stream, not in batch. Alerts fire while the intrusion is still in progress.",
  },
  {
    icon: "workflow",
    title: "Response automation",
    body: "Playbooks enrich, contain and notify automatically — with human approval gates for destructive actions.",
  },
  {
    icon: "plug",
    title: "Open API & webhooks",
    body: "Every object readable via GraphQL/REST. Push events out to SIEM, warehouses and custom tooling.",
  },
  {
    icon: "shield-check",
    title: "Enterprise access control",
    body: "SAML/OIDC SSO, SCIM provisioning, scoped roles and just-in-time elevated access with audit.",
  },
  {
    icon: "scroll-text",
    title: "Immutable audit trail",
    body: "Every action by users and automation is hash-chained and exportable for compliance review.",
  },
];

export const detectionSources = [
  "Endpoint agents (Win/macOS/Linux)",
  "Cloud provider APIs",
  "Kubernetes audit logs",
  "Identity providers",
  "Network flow records",
  "CI/CD event streams",
  "Email gateway telemetry",
  "SaaS admin logs",
];

export const deploymentOptions: { title: string; body: string; tag: string }[] = [
  {
    title: "SaaS (multi-tenant)",
    tag: "Fastest start",
    body: "Fully managed, region-pinned data residency, continuous upgrades. Live in under a day.",
  },
  {
    title: "Dedicated single tenant",
    tag: "Regulated teams",
    body: "Your own isolated stack in a chosen cloud region with private networking and custom retention.",
  },
  {
    title: "Air-gapped deployment",
    tag: "Defense & critical infra",
    body: "Install inside your perimeter with offline signature updates and local-only telemetry.",
  },
];

export const techSpecs: { k: string; v: string }[] = [
  { k: "Detection latency", v: "< 1 s streaming (sample)" },
  { k: "Query interfaces", v: "GraphQL + REST, cursor pagination" },
  { k: "Hot data retention", v: "13 months, configurable archive" },
  { k: "Deployment regions", v: "US · EU · UK · APAC" },
  { k: "Authentication", v: "SAML 2.0 / OIDC, SCIM 2.0" },
  { k: "Uptime commitment", v: "99.99% SLA (sample terms)" },
  { k: "Agent footprint", v: "< 1% CPU typical, ~80 MB RAM" },
  { k: "Export formats", v: "OTLP, CEF, JSONL, Parquet" },
];

/* ---------------- integrations ---------------- */

export const integrationCategories: { name: string; items: string[] }[] = [
  {
    name: "Cloud Providers",
    items: ["Amazon Web Services", "Microsoft Azure", "Google Cloud", "Oracle Cloud"],
  },
  {
    name: "Containers & Infrastructure",
    items: ["Kubernetes", "Docker", "Helm", "Terraform", "Pulumi", "Ansible"],
  },
  {
    name: "CI/CD",
    items: ["GitHub Actions", "GitLab CI/CD", "Jenkins", "CircleCI", "Azure DevOps", "Bitbucket Pipelines"],
  },
  {
    name: "SIEM & SOAR",
    items: ["Splunk", "Elastic Security", "Microsoft Sentinel", "IBM QRadar", "Cortex XSOAR", "Tines"],
  },
  {
    name: "Ticketing & Communication",
    items: ["Jira", "ServiceNow", "Linear", "PagerDuty", "Slack", "Microsoft Teams"],
  },
  {
    name: "Identity Providers",
    items: ["Okta", "Microsoft Entra ID", "Google Workspace", "JumpCloud", "Ping Identity", "Keycloak"],
  },
];

/* ---------------- resources ---------------- */

export const resources: ResourceCardLite[] = [
  {
    type: "Checklist",
    title: "Cloud Security Readiness Checklist",
    desc: "A 42-point worksheet covering identity, network, storage and logging baselines before your first cloud audit.",
    meta: "PDF · 12 pages",
  },
  {
    type: "Guide",
    title: "The CISO Guide to Consolidating Security Tooling",
    desc: "How to evaluate overlap across detection, posture and response tools — with a consolidation scorecard.",
    meta: "PDF · 24 pages",
  },
  {
    type: "Kit",
    title: "Incident Response Runbook Starter Kit",
    desc: "Role cards, comms templates and severity matrices for ransomware, BEC and cloud compromise scenarios.",
    meta: "Docs bundle",
  },
  {
    type: "Template",
    title: "Vendor Security Review Template",
    desc: "The questionnaire and scoring rubric procurement teams use to assess third-party risk in under a week.",
    meta: "Sheet + PDF",
  },
];

type ResourceCardLite = {
  type: string;
  title: string;
  desc: string;
  meta: string;
};
