import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mic, Type, Volume2, Settings, MessageCircle } from 'lucide-react';

const Guide = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">How to Use the Assistant</h1>
          <p className="text-xl text-muted-foreground">
            Simple steps to get started with your AI Voice Assistant
          </p>
        </div>

        <div className="space-y-8">
          {/* Getting Started */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <MessageCircle className="mr-3 h-6 w-6 text-primary" />
                Getting Started
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="space-y-4 list-decimal list-inside text-lg">
                <li className="text-muted-foreground">
                  Navigate to the{' '}
                  <Link to="/assistant" className="text-primary hover:underline font-medium">
                    Assistant page
                  </Link>
                </li>
                <li className="text-muted-foreground">
                  Choose your preferred input method: voice or text
                </li>
                <li className="text-muted-foreground">
                  Ask your question or give a command
                </li>
                <li className="text-muted-foreground">
                  The assistant will respond both in text and voice
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Voice Input */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Mic className="mr-3 h-6 w-6 text-primary" />
                Using Voice Input
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-lg">
                Voice input allows you to speak naturally to the assistant:
              </p>
              <ol className="space-y-3 list-decimal list-inside text-lg">
                <li className="text-muted-foreground">
                  Click the "Use Voice" button with the microphone icon
                </li>
                <li className="text-muted-foreground">
                  When you see "Listening... Speak now", start speaking clearly
                </li>
                <li className="text-muted-foreground">
                  The assistant will automatically detect when you've finished
                </li>
                <li className="text-muted-foreground">
                  Your speech will be converted to text and sent automatically
                </li>
              </ol>
              <div className="bg-accent p-4 rounded-lg mt-4">
                <p className="font-medium mb-2">Tips for better recognition:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Speak clearly and at a moderate pace</li>
                  <li>• Minimize background noise</li>
                  <li>• Use complete sentences</li>
                  <li>• Pause briefly between different thoughts</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Text Input */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Type className="mr-3 h-6 w-6 text-primary" />
                Using Text Input
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-lg">
                Type your questions or commands:
              </p>
              <ol className="space-y-3 list-decimal list-inside text-lg">
                <li className="text-muted-foreground">
                  Click in the text box and type your message
                </li>
                <li className="text-muted-foreground">
                  Press Enter or click the "Send" button
                </li>
                <li className="text-muted-foreground">
                  The assistant will respond in both text and voice
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Voice Response */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Volume2 className="mr-3 h-6 w-6 text-primary" />
                Voice Responses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-lg">
                The assistant speaks its responses automatically:
              </p>
              <ul className="space-y-3 list-disc list-inside text-lg text-muted-foreground">
                <li>Responses are read aloud immediately</li>
                <li>You can also read the text response in the chat</li>
                <li>Click "Stop Speaking" if you want to stop the audio</li>
                <li>Adjust your device volume for comfortable listening</li>
              </ul>
            </CardContent>
          </Card>

          {/* Accessibility */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Settings className="mr-3 h-6 w-6 text-primary" />
                Accessibility Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-lg">
                Customize your experience with accessibility options:
              </p>
              <ul className="space-y-3 list-disc list-inside text-lg text-muted-foreground">
                <li>Click the "Accessibility" button in the top-right corner</li>
                <li>Toggle High Contrast Mode for better visibility</li>
                <li>Adjust text size (Normal, Large, or XL)</li>
                <li>Enable enhanced keyboard navigation</li>
                <li>All settings are saved automatically</li>
              </ul>
            </CardContent>
          </Card>

          {/* Example Interactions */}
          <Card className="border-2 bg-accent">
            <CardHeader>
              <CardTitle className="text-2xl">Example Interactions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-lg mb-4">
                Try these example questions to get started:
              </p>
              <div className="space-y-3">
                <div className="bg-card p-4 rounded-lg">
                  <p className="font-medium mb-1">"What's the weather like today?"</p>
                  <p className="text-sm text-muted-foreground">Get current weather information</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <p className="font-medium mb-1">"Remind me to take my medication at 3 PM"</p>
                  <p className="text-sm text-muted-foreground">Set helpful reminders</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <p className="font-medium mb-1">"Tell me an interesting fact"</p>
                  <p className="text-sm text-muted-foreground">Learn something new</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <p className="font-medium mb-1">"Help me with my schedule"</p>
                  <p className="text-sm text-muted-foreground">Organize your day</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center pt-8">
            <Link to="/assistant">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Using the Assistant
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
