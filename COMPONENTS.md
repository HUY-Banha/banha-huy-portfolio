# Component Architecture

This portfolio uses a component-based architecture for better maintainability and reusability.

## Component Structure

### `/app/components/Navigation.tsx`
- Fixed navigation bar with smooth scrolling
- Links: About, Skills, Experience, Achievement
- Gradient logo with "Banha Huy" branding

### `/app/components/HeroSection.tsx`
- Profile image section
- Professional title: "Senior Mobile Developer & Project Coordinator"
- Three-paragraph bio highlighting:
  - 4 years of experience
  - Flutter/React Native expertise
  - 10+ deployed applications
  - Backend development with Laravel
  - Project coordination capabilities

### `/app/components/TechStackIcons.tsx`
**Props:** `{ icons: Array<{ src: string, alt: string, label: string }> }`
- Grid display of technology logos
- Hover animations with scale effect
- Supports 9 tech icons: Flutter, React Native, Dart, Laravel, Node.js, Firebase, MySQL, Figma, GitHub

### `/app/components/SkillCard.tsx`
**Props:** `{ title: string, skills: string[], color: 'blue' | 'purple' | 'pink' | 'indigo' | 'teal' }`
- Reusable skill category card
- Color-themed badges
- 5 color variants for visual distinction
- Hover shadow effects

**Usage:**
```tsx
<SkillCard title="Mobile Frameworks" skills={skills.mobile} color="blue" />
```

### `/app/components/ExperienceCard.tsx`
**Props:** `{ title: string, company: string, period: string, achievements: string[] }`
- Work experience entry display
- Title and company name
- Period badge with date range
- Checkmark bullets for achievements
- Hover scale animation

**Usage:**
```tsx
<ExperienceCard 
  title="Software Developer"
  company="NIPH"
  period="November 2024 - August 2025"
  achievements={["Built cross-platform apps", "..."]}
/>
```

### `/app/components/ProjectCard.tsx`
**Props:** `{ name: string, tech: string, role: string, description: string, image: string }`
- Project showcase card with image preview
- Hover zoom effect on image
- Tech stack display
- Role badge (e.g., "Mobile Developer", "Project Coordinator")
- Description with line clamping (3 lines max)
- Icon badge generated from first 2 letters of project name

**Usage:**
```tsx
<ProjectCard 
  name="HongKong Shop"
  tech="Flutter, GetX, Firebase"
  role="Mobile Developer"
  description="E-commerce app with payment integration"
  image="/assets/work-hongkongapp.png"
/>
```

### `/app/components/Footer.tsx`
- Contact section with centered layout
- Email link (mailto:banhahuy.official@gmail.com)
- CV download button with PDF file
- Gradient buttons with hover effects

## Main Page Structure

The `/app/page.tsx` file now uses these components:

```tsx
<Navigation />

<HeroSection />

<TechStackIcons icons={techIcons} />

<SkillCard title="..." skills={[...]} color="blue" />
<!-- PM Skills section (inline) -->
<!-- Additional Skills section (inline) -->

{experiences.map(exp => <ExperienceCard {...exp} />)}

{projects.map(project => <ProjectCard {...project} />)}

<Footer />
```

## Data Structure

### Tech Icons Array
```tsx
const techIcons = [
  { src: "/assets/flutter-svgrepo-com.svg", alt: "Flutter", label: "Flutter" },
  // ... 8 more icons
];
```

### Skills Object
```tsx
const skills = {
  mobile: ["Flutter (Dart)", "React Native", "Cross-platform Development"],
  backend: ["PHP (Laravel)", "Node.js", "RESTful API Design", "API Integration"],
  database: ["MySQL", "PostgreSQL", "SQLite", "Firebase (Auth, Firestore, FCM)"],
  devops: ["Git", "GitHub", "Figma", "App Store/Google Play Deployment", "Deep Linking"],
  architecture: ["Custom Widgets", "State Management (GetX, Provider)", "..."]
};
```

### PM Skills Object
```tsx
const pmSkills = {
  methodology: ["Agile/Scrum", "Project Coordination", "Team Mentorship", "Code Reviews"],
  documentation: ["Comprehensive Documentation", "Technical Report Generation", "Client Training"],
  communication: ["Stakeholder Communication", "Client Liaison", "..."]
};
```

### Experiences Array
```tsx
const experiences = [
  {
    title: "Application Support Officer",
    company: "Wing Bank",
    period: "August 2025 - Present",
    achievements: ["Achievement 1", "Achievement 2", "..."]
  },
  // ... 4 more experiences
];
```

### Projects Array
```tsx
const projects = [
  {
    name: "HongKong Shop",
    tech: "Flutter, GetX, RESTful API, Firebase, ABA/COD Payment Gateway",
    role: "Mobile Developer",
    description: "E-commerce app description...",
    image: "/assets/work-hongkongapp.png"
  },
  // ... 9 more projects
];
```

## Benefits of Component Architecture

1. **Maintainability**: Each component has a single responsibility
2. **Reusability**: Components like `SkillCard` and `ExperienceCard` can be reused with different props
3. **Testability**: Individual components can be tested in isolation
4. **Scalability**: Easy to add new sections or modify existing ones
5. **Code Organization**: Clear separation of concerns with 299 lines (main page) vs 491 lines (monolithic)

## Future Enhancements

- Add PropTypes or TypeScript interfaces for better type safety
- Create components for PM Skills and Additional Skills sections
- Add animation components for fade-in effects
- Consider using React Context for theme management
- Add unit tests for each component
