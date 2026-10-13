export const profile = {
  name: 'Vignesh Swaminathan',
  firstName: 'Vignesh',
  location: 'Boston, MA',
  email: 'vignesh2@bu.edu',
  phone: '(857) 506-2836',
  phoneHref: 'tel:+18575062836',
  calendly: 'https://calendly.com/vignesh2-bu/meeting-with-vignesh',
  socials: [
    { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/vignesh-swaminathan22' },
    { id: 'github', label: 'GitHub', href: 'https://github.com/vignesh0122' },
  ],
  resumes: [
    {
      id: 'pdf',
      label: 'Resume',
      format: 'PDF',
      note: 'AI / software engineering',
      href: '/resume/Vignesh_Swaminathan_Resume.pdf',
      filename: 'Vignesh_Swaminathan_Resume.pdf',
    },
    {
      id: 'docx',
      label: 'Resume',
      format: 'DOCX',
      note: 'Cloud / IT focus',
      href: '/resume/Vignesh_Swaminathan_Resume_MET.docx',
      filename: 'Vignesh_Swaminathan_Resume_MET.docx',
    },
  ],
  summary: {
    default:
      'Engineer with 2+ years across backend development, cloud application engineering, and large-scale AI system evaluation. MS in Computer Science from Boston University.',
    ai: 'AI / software engineer with hands-on LLM integration (Claude, OpenAI GPT, Gemini), evaluation pipelines, and ML tooling across Python and JavaScript. MS in Computer Science from Boston University.',
    cloud:
      'IT professional with 2+ years supporting cloud services, enterprise applications, reporting platforms, and business automation at Boston University: Azure, Microsoft 365, Power Platform, Power BI, SQL, and ServiceNow.',
    research:
      'Research Fellow in Law, AI Governance & Tech Policy at BU School of Law, benchmarking LLM reliability and building verification workflows. Two peer-reviewed publications.',
  },
}
