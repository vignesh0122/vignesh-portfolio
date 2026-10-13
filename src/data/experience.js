// kind: 'work' | 'education'. Dates are ISO months; end null = Present.
// lens weights: 3 featured, 2 normal, 1 compact, 0 hidden.
export const experience = [
  {
    id: 'bu-law-fellow',
    kind: 'work',
    org: 'Boston University School of Law',
    orgShort: 'BU School of Law',
    role: 'Research Fellow: Law, AI Governance & Tech Policy',
    location: 'Boston, MA',
    start: '2026-07',
    end: null,
    lens: { ai: 3, cloud: 1, research: 3 },
    summary: {
      default: 'LLM evaluation pipelines and verification workflows for legal AI research.',
      cloud: 'Python and REST API pipelines for research datasets, under Git version control.',
      research: 'Empirical study of LLM reliability on legal citation and reasoning tasks.',
    },
    skills: [
      'python', 'rest-apis', 'claude-api', 'openai-api', 'gemini-api', 'courtlistener-api', 'llm-eval',
      'etl', 'git', 'prompt-engineering', 'pandas',
    ],
    bullets: [
      {
        text:
          'Build and maintain Python data pipelines that integrate LLM APIs (Claude, OpenAI GPT, Gemini) and the CourtListener API to collect, process, and validate research datasets.',
        lens: ['ai', 'cloud', 'research'],
      },
      {
        text:
          'Benchmark AI systems for hallucination rates, citation accuracy, and reasoning reliability using structured annotation frameworks.',
        lens: ['ai', 'research'],
        metric: { value: '+30%', label: 'evaluation consistency across teams' },
      },
      {
        text:
          'Design and validate AI verification workflows that strengthen citation grounding and model reliability, documenting methods and results for faculty publications.',
        lens: ['ai', 'research'],
      },
    ],
  },
  {
    id: 'met-cloud-dev',
    kind: 'work',
    org: 'Boston University Metropolitan College IT',
    orgShort: 'BU MET IT',
    role: 'Cloud Application Developer',
    location: 'Boston, MA',
    start: '2026-02',
    end: '2026-05',
    lens: { ai: 2, cloud: 3, research: 1 },
    summary: {
      default: 'Power Platform onboarding app and SharePoint-to-Dataverse data migration on Azure.',
      ai: 'Automated data pipelines and full-stack cloud solutions on the Microsoft stack.',
      research: 'Full-stack cloud solutions for onboarding and data pipelines.',
    },
    skills: [
      'power-apps', 'power-automate', 'dataverse', 'sharepoint', 'azure', 'power-fx', 'iam', 'dlp',
      'cicd', 'etl', 'm365',
    ],
    bullets: [
      {
        text:
          'Built and supported a Power Apps and Power Automate onboarding application for MET, replacing manual email and SharePoint steps with automated requests, approvals, and notifications.',
        lens: ['cloud', 'ai'],
      },
      {
        text:
          'Migrated legacy SharePoint data into Microsoft Dataverse with Power Automate, mapping, cleaning, and validating records to centralize data management in Azure.',
        lens: ['cloud', 'ai', 'research'],
        metric: { value: '+40%', label: 'process efficiency' },
      },
      {
        text:
          'Configured role-based access control, data loss prevention policies, and CI/CD pipelines for Power Platform solutions, partnering with MET departments and University IS&T on go-live.',
        lens: ['cloud'],
      },
    ],
  },
  {
    id: 'met-it-analyst',
    kind: 'work',
    org: 'Boston University Metropolitan College IT',
    orgShort: 'BU MET IT',
    role: 'Information Technology Analyst',
    location: 'Boston, MA',
    start: '2024-09',
    end: '2026-01',
    lens: { ai: 2, cloud: 3, research: 1 },
    summary: {
      default: 'ServiceNow automation, Power BI reporting, and enterprise support for faculty, staff, and students.',
      ai: 'AI-assisted ServiceNow workflows and backend automation scripts for enterprise support.',
    },
    skills: [
      'servicenow', 'azure', 'power-bi', 'm365', 'mysql', 'endpoint-security', 'iam', 'intune',
      'active-directory', 'javascript', 'powershell',
    ],
    bullets: [
      {
        text:
          'Built ServiceNow automation scripts and AI-assisted workflows for ticket triage, routing, and reporting across enterprise support queues.',
        lens: ['ai', 'cloud'],
        metric: { value: '−25%', label: 'average ticket resolution time' },
      },
      {
        text:
          'Maintained cloud-native backend tools and Power BI dashboards with Azure and Office 365 integrations, and optimized MySQL databases for operational reporting.',
        lens: ['ai', 'cloud', 'research'],
      },
      {
        text:
          'Resolved incidents and service requests across Microsoft 365, Windows 11, macOS, endpoint security, the LMS, and enterprise applications, including imaging, access management, and asset inventory.',
        lens: ['cloud'],
      },
      {
        text: 'Wrote knowledge-base articles and delivered end-user training.',
        lens: ['cloud', 'research'],
      },
    ],
  },
  {
    id: 'jio-android',
    kind: 'work',
    org: 'Jio Platforms Limited (Reliance Industries)',
    orgShort: 'Jio Platforms',
    role: 'Android Developer Intern · AVNI OS',
    location: 'Bengaluru, IN',
    start: '2023-08',
    end: '2023-12',
    lens: { ai: 1, cloud: 2, research: 1 },
    summary: {
      default: 'Bluetooth-enabled Android features for the AVNI OS project.',
    },
    skills: ['android', 'android-studio', 'flutter', 'azure-devops', 'figma', 'rest-apis', 'agile'],
    bullets: [
      {
        text:
          'Collaborated with engineering and design teams to translate product requirements into Bluetooth-enabled Android features aligned with backend architecture and API integrations.',
        lens: ['ai', 'cloud', 'research'],
        metric: { value: '+20%', label: 'feature delivery accuracy' },
      },
      {
        text:
          'Performed automated testing and triaged bugs with engineers using Android Studio and Flutter, tracking issues through resolution across sprints.',
        lens: ['cloud', 'ai'],
        metric: { value: '+15%', label: 'workflow efficiency' },
      },
      {
        text:
          'Managed project development via Microsoft Azure DevOps and reviewed UI/UX against Figma prototypes before each release.',
        lens: ['cloud'],
      },
    ],
  },
  {
    id: 'bu-ms',
    kind: 'education',
    org: 'Boston University',
    orgShort: 'Boston University',
    role: 'M.S. in Computer Science',
    location: 'Boston, MA',
    start: '2024-09',
    end: '2026-01',
    gpa: '3.65 / 4.0',
    lens: { ai: 2, cloud: 2, research: 3 },
    summary: {
      default: 'Software Engineering, Cybersecurity, Deep Reinforcement Learning, Big Data Analytics, Data Science.',
    },
    skills: ['deep-learning', 'spark', 'python', 'data-viz'],
    bullets: [
      {
        text: 'Relevant coursework: Software Engineering, Cybersecurity, Deep Reinforcement Learning, Big Data Analytics, Data Science.',
        lens: ['ai', 'cloud', 'research'],
      },
    ],
  },
  {
    id: 'vtu-be',
    kind: 'education',
    org: 'Visvesvaraya Technological University',
    orgShort: 'VTU',
    role: 'B.E. in Information Science',
    location: 'Bengaluru, IN',
    start: '2020-08',
    end: '2024-05',
    gpa: '3.60 / 4.0',
    lens: { ai: 1, cloud: 1, research: 2 },
    summary: {
      default: 'Data Structures, AI/ML, Software Testing, Computer Networks and Security, Storage Area Networks.',
    },
    skills: ['java', 'cpp', 'c', 'oop'],
    bullets: [
      {
        text: 'Relevant coursework: Data Structures, AIML, Software Testing, Computer Networks and Security, Storage Area Networks.',
        lens: ['ai', 'cloud', 'research'],
      },
    ],
  },
]
