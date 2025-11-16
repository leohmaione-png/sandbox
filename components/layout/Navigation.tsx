"use client";

import { cn } from "@/lib/utils";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: 'pentatonic', label: 'Pentatônica' },
  { id: 'greek-modes', label: 'Modos Gregos' },
  { id: 'exercises', label: 'Exercícios' },
  { id: 'progressions', label: 'Progressões' }
];

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className="text-xl font-bold">Guitar Notebook</div>
        <ul className="ml-auto flex gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
