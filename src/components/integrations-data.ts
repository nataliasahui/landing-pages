export type Integration = {
  name: string;
  initials: string;
  bg: string;
  fg?: string;
  logo?: string;
  smallLogo?: boolean;
  categories: string[];
  description: string;
};

export type Category = {
  key: string;
  label: string;
  full: string;
  bg: string;
  fg: string;
};

export const CATEGORIES: Category[] = [
  { key: "IAM", label: "IAM", full: "Identity & Access Management", bg: "#EBF2FF", fg: "#1A4BAA" },
  { key: "CIAM", label: "CIAM", full: "Customer Identity & Access Management", bg: "#E6F1FB", fg: "#0C447C" },
  { key: "IGA", label: "IGA", full: "Identity Governance & Administration", bg: "#EEEDFE", fg: "#3C3489" },
  { key: "ITDR", label: "ITDR", full: "Identity Threat Detection & Response", bg: "#E6F1FB", fg: "#0C447C" },
  { key: "ITSM", label: "ITSM", full: "IT Service Management", bg: "#E1F5EE", fg: "#085041" },
  { key: "Messaging", label: "Messaging", full: "Messaging & Collaboration", bg: "#EEEDFE", fg: "#3C3489" },
  { key: "Video Conferencing", label: "Video Conferencing", full: "Video Conferencing", bg: "#F1EFE8", fg: "#444441" },
  { key: "HRIS", label: "HRIS", full: "Human Resource Information System", bg: "#FAEEDA", fg: "#633806" },
  { key: "ATS", label: "ATS", full: "Applicant Tracking System", bg: "#FFF8EB", fg: "#92400E" },
  { key: "CRM", label: "CRM", full: "Customer Relationship Management", bg: "#EAF3DE", fg: "#27500A" },
  { key: "E-Commerce", label: "E-Commerce", full: "E-Commerce", bg: "#EDFAF3", fg: "#166534" },
  { key: "Age Verification", label: "Age Verification", full: "Age Verification", bg: "#FAECE7", fg: "#712B13" },
  { key: "Hardware", label: "Hardware", full: "Hardware & Kiosk", bg: "#F1EFE8", fg: "#444441" },
];

export const INTEGRATIONS: Integration[] = [
  { name: "Okta Workforce", initials: "OK", bg: "#00297A", logo: "/logos/okta.svg", smallLogo: true, categories: ["IAM"], description: "Step-up biometric verification and account recovery in Okta workflows." },
  { name: "Microsoft Entra", initials: "ME", bg: "#0078D4", logo: "/logos/microsoft.svg", smallLogo: true, categories: ["IAM"], description: "Biometric verification to provide additional protection at provisioning, MFA recovery, and privileged access." },
  { name: "Microsoft Active Directory", initials: "AD", bg: "#0078D4", logo: "/logos/microsoft.svg", smallLogo: true, categories: ["IAM"], description: "Incode biometric verification integrated into Active Directory workflows — protecting account recovery and privileged access." },
  { name: "OpenIAM", initials: "OI", bg: "#1A73E8", logo: "/logos/open%20iam.svg", smallLogo: true, categories: ["IAM"], description: "IAM platform with Incode verification integrated into onboarding and access workflows." },
  { name: "Auth0", initials: "A0", bg: "#EB5424", logo: "/logos/auth0-2.svg", categories: ["CIAM"], description: "Incode IDV as step-up verification inside Auth0 consumer authentication flows." },
  { name: "Descope", initials: "DS", bg: "#3D5AF1", logo: "/logos/descope-2.svg", smallLogo: true, categories: ["CIAM"], description: "No-code auth platform with Incode verification built in for customer-facing applications." },
  { name: "Ping DaVinci", initials: "PI", bg: "#ED2226", logo: "/logos/ping-identity.svg", smallLogo: true, categories: ["IAM", "CIAM"], description: "Incode IDV in PingOne DaVinci orchestration for workforce and consumer identity use cases." },
  { name: "SailPoint", initials: "SP", bg: "#0033A0", logo: "/logos/sailpoint-2.svg", smallLogo: true, categories: ["IGA"], description: "Incode biometric verification integrated into SailPoint identity governance workflows for access certification and high-assurance provisioning." },
  { name: "Microsoft Defender", initials: "MD", bg: "#0078D4", logo: "/logos/microsoft-defender-icon-2025-english-2.svg", smallLogo: true, categories: ["ITDR"], description: "Logic Apps connector — triggers Incode verification when Defender detects anomalous account activity." },
  { name: "ServiceNow", initials: "SN", bg: "#62D84E", fg: "#111", logo: "/logos/servicenow-2.svg", categories: ["ITSM"], description: "Incode in ServiceNow IT workflows — protecting password resets, MFA recovery, and high-risk actions from impersonation." },
  { name: "Jira Service Management", initials: "JR", bg: "#0052CC", logo: "/logos/jira-2.svg", categories: ["ITSM"], description: "Incode IDV in Jira Service Management for help desk use cases. Available on Atlassian Marketplace." },
  { name: "Slack", initials: "SL", bg: "#4A154B", logo: "/logos/slack.svg", smallLogo: true, categories: ["Messaging"], description: "Identity verification triggered and completed inside Slack. Listed on Slack App Directory." },
  { name: "Zoom", initials: "ZM", bg: "#2D8CFF", logo: "/logos/zoom.svg", smallLogo: true, categories: ["Video Conferencing"], description: "Identity verification as a gating step before participants join a Zoom meeting or webinar." },
  { name: "Microsoft Teams", initials: "MT", bg: "#464EB8", logo: "/logos/microsoft-teams.svg", smallLogo: true, categories: ["Video Conferencing"], description: "Identity verification as a gating step before participants join a Teams meeting." },
  { name: "Google Meet", initials: "GM", bg: "#00897B", logo: "/logos/google-meet.svg", categories: ["Video Conferencing"], description: "Identity verification gating for Google Meet — confirming participant identity before a meeting begins." },
  { name: "Workday", initials: "WD", bg: "#F4762A", logo: "/logos/workday-2.svg", categories: ["HRIS", "ATS"], description: "Incode connected to the Workday employee lifecycle — confirming every new hire before access is granted." },
  { name: "Greenhouse", initials: "GH", bg: "#3AB549", logo: "/logos/greenhouse-2.svg", categories: ["ATS"], description: "Candidate identity verification — confirming the person who joins is the same person who interviewed." },
  { name: "Lever", initials: "LV", bg: "#499D6A", logo: "/logos/lever-2.svg", smallLogo: true, categories: ["ATS"], description: "Candidate identity verification inside Lever — confirming the person who joins is the same person who interviewed." },
  { name: "Ashby", initials: "AB", bg: "#1A1A1A", logo: "/logos/Ashby_Logo_0%201.svg", categories: ["ATS"], description: "Candidate identity verification inside Ashby for high-growth recruiting teams." },
  { name: "Salesforce", initials: "SF", bg: "#00A1E0", logo: "/logos/salesforce-2.svg", categories: ["CRM"], description: "Incode identity verification in Salesforce service and CRM workflows for customer identity assurance." },
  { name: "Shopify", initials: "SH", bg: "#96BF48", fg: "#111", logo: "/logos/shopify-2.svg", categories: ["E-Commerce"], description: "Age-gated commerce — verifying buyer identity and age at checkout for regulated products." },
  { name: "K-ID", initials: "KI", bg: "#6C47FF", logo: "/logos/k-id-2.svg", categories: ["Age Verification"], description: "Privacy-first age verification platform powered by Incode for digital platforms and apps." },
  { name: "Desko", initials: "DE", bg: "#333333", logo: "/logos/desko-2.svg", smallLogo: true, categories: ["Hardware"], description: "Document scanning hardware integrated with Incode for in-person identity verification." },
  { name: "Epson", initials: "EP", bg: "#003087", logo: "/logos/epson-2.svg", smallLogo: true, categories: ["Hardware"], description: "Hardware integration enabling Incode at in-person kiosk and point-of-service deployments." },
];
