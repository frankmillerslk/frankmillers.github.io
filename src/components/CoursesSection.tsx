import { useEffect, useRef, useState } from 'react';
import { Filter, MapPin, Clock, Star, ArrowRight, GraduationCap, BookOpen, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CoursesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedField, setSelectedField] = useState('all');
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

  const countries = [
    { code: 'all', name: 'All Countries', flag: '🌍' },
    { code: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'canada', name: 'Canada', flag: '🇨🇦' },
    { code: 'australia', name: 'Australia', flag: '🇦🇺' },
    { code: 'usa', name: 'United States', flag: '🇺🇸' },
    { code: 'germany', name: 'Germany', flag: '🇩🇪' },
    { code: 'netherlands', name: 'Netherlands', flag: '🇳🇱' },
  ];

  const fields = [
    { code: 'all', name: 'All Fields', icon: BookOpen },
    { code: 'engineering', name: 'Engineering', icon: GraduationCap },
    { code: 'business', name: 'Business', icon: Briefcase },
    { code: 'medicine', name: 'Medicine', icon: BookOpen },
    { code: 'it', name: 'IT & Computer Science', icon: GraduationCap },
  ];

  const courses = [
    {
      title: 'Computer Science & AI',
      country: 'uk',
      field: 'it',
      university: 'University of Cambridge',
      duration: '3 years',
      rating: 4.9,
      tuition: '£35,000/year',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
      description: 'Cutting-edge AI and machine learning programs with world-class research opportunities.',
      features: ['Research Opportunities', 'Industry Partnerships', 'Full Scholarships Available']
    },
    {
      title: 'MBA in International Business',
      country: 'canada',
      field: 'business',
      university: 'University of Toronto',
      duration: '2 years',
      rating: 4.8,
      tuition: 'CAD 65,000/year',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      description: 'Global business leadership program with international exchange opportunities.',
      features: ['Global Exchange', 'Industry Mentorship', 'Work Placement']
    },
    {
      title: 'Biomedical Engineering',
      country: 'australia',
      field: 'engineering',
      university: 'University of Melbourne',
      duration: '4 years',
      rating: 4.7,
      tuition: 'AUD 45,000/year',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
      description: 'Innovative program combining engineering principles with medical applications.',
      features: ['Lab Access', 'Research Projects', 'Clinical Exposure']
    },
    {
      title: 'Medicine (MBBS)',
      country: 'uk',
      field: 'medicine',
      university: 'Imperial College London',
      duration: '6 years',
      rating: 4.9,
      tuition: '£45,000/year',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop',
      description: 'World-renowned medical program with extensive clinical training.',
      features: ['Clinical Training', 'Research Opportunities', 'Global Recognition']
    },
    {
      title: 'Data Science & Analytics',
      country: 'canada',
      field: 'it',
      university: 'University of British Columbia',
      duration: '2 years',
      rating: 4.8,
      tuition: 'CAD 35,000/year',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      description: 'Comprehensive data science program with industry partnerships.',
      features: ['Industry Projects', 'Internship Guarantee', 'Career Support']
    },
    {
      title: 'Environmental Engineering',
      country: 'germany',
      field: 'engineering',
      university: 'Technical University of Munich',
      duration: '3 years',
      rating: 4.6,
      tuition: '€20,000/year',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop',
      description: 'Sustainable engineering solutions for environmental challenges.',
      features: ['Sustainability Focus', 'European Network', 'Research Excellence']
    }
  ];

  const filteredCourses = courses.filter(course => {
    const countryMatch = selectedCountry === 'all' || course.country === selectedCountry;
    const fieldMatch = selectedField === 'all' || course.field === selectedField;
    return countryMatch && fieldMatch;
  });

  return (
    <section id="courses" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Global Opportunities
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover world-class programs from top universities across the globe. 
            Find the perfect course that aligns with your career aspirations.
          </p>
        </div>

        {/* Filters */}
        <div className={`mb-12 fade-in-up stagger-1 ${isVisible ? 'animate' : ''}`}>
          <div className="bg-muted/30 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 text-primary mr-2" />
              <h3 className="font-semibold">Filter Courses</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Country Filter */}
              <div>
                <label className="block text-sm font-medium mb-3">Country</label>
                <div className="flex flex-wrap gap-2">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => setSelectedCountry(country.code)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedCountry === country.code
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-background border border-border hover:bg-muted'
                      }`}
                    >
                      <span className="mr-2">{country.flag}</span>
                      {country.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Field Filter */}
              <div>
                <label className="block text-sm font-medium mb-3">Field of Study</label>
                <div className="flex flex-wrap gap-2">
                  {fields.map((field) => (
                    <button
                      key={field.code}
                      onClick={() => setSelectedField(field.code)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center ${
                        selectedField === field.code
                          ? 'bg-secondary text-secondary-foreground'
                          : 'bg-background border border-border hover:bg-muted'
                      }`}
                    >
                      <field.icon className="h-4 w-4 mr-2" />
                      {field.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Cards */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up stagger-2 ${isVisible ? 'animate' : ''}`}>
          {filteredCourses.map((course, index) => (
            <div key={index} className="card-premium group overflow-hidden">
              {/* Course Image */}
              <div className="relative mb-6 -mx-8 -mt-8">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-background/90 rounded-full px-3 py-1 flex items-center">
                  <Star className="h-4 w-4 text-accent mr-1" />
                  <span className="text-sm font-medium">{course.rating}</span>
                </div>
              </div>

              {/* Course Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{course.description}</p>
                </div>

                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {course.university}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-primary mb-1">{course.tuition}</div>
                  <div className="text-sm text-muted-foreground">Annual Tuition</div>
                </div>

                <div className="space-y-2">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button className="w-full btn-outline group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 fade-in-up stagger-3 ${isVisible ? 'animate' : ''}`}>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-4">Can't Find Your Perfect Course?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our education consultants will help you discover personalized opportunities 
              that match your career goals and academic background.
            </p>
            <Button className="btn-secondary">
              Get Personalized Guidance
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;