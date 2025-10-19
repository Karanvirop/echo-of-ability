import { Link, useLocation } from 'react-router-dom';
import { Home, MessageCircle, Info, Mail, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/assistant', icon: MessageCircle, label: 'Assistant' },
    { to: '/use-cases', icon: Info, label: 'Use Cases' },
    { to: '/guide', icon: BookOpen, label: 'Guide' },
    { to: '/contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-40 shadow-sm" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 font-bold text-xl text-primary hover:text-primary-hover transition-colors">
            <MessageCircle className="h-6 w-6" />
            <span>AI Voice Assistant</span>
          </Link>

          <ul className="flex space-x-1" role="menubar">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.to;
              
              return (
                <li key={item.to} role="none">
                  <Link
                    to={item.to}
                    role="menuitem"
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'flex items-center space-x-2 px-4 py-2 rounded-md transition-colors text-sm font-medium',
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
