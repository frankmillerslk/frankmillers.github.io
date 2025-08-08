import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Target, Eye, Heart, Award, Users, Globe, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const milestones = [
    { year: '2010', title: 'Founded', description: 'Established as Sri Lanka\'s premier education consultancy' },
    { year: '2015', title: 'Global Expansion', description: 'Partnerships with 50+ universities worldwide' },
    { year: '2020', title: 'Digital Innovation', description: 'Launched comprehensive online guidance platform' },
    { year: '2024', title: 'Excellence Recognition', description: '5000+ successful student placements globally' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We pursue the highest standards in education consulting and student guidance.'
    },
    {
      icon: Heart,
      title: 'Student-First',
      description: 'Every decision we make is centered around our students\' success and wellbeing.'
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'We connect local talent with worldwide opportunities for boundless growth.'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Transparent, honest guidance built on trust and professional ethics.'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering Dreams for{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Over a Decade
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From humble beginnings to becoming Sri Lanka's most trusted education consultancy, 
            our journey has been defined by student success stories and unwavering commitment to excellence.
          </p>
        </div>

        {/* Story Timeline */}
        <div className={`mb-20 fade-in-up stagger-1 ${isVisible ? 'animate' : ''}`}>
          <h3 className="text-2xl font-bold text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:pr-8 md:pl-8">
                    <div className={`card-feature ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-semibold mb-3">{milestone.title}</h4>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-12 h-12 bg-secondary rounded-full items-center justify-center text-white font-bold text-lg pulse-glow relative z-10">
                    {milestone.year.slice(-2)}
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className={`grid md:grid-cols-2 gap-12 mb-20 fade-in-up stagger-2 ${isVisible ? 'animate' : ''}`}>
          <div className="card-premium">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To democratize global education by providing personalized, comprehensive guidance 
              that transforms academic aspirations into successful international careers. We bridge 
              the gap between local talent and worldwide opportunities.
            </p>
          </div>

          <div className="card-premium">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                <Eye className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be recognized as the global leader in education consulting, where every student 
              who dreams of international education finds the guidance, support, and opportunities 
              they need to succeed beyond borders.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className={`fade-in-up stagger-3 ${isVisible ? 'animate' : ''}`}>
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-feature text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className={`mt-20 text-center fade-in-up stagger-4 ${isVisible ? 'animate' : ''}`}>
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-8">Trusted by Thousands</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-primary-foreground/80">Students Placed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-primary-foreground/80">Partner Universities</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15</div>
                <div className="text-primary-foreground/80">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-primary-foreground/80">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;