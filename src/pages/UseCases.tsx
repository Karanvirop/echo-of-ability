import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Brain, Hand, Calendar, Book, MessageCircle } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: Eye,
      title: 'Visual Impairment Support',
      description: 'Read text aloud, describe surroundings, and navigate interfaces through voice commands.',
      examples: [
        'Reading emails, documents, and web content',
        'Identifying objects and colors',
        'Navigation assistance',
        'Text-to-speech for any content',
      ],
    },
    {
      icon: Brain,
      title: 'Memory Assistance',
      description: 'Set reminders, create notes, and maintain daily schedules to support memory challenges.',
      examples: [
        'Medication reminders',
        'Appointment notifications',
        'Daily routine assistance',
        'Task management and lists',
      ],
    },
    {
      icon: Hand,
      title: 'Hands-Free Operation',
      description: 'Complete tasks without physical interaction, perfect for mobility challenges.',
      examples: [
        'Voice-controlled device operation',
        'Making calls and sending messages',
        'Controlling smart home devices',
        'Setting timers and alarms',
      ],
    },
    {
      icon: Calendar,
      title: 'Daily Planning',
      description: 'Organize your day with voice-activated scheduling and time management.',
      examples: [
        'Creating and managing schedules',
        'Setting up recurring tasks',
        'Weather and news updates',
        'Personal assistance throughout the day',
      ],
    },
    {
      icon: Book,
      title: 'Learning Support',
      description: 'Access information and learn new things with patient, adaptive assistance.',
      examples: [
        'Explaining complex concepts simply',
        'Reading learning materials aloud',
        'Quiz and practice assistance',
        'Research and information lookup',
      ],
    },
    {
      icon: MessageCircle,
      title: 'Social Connection',
      description: 'Stay connected with conversational AI that provides companionship and support.',
      examples: [
        'Friendly conversation partner',
        'Emotional support',
        'Storytelling and entertainment',
        'Practice communication skills',
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Use Cases</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our AI Voice Assistant can make a difference in your daily life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{useCase.title}</CardTitle>
                      <p className="text-muted-foreground">{useCase.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-3 text-lg">Examples:</h3>
                  <ul className="space-y-2">
                    {useCase.examples.map((example, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2 font-bold">•</span>
                        <span className="text-muted-foreground">{example}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-accent p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Have a Specific Need?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our AI assistant is designed to be flexible and adaptive. If you have unique requirements
            or use cases not listed here, feel free to try them out or contact us for guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
