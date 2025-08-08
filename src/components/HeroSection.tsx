import { useEffect, useState } from 'react';
import { ArrowRight, Star, Users, Award, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationStarted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: Users, value: '5000+', label: 'Students Guided' },
    { icon: Award, value: '98%', label: 'Success Rate' },
    { icon: Globe, value: '15+', label: 'Countries' },
    { icon: Star, value: '4.9/5', label: 'Rating' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwNjNiNmQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <div className={`fade-in-up ${animationStarted ? 'animate' : ''}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Gateway to{' '}
              <span className="hero-title">Global Education</span>
            </h1>
          </div>

          {/* Subheading */}
          <div className={`fade-in-up stagger-1 ${animationStarted ? 'animate' : ''}`}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light">
              Unlock premium education opportunities worldwide with Sri Lanka's most trusted 
              international education consultancy. From application to graduation, we're with you every step.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`fade-in-up stagger-2 ${animationStarted ? 'animate' : ''} flex flex-col sm:flex-row gap-4 justify-center items-center mb-16`}>
            <Button className="btn-primary group">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button className="btn-outline">
              Explore Courses
            </Button>
          </div>

          {/* Stats */}
          <div className={`scale-in stagger-3 ${animationStarted ? 'animate' : ''}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border/30">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-3 group-hover:bg-secondary/20 transition-colors">
                    <stat.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-secondary/10 rounded-full blur-3xl float"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/10 rounded-full blur-2xl float" style={{animationDelay: '4s'}}></div>
    </section>
  );
};

export default HeroSection;