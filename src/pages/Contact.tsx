import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We\'ll get back to you soon.',
    });

    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            We're here to help! Send us your questions, feedback, or suggestions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Send className="mr-3 h-6 w-6 text-primary" />
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="text-lg"
                    placeholder="Your name"
                    aria-label="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-lg"
                    placeholder="your.email@example.com"
                    aria-label="Your email address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-lg">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="min-h-[150px] text-lg resize-none"
                    placeholder="How can we help you?"
                    aria-label="Your message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Support Information */}
          <div className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-primary" />
                  Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg">
                <p className="text-muted-foreground">
                  Our support team is available to assist you with:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Technical issues and troubleshooting</li>
                  <li>• Feature requests and suggestions</li>
                  <li>• Accessibility questions</li>
                  <li>• General inquiries</li>
                </ul>
                <div className="pt-4 border-t">
                  <p className="font-medium mb-2">Response Time:</p>
                  <p className="text-muted-foreground">
                    We typically respond within 24-48 hours during business days.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageCircle className="mr-3 h-6 w-6 text-primary" />
                  Feedback
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg">
                <p className="text-muted-foreground">
                  Your feedback helps us improve! Please share:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• What features you'd like to see</li>
                  <li>• How we can make the assistant more helpful</li>
                  <li>• Your experience using the platform</li>
                  <li>• Any accessibility improvements needed</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 bg-accent">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-3">Privacy Note</h3>
                <p className="text-muted-foreground">
                  We respect your privacy. Your contact information is only used to respond
                  to your inquiry and is never shared with third parties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
