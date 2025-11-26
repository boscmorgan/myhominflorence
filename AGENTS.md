# Agents Instructions - Lorenzo & Lorenzo Website

## Project Overview

This is a single-page accommodation website for **Lorenzo & Lorenzo Rooms & Apartments** (myhomeinflorence.com) based in Florence, Tuscany. The site links to Airbnb and Booking.com for room reservations.

**Primary Language**: Italian  
**Secondary Language**: English  
**Additional Languages**: Spanish, Russian, Chinese

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn-ui components
- **Internationalization**: i18next + react-i18next
- **Router**: React Router DOM
- **State Management**: React Query (TanStack Query)

## Critical Business Rules

### Contact Information
- **ALL contact emails MUST use**: `lorenzoelorenzo@libero.it`
- **NEVER use**: `info@myhomeinflorence.com`

### Accommodation Tax Messaging
- Present as "from €6 onwards" without fixed pricing
- Always specify users must call for detailed pricing
- Never show exact tax amounts

### Brand Identity
- Business name: **Lorenzo & Lorenzo Rooms & Apartments**
- Domain: myhomeinflorence.com
- Logo: Use 3D logo from `src/assets/logo.jpeg`

## Design System - CRITICAL RULES

### Color System
**NEVER use direct colors like `text-white`, `bg-black`, `text-gray-500` in components!**

✅ **CORRECT - Use semantic tokens:**
```tsx
<div className="bg-background text-foreground">
<Button variant="primary" className="text-primary-foreground">
<footer className="bg-teal text-teal-foreground">
```

❌ **WRONG - Direct color usage:**
```tsx
<div className="bg-white text-black">
<Button className="bg-blue-500 text-white">
<footer className="bg-gray-900">
```

### Semantic Color Tokens (Always Use These)
From `src/index.css`:
- `--background` - Main background color
- `--foreground` - Text on background surfaces
- `--primary` - Main brand color
- `--primary-foreground` - Text on primary surfaces
- `--secondary` - Secondary UI surface color
- `--secondary-foreground` - Text on secondary surfaces
- `--teal` - Custom teal brand color (footer, accents)
- `--teal-foreground` - Text on teal surfaces
- `--muted` / `--muted-foreground` - Muted surfaces and texts
- `--accent` / `--accent-foreground` - Accent colors
- `--border` - Border colors
- `--card` / `--card-foreground` - Card components

### Color Format Requirements
- **ALL colors MUST be in HSL format** in `src/index.css` and `tailwind.config.ts`
- Define colors as HSL values: `220 13% 91%` (without `hsl()` wrapper in CSS variables)
- Reference in Tailwind as: `hsl(var(--background))`

### Typography
- **Hero Title Font**: Teko (Google Font) - Bold, large, impactful
- **Body Text**: Default system font stack
- Always ensure proper font-weight and line-height for readability

## Component Architecture

### Component Structure
✅ **CORRECT - Small, focused components:**
```
src/components/
  ├── HeroSection.tsx        (Single responsibility)
  ├── RoomsSection.tsx       (Container)
  ├── RoomCard.tsx          (Reusable card component)
  ├── Navbar.tsx            (Navigation only)
  └── Footer.tsx            (Footer only)
```

❌ **WRONG - Monolithic components:**
```
src/components/
  └── HomePage.tsx          (Everything in one 500+ line file)
```

### shadcn-ui Components
- Located in `src/components/ui/`
- **CAN and SHOULD be customized** with variants
- Modify `buttonVariants` in `button.tsx` to add new variants
- Create variants using design system tokens

**Example - Adding custom button variant:**
```tsx
const buttonVariants = cva(
  "...",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        teal: "bg-teal text-teal-foreground hover:bg-teal/90", // Custom variant
      }
    }
  }
);
```

### File Organization Rules
1. **One component per file** (unless tightly coupled)
2. **Keep files under 200 lines** when possible
3. **Extract reusable logic** into hooks (`src/hooks/`)
4. **Shared utilities** go in `src/lib/`
5. **Type definitions** can be inline or in separate `.types.ts` files

## Coding Standards

### TypeScript
- **Always use TypeScript** - no `.jsx` or `.js` files
- Define proper interfaces/types for props
- Use type inference where obvious
- Avoid `any` - use `unknown` if type is truly unknown

### React Best Practices
```tsx
// ✅ Use functional components with hooks
const MyComponent = () => {
  const [state, setState] = useState<string>('');
  
  return <div className="bg-background">...</div>;
};

// ✅ Proper prop typing
interface MyComponentProps {
  title: string;
  onAction?: () => void;
}

// ✅ Use semantic HTML
<main className="container">
  <section className="py-12">
    <article className="card">
```

### Internationalization (i18n)
```tsx
// ✅ Always use translation keys
const { t } = useTranslation();
<h1>{t('hero.title')}</h1>

// ❌ Never hardcode text
<h1>Welcome to Florence</h1>
```

**Translation files**: `src/i18n/locales/{locale}.json`
- Organized by section: `hero.*`, `rooms.*`, `footer.*`, etc.
- Keep keys descriptive and hierarchical

### Imports Organization
```tsx
// 1. React and external libraries
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// 2. Components
import { Button } from '@/components/ui/button';
import { RoomCard } from '@/components/RoomCard';

// 3. Utilities and types
import { cn } from '@/lib/utils';

// 4. Assets
import heroImage from '@/assets/hero-reception.jpg';
```

## Styling Guidelines

### Tailwind CSS Best Practices
```tsx
// ✅ Use semantic tokens and utility classes
<div className="bg-background text-foreground rounded-lg shadow-md p-6">

// ✅ Use cn() utility for conditional classes
<div className={cn(
  "base-classes",
  isActive && "active-classes",
  className // Allow prop override
)}>

// ✅ Responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Design System Customization
When you need custom styles:

1. **Add to `src/index.css`** - Define semantic tokens
```css
:root {
  --custom-accent: 200 70% 50%;
}
```

2. **Add to `tailwind.config.ts`** - Make available in Tailwind
```ts
colors: {
  'custom-accent': 'hsl(var(--custom-accent))',
}
```

3. **Use in components** - Reference semantic token
```tsx
<div className="bg-custom-accent">
```

## Animation and Interactions

### Animations
- Use Tailwind animation utilities: `animate-fade-in`, `animate-slide-in`
- Define custom animations in `tailwind.config.ts` if needed
- Keep animations subtle and purposeful
- Consider reduced motion preferences

### Hero Welcome Text Animation
The welcome text cycles through languages using `useEffect` and `setInterval`:
```tsx
const languages = ['en', 'it', 'es', 'ru', 'zh'];
const [langIndex, setLangIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setLangIndex((prev) => (prev + 1) % languages.length);
  }, 2000);
  return () => clearInterval(interval);
}, []);
```

## Asset Management

### Images
- **Location**: `src/assets/`
- **Import as ES6 modules**: `import image from '@/assets/image.jpg'`
- **Always add descriptive alt text** for SEO and accessibility
- **Optimize images** before adding (compress, resize appropriately)

### Supported Formats
- `.jpg`, `.jpeg` - Photos, complex images
- `.png` - Logos, graphics with transparency
- `.avif`, `.webp` - Modern formats for better compression

## State Management

### Local State
```tsx
// ✅ Use useState for component-local state
const [isOpen, setIsOpen] = useState(false);
```

### Shared State
```tsx
// ✅ Use React Query for server state
const { data, isLoading } = useQuery({
  queryKey: ['rooms'],
  queryFn: fetchRooms,
});
```

### Context (when needed)
```tsx
// ✅ For truly global UI state (theme, language)
const { i18n } = useTranslation();
```

## Forms and Validation

### Form Handling
- Use `react-hook-form` for complex forms
- Use `zod` for validation schemas
- Provide clear error messages in user's language

## Performance Best Practices

1. **Code Splitting** - Use React.lazy() for route-based splitting
2. **Image Optimization** - Use appropriate formats and sizes
3. **Memoization** - Use `useMemo`/`useCallback` judiciously
4. **Lazy Loading** - Load images below the fold lazily

## SEO Requirements

### Every Page Must Have
```tsx
<Helmet>
  <title>Lorenzo & Lorenzo - Rooms & Apartments in Florence</title>
  <meta name="description" content="Under 160 characters with keywords" />
  <link rel="canonical" href="https://myhomeinflorence.com" />
</Helmet>
```

### Semantic HTML
- Single `<h1>` per page with main keyword
- Use `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`
- All images need descriptive `alt` attributes

## Testing Checklist

Before considering work complete:

- [ ] All text uses i18n translations (no hardcoded strings)
- [ ] All colors use semantic tokens (no direct color classes)
- [ ] Contact emails use `lorenzoelorenzo@libero.it`
- [ ] Accommodation tax shows "from €6 onwards" with call instruction
- [ ] Responsive on mobile, tablet, desktop
- [ ] Dark/light mode compatible
- [ ] Images have descriptive alt text
- [ ] Console has no errors or warnings
- [ ] TypeScript has no errors
- [ ] All links open correctly (external links with `target="_blank" rel="noopener noreferrer"`)

## Common Pitfalls to Avoid

❌ **Don't**: Use inline styles
❌ **Don't**: Hardcode text strings
❌ **Don't**: Use direct color values (`text-white`, `bg-blue-500`)
❌ **Don't**: Create monolithic 500+ line components
❌ **Don't**: Mix RGB and HSL color formats
❌ **Don't**: Forget to handle loading and error states
❌ **Don't**: Skip TypeScript types
❌ **Don't**: Use wrong contact email

✅ **Do**: Use semantic tokens from design system
✅ **Do**: Use i18n for all user-facing text
✅ **Do**: Create small, focused components
✅ **Do**: Use HSL colors consistently
✅ **Do**: Handle edge cases gracefully
✅ **Do**: Type everything properly
✅ **Do**: Follow business rules (contact email, tax messaging)

## File Structure Reference

```
src/
├── assets/           # Images, fonts, static files
├── components/       # React components
│   ├── ui/          # shadcn-ui components (customizable)
│   ├── HeroSection.tsx
│   ├── RoomsSection.tsx
│   ├── RoomCard.tsx
│   └── ...
├── hooks/           # Custom React hooks
├── i18n/            # Internationalization
│   ├── config.ts
│   └── locales/
│       ├── en.json
│       ├── it.json
│       ├── es.json
│       ├── ru.json
│       └── zh.json
├── lib/             # Utilities and helpers
│   ├── utils.ts
│   └── booking.ts
├── pages/           # Page components
│   ├── Index.tsx
│   └── NotFound.tsx
├── App.tsx          # Root component
├── main.tsx         # Entry point
└── index.css        # Global styles and CSS variables
```

## Updating This Document

When Lovable's architecture, structure, or design patterns change:

1. Update this `AGENTS.md` file immediately
2. Document the change and reasoning
3. Update examples to reflect new patterns
4. Add migration notes if breaking changes
5. Keep the "What Changed" section below updated

## What Changed - Version History

### 2025-11-26
- Initial creation
- Established design system rules (HSL colors, semantic tokens)
- Documented business rules (contact email, tax messaging)
- Added component architecture guidelines
- Added i18n requirements
- Added Teko font for hero section

---

**Remember**: Consistency is key. Follow these guidelines to maintain a high-quality, maintainable codebase that aligns with Lovable's best practices and the Lorenzo & Lorenzo brand identity.
