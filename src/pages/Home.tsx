import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Heart, Mic, Eye, Brain, HandHelping } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Your Voice-Powered Assistant
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Empowering independence through intelligent voice technology designed for everyone
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/assistant">
              <Button size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                <MessageCircle className="mr-2 h-5 w-5" />
                Try the Assistant
              </Button>
            </Link>
            <Link to="/guide">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                Learn How to Use
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Heart className="h-16 w-16 text-primary mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              We believe technology should be accessible to everyone. Our AI Voice Assistant
              is designed to break down barriers and provide independence to people with disabilities
              through intuitive voice commands and thoughtful design.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6 text-center space-y-4">
              <Mic className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Voice Control</h3>
              <p className="text-muted-foreground">
                Hands-free operation with natural voice commands for complete independence
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6 text-center space-y-4">
              <Eye className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">High Contrast</h3>
              <p className="text-muted-foreground">
                Adjustable contrast modes and text sizes for optimal visibility
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6 text-center space-y-4">
              <Brain className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Smart AI</h3>
              <p className="text-muted-foreground">
                Intelligent assistance that learns and adapts to your needs
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-accent py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Benefits</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-start space-x-4">
              <HandHelping className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Independence</h3>
                <p className="text-muted-foreground">
                  Perform daily tasks more easily with voice-activated help and reminders
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MessageCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Natural Communication</h3>
                <p className="text-muted-foreground">
                  Speak naturally - no need to memorize complex commands or syntax
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Brain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Personalized Experience</h3>
                <p className="text-muted-foreground">
                  The assistant adapts to your preferences and needs over time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Experience the freedom of voice-powered assistance designed with you in mind
          </p>
          <Link to="/assistant">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Using the Assistant
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
