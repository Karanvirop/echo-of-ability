import { Settings, Type, Eye, Keyboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useAccessibility } from '@/contexts/AccessibilityContext';

export const AccessibilityToolbar = () => {
  const { highContrast, textSize, keyboardNav, toggleHighContrast, setTextSize, toggleKeyboardNav } =
    useAccessibility();

  return (
    <div className="fixed top-4 right-4 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="lg"
            className="shadow-lg"
            aria-label="Open accessibility settings"
          >
            <Settings className="h-5 w-5" />
            <span className="ml-2">Accessibility</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80" align="end">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Accessibility Settings</h3>
            </div>

            {/* High Contrast Toggle */}
            <div className="flex items-center justify-between space-x-2">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <Label htmlFor="high-contrast" className="cursor-pointer">
                  High Contrast Mode
                </Label>
              </div>
              <Switch
                id="high-contrast"
                checked={highContrast}
                onCheckedChange={toggleHighContrast}
                aria-label="Toggle high contrast mode"
              />
            </div>

            {/* Text Size Selection */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Type className="h-4 w-4" />
                <Label>Text Size</Label>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={textSize === 'normal' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTextSize('normal')}
                  className="flex-1"
                  aria-pressed={textSize === 'normal'}
                >
                  Normal
                </Button>
                <Button
                  variant={textSize === 'large' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTextSize('large')}
                  className="flex-1"
                  aria-pressed={textSize === 'large'}
                >
                  Large
                </Button>
                <Button
                  variant={textSize === 'xl' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTextSize('xl')}
                  className="flex-1"
                  aria-pressed={textSize === 'xl'}
                >
                  XL
                </Button>
              </div>
            </div>

            {/* Keyboard Navigation */}
            <div className="flex items-center justify-between space-x-2">
              <div className="flex items-center space-x-2">
                <Keyboard className="h-4 w-4" />
                <Label htmlFor="keyboard-nav" className="cursor-pointer">
                  Keyboard Navigation
                </Label>
              </div>
              <Switch
                id="keyboard-nav"
                checked={keyboardNav}
                onCheckedChange={toggleKeyboardNav}
                aria-label="Toggle keyboard navigation"
              />
            </div>

            <p className="text-sm text-muted-foreground">
              These settings are saved automatically and will persist across sessions.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
