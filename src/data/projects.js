export const projects = [
  {
    id: 'ai-text-detection',
    title: 'AI-Text Detection Benchmarking',
    subtitle: 'Legal exam corpus · detector evaluation',
    year: '2026',
    tagline: {
      default: 'Benchmarked AI-text detectors on a de-identified corpus of human- and AI-written legal exam answers.',
      cloud: 'Built a de-identified research corpus and an evaluation harness for AI-text detectors.',
      research: 'Measured detector accuracy and adversarial evasion against RLHF-based detection fingerprints.',
    },
    lens: { ai: 3, cloud: 1, research: 3 },
    stack: ['python', 'llm-eval', 'nlp', 'pandas', 'openai-api', 'claude-api', 'gemini-api'],
    metrics: [
      { value: 'Human + AI', label: 'paired answer corpus' },
      { value: 'RLHF', label: 'fingerprint evasion tested' },
    ],
    detail: {
      problem:
        'Law schools need to know whether AI-text detectors actually work on real exam answers, and how easily they can be evaded.',
      approach:
        'Built and de-identified a corpus of human-written and AI-generated legal exam answers, then ran leading detectors against it and evaluated adversarial evasion techniques targeting RLHF-based detection fingerprints.',
      outcome:
        'A reproducible benchmark of detector accuracy and robustness that informs academic-integrity policy work at BU School of Law.',
    },
    links: [],
  },
  {
    id: 'menu-match',
    title: 'Menu Match',
    subtitle: 'Restaurant discovery by dietary preference',
    year: '2025',
    tagline: {
      default: 'Django web app that recommends restaurants from dietary preferences using Google APIs, NLP, and ML.',
      ai: 'NLP and ML recommendation engine over Google Places data.',
      cloud: 'Dockerized Django app on AWS EC2 with a Jenkins CI/CD pipeline, tracked in Jira.',
    },
    lens: { ai: 2, cloud: 3, research: 1 },
    stack: ['python', 'django', 'google-apis', 'nlp', 'docker', 'aws-ec2', 'jenkins', 'git', 'jira'],
    metrics: [
      { value: 'CI/CD', label: 'Jenkins → Docker → EC2' },
      { value: 'NLP', label: 'review-driven recommendations' },
    ],
    detail: {
      problem:
        'Finding restaurants that fit specific dietary needs means reading through hundreds of reviews and menus.',
      approach:
        'Pulled restaurant and review data through Google Maps and Places APIs, applied NLP to surface dietary signals, and trained an ML recommender on top. Shipped as a Django app in Docker on AWS EC2 with a Jenkins CI/CD pipeline from GitHub, managed in Jira.',
      outcome:
        'A deployed, continuously delivered recommendation service with review and rating features.',
    },
    links: [],
  },
  {
    id: 'collider-scope',
    title: 'Collider Scope',
    subtitle: 'Distributed ML on particle-physics data',
    year: '2025',
    tagline: {
      default: 'PySpark and Databricks pipelines for large-scale particle-physics datasets, reaching AUC above 0.85.',
      cloud: 'Distributed data processing pipelines on Databricks with PySpark.',
      research: 'Scalable ML workflows over large collider datasets with AUC above 0.85.',
    },
    lens: { ai: 3, cloud: 2, research: 2 },
    stack: ['pyspark', 'spark', 'databricks', 'python', 'scikit-learn', 'etl', 'data-viz'],
    metrics: [{ value: '>0.85', label: 'AUC score' }],
    detail: {
      problem:
        'Particle-physics event data is too large for single-machine ML workflows and needs distributed feature engineering.',
      approach:
        'Built PySpark pipelines on Databricks to ingest, clean, and featurize large-scale collider datasets, then trained and evaluated classifiers at scale.',
      outcome: 'A scalable ML workflow that reached an AUC above 0.85 on the classification task.',
    },
    links: [{ label: 'GitHub', href: 'https://github.com/vignesh0122/vignesh0122-METCS777-Term-project-LHCscope-Team13' }],
  },
  {
    id: 'safe-drive',
    title: 'Safe Drive',
    subtitle: 'Traffic accident severity prediction',
    year: '2025',
    tagline: {
      default: 'ETL and severity-prediction pipelines over 7.7 million US accident records with Spark on AWS.',
      cloud: 'Spark on AWS EMR with S3-backed ETL pipelines for ingestion, cleansing, and training.',
      research: 'Feature engineering and modeling over 7.7M accident records.',
    },
    lens: { ai: 2, cloud: 3, research: 2 },
    stack: ['spark', 'pyspark', 'aws-emr', 'aws-s3', 'python', 'etl', 'pandas'],
    metrics: [{ value: '7.7M', label: 'accident records processed' }],
    detail: {
      problem:
        'Predicting accident severity requires processing millions of heterogeneous records before any modeling can start.',
      approach:
        'Built scalable ETL pipelines with Apache Spark and PySpark on AWS EMR, backed by S3, for ingestion, cleansing, feature engineering, and model training.',
      outcome: 'A reproducible pipeline over 7.7 million records that feeds severity-prediction models.',
    },
    links: [],
  },
  {
    id: 'law-run-kernel',
    title: 'Law-Run Kernel',
    subtitle: 'Custom Linux kernel for Snapdragon 845',
    year: '2023',
    tagline: {
      default: 'A custom Linux 4.9 kernel for Qualcomm Snapdragon 845 devices, merging CAF sources with upstream patches.',
      cloud: 'Maintained a Linux 4.9 kernel tree with CAF sources, upstream patches, and a security driver.',
    },
    lens: { ai: 1, cloud: 2, research: 1 },
    stack: ['c', 'linux-kernel', 'linux', 'git', 'android'],
    metrics: [
      { value: '4.9', label: 'Linux kernel base' },
      { value: 'SD845', label: 'target SoC' },
    ],
    detail: {
      problem:
        'Snapdragon 845 devices shipped with vendor kernels that lagged upstream Linux security and performance fixes.',
      approach:
        'Combined Qualcomm CAF sources with upstream Linux patches, added a security driver, and maintained the tree on GitHub for community builds.',
      outcome: 'A published, community-used custom kernel for Snapdragon 845 devices.',
    },
    links: [{ label: 'GitHub', href: 'https://github.com/vignesh0122/LawRun_xiaomi_sdm845_CAF' }],
  },
]
