import { useEffect, useRef, useState } from 'react';
import { 
  FileText, 
  CreditCard, 
  Home, 
  Plane, 
  Users, 
  BookOpen, 
  Award, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
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

  const services = [
    {
      icon: FileText,
      title: 'Application Assistance',
      description: 'Complete guidance through university applications, document preparation, and submission processes.',
      features: ['Personal Statement Review', 'Document Verification', 'Application Tracking', 'Deadline Management']
    },
    {
      icon: CreditCard,
      title: 'Visa Guidance',
      description: 'Expert support for student visa applications with high success rates across all destinations.',
      features: ['Visa Documentation', 'Interview Preparation', 'Embassy Liaison', 'Process Updates']
    },
    {
      icon: Award,
      title: 'Scholarship Support',
      description: 'Identify and apply for scholarships, grants, and financial aid opportunities worldwide.',
      features: ['Scholarship Search', 'Application Support', 'Essay Writing Help', 'Interview Coaching']
    },
    {
      icon: Home,
      title: 'Accommodation',
      description: 'Secure safe, comfortable, and affordable housing options near your chosen university.',
      features: ['Housing Search', 'Virtual Tours', 'Lease Assistance', 'Local Area Guidance']
    },
    {
      icon: Plane,
      title: 'Pre-Departure',
      description: 'Comprehensive preparation for your journey including travel arrangements and orientation.',
      features: ['Travel Booking', 'Packing Guidance', 'Cultural Briefing', 'Airport Assistance']
    },
    {
      icon: Users,
      title: 'Career Counseling',
      description: 'Professional guidance to align your academic choices with long-term career goals.',
      features: ['Career Assessment', 'Industry Insights', 'Networking Support', 'Job Market Analysis']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Free Consultation',
      description: 'Understand your goals, assess qualifications, and create a personalized roadmap.'
    },
    {
      step: '02',
      title: 'Course Selection',
      description: 'Identify the best programs and universities that match your profile and aspirations.'
    },
    {
      step: '03',
      title: 'Application Process',
      description: 'Complete application preparation, submission, and follow-up with universities.'
    },
    {
      step: '04',
      title: 'Visa & Documentation',
      description: 'Handle all visa requirements, documentation, and embassy procedures.'
    },
    {
      step: '05',
      title: 'Pre-Departure Support',
      description: 'Final preparations including accommodation, travel, and orientation guidance.'
    },
    {
      step: '06',
      title: 'Ongoing Support',
      description: 'Continued assistance during your studies and career development.'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Student{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Essentials
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for a successful international education journey. 
            From applications to graduation, we provide comprehensive support every step of the way.
          </p>
        </div>

        {/* Services Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 fade-in-up stagger-1 ${isVisible ? 'animate' : ''}`}>
          {services.map((service, index) => (
            <div key={index} className="card-feature group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className={`fade-in-up stagger-2 ${isVisible ? 'animate' : ''}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Your Journey Simplified</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven 6-step process ensures a smooth and successful path to your dream university.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary hidden lg:block"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1 lg:pr-8 lg:pl-8">
                    <div className={`card-premium ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="text-4xl font-bold text-primary/20 mb-2">{step.step}</div>
                      <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full items-center justify-center text-white font-bold text-lg pulse-glow relative z-10">
                    {step.step}
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 fade-in-up stagger-3 ${isVisible ? 'animate' : ''}`}>
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Book a free consultation with our expert advisors and take the first step 
              towards your international education dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl font-semibold">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold transition-all">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;