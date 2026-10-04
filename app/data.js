export const projects = [
  {
    id: 'nintendo', name: 'Copilot + ServiceNow', category: 'Nintendo of America',
    description: 'An integration connecting Microsoft Copilot with ServiceNow through Azure and REST APIs.',
    stack: ['Microsoft Copilot', 'ServiceNow', 'Azure', 'REST APIs'],
    challenge: 'Troubleshot authentication across the integration, tested it, and documented deployment and handoff.',
    github: null,
  },
  {
    id: 'apexys', name: 'Apexys', category: 'Financial analytics',
    description: 'A financial analytics platform with REST APIs, JWT authentication, and SnapTrade integration.',
    stack: ['Python', 'Express.js', 'REST APIs', 'JWT', 'SnapTrade'],
    challenge: '[TODO] Add one specific problem solved in the SnapTrade integration or authentication flow.',
    github: null,
  },
  {
    id: 'apartmate', name: 'ApartMate', category: 'HCI + generative AI',
    description: 'An HCI and generative AI project that prototypes connecting apartment neighbors through shared interests, messaging, and item requests.',
    stack: ['React', 'TypeScript', 'Vite', 'HCI', 'Generative AI'],
    challenge: 'Implemented shared-interest filtering to surface relevant neighbor profiles in the prototype.',
    github: 'https://github.com/athenabao/Apartmate-App',
  },
  {
    id: 'foodtrack', name: 'FoodTrack', category: 'Mobile application',
    description: 'A React Native app with an Express backend and DynamoDB storage: [TODO] add what it tracks.',
    stack: ['React Native', 'Express', 'DynamoDB'],
    challenge: '[TODO] Add one specific mobile, API, or data storage problem solved.',
    github: 'https://github.com/athenabao/FoodTrack',
  },
  {
    id: 'safety-first', name: 'Safety First', category: 'Data visualization',
    description: 'Interactive charts for exploring vehicle characteristics and traffic safety data.',
    stack: ['JavaScript', 'D3.js', 'Vega-Lite'],
    challenge: 'Added filtering, aggregation, and comparisons to make large datasets easier to explore.',
    github: null,
  },
  {
    id: 'stanley', name: 'Cloud migration + SSO', category: 'Stanley 1913',
    description: 'A migration from tape backups to Azure, alongside SAML and OIDC single sign-on for SaaS apps.',
    stack: ['Azure Blob Storage', 'Data Factory', 'Entra ID', 'SAML', 'OIDC'],
    challenge: 'Moved legacy tape backups into Azure Blob Storage using Data Factory and configured SaaS authentication in Entra ID.',
    github: null,
  },
];

// Add a photo and coordinates here to include another destination on the map and in the quiz.
export const places = [
  {
    id: 'new-york', name: 'New York City, USA', coordinates: [40.7115, -74.0134],
    photo: '/photos/one-world-trade.jpg', alt: 'Athena at the 9/11 Memorial with One World Trade Center behind her',
    caption: 'At the 9/11 Memorial with One World Trade Center overhead.',
  },
  {
    id: 'met', name: 'The Met, New York City', coordinates: [40.7794, -73.9632],
    photo: '/photos/museum-gallery.jpg', alt: 'Athena in a museum gallery with framed artworks',
    caption: 'A museum afternoon in New York City.',
  },
  {
    id: 'red-rock', name: 'Red Rock Canyon, Nevada', coordinates: [36.1350, -115.4270],
    photo: '/photos/red-rock-canyon.jpg', alt: 'Athena standing among red sandstone formations at Red Rock Canyon',
    caption: 'Hiking through the sandstone at Red Rock Canyon.',
  },
];

export const gallery = [
  { ...places[0], category: 'Travel' },
  {
    id: 'running', name: 'Seattle Half Marathon', photo: '/photos/half-marathon.jpg',
    alt: 'Athena holding a medal after the Seattle Half Marathon', category: 'Running',
    caption: 'After finishing the Seattle Half Marathon.',
  },
  { ...places[1], category: 'Museum' },
  { ...places[2], category: 'Travel' },
];

export const experience = [
  {
    dates: 'Jun – Aug 2026', role: 'Microsoft 365 Engineer Intern', org: 'Nintendo of America',
    description: 'Integrated Microsoft Copilot with ServiceNow using Azure and REST APIs. Troubleshot authentication, tested the integration, and wrote deployment and handoff documentation.',
  },
  {
    dates: 'Jan 2026 – Present', role: 'Student Technician Assistant', org: 'UW Department of Medicine',
    description: 'Image and configure desktops and laptops for faculty and staff, deploy secure system images, and help with hardware and software setup.',
  },
  {
    dates: 'Jun – Sep 2025', role: 'Cloud Engineer Intern', org: 'Stanley 1913',
    description: 'Migrated tape backups to Azure Blob Storage using Data Factory. Configured SAML/OIDC SSO in Entra ID, resolved cloud and network tickets, and wrote training documentation.',
  },
  {
    dates: 'Jun 2024 – Jun 2026', role: 'Former President, Women in Computing', org: 'Paul G. Allen School',
    description: 'Supported Women in Computing community programming at UW, including networking dinners, speaker panels, and career events.',
  },
  {
    dates: 'Sep 2023 – Dec 2026', role: 'B.S. Computer Science, Business minor', org: 'University of Washington · Paul G. Allen School',
    description: 'Senior, graduating December 2026. Coursework includes data structures, data management, computer security, and artificial intelligence.',
  },
];
