export const LENS_IDS = ['ai', 'cloud', 'research']

export const LENSES = [
  {
    id: 'ai',
    label: 'AI Engineer',
    short: 'AI',
    hotkey: '1',
    hero: {
      headline: 'I build and evaluate LLM systems.',
      tagline:
        'Benchmarks, verification pipelines, and ML products, from research notebooks to production APIs.',
    },
    stats: [
      { value: '+30%', label: 'LLM evaluation consistency' },
      { value: '3', label: 'LLM APIs in production pipelines' },
      { value: '>0.85', label: 'AUC on particle-physics ML' },
    ],
    intros: {
      experience: 'Where I shipped AI and backend systems, ranked by relevance to AI engineering.',
      projects: 'ML, NLP, and evaluation work first. Infrastructure projects follow.',
      skills: 'LLM engineering and data tooling up front. Hover a skill to see where it was used.',
      publications: 'Peer-reviewed work on applied AI.',
      contact: 'Building an AI team? Let’s talk about evaluation, RAG, and agents.',
    },
  },
  {
    id: 'cloud',
    label: 'Cloud & IT',
    short: 'Cloud',
    hotkey: '2',
    hero: {
      headline: 'I automate the enterprise stack.',
      tagline:
        'Azure, Microsoft 365, Power Platform, and ServiceNow: built, secured, and supported at Boston University.',
    },
    stats: [
      { value: '+40%', label: 'process efficiency after Dataverse migration' },
      { value: '−25%', label: 'average ticket resolution time' },
      { value: '2 yrs', label: 'at Boston University MET IT' },
    ],
    intros: {
      experience: 'Cloud, Microsoft 365, and ITSM work first.',
      projects: 'Deployment, pipelines, and systems projects first.',
      skills: 'Cloud, Power Platform, and security tooling up front. Hover a skill to see where it was used.',
      publications: 'Peer-reviewed work on applied AI and security.',
      contact: 'Need someone who can build the app and run the platform? Say hi.',
    },
  },
  {
    id: 'research',
    label: 'Research',
    short: 'Research',
    hotkey: '3',
    hero: {
      headline: 'I study how AI systems fail, and how to verify them.',
      tagline:
        'Research Fellow in Law, AI Governance & Tech Policy at Boston University School of Law. Two peer-reviewed publications.',
    },
    stats: [
      { value: '2', label: 'peer-reviewed publications' },
      { value: '3', label: 'LLM families benchmarked' },
      { value: '7.7M', label: 'records in the largest dataset' },
    ],
    intros: {
      experience: 'Research and empirical evaluation work first.',
      projects: 'Benchmarking and large-scale data analysis first.',
      skills: 'Evaluation, data, and ML tooling up front. Hover a skill to see where it was used.',
      publications: 'Conference papers and certifications.',
      contact: 'Open to research collaborations on AI reliability and governance.',
    },
  },
]

export const lensById = Object.fromEntries(LENSES.map((l) => [l.id, l]))
