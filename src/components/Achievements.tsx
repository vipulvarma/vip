import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Achievements = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const achievements = [
    { number: 96.45, suffix: '%', label: 'MHT-CET Top Score' },
    { number: 100, suffix: '+', label: 'Students Coached' },
    { number: 95, suffix: '%', label: 'Success Rate' },
    { number: 5, suffix: '+', label: 'Years Experience' }
  ];

  const testimonials = [
    {
      text: "I scored 96.45% in MHT-CET thanks to Vipul sir's excellent guidance. His teaching methodology and personal attention helped me understand complex concepts easily.",
      author: "Sahil Pathak",
      grade: "Class 12",
      rating: 5
    },
    {
      text: "Clear explanations, friendly nature, and excellent teaching style. Vipul sir made difficult topics seem so simple. Highly recommended for all students!",
      author: "Diwakar Jha",
      grade: "Class 10",
      rating: 5
    },
    {
      text: "The personalized study plan and regular doubt-solving sessions really helped me improve my grades significantly. Great mentor and teacher!",
      author: "Priya Sharma",
      grade: "Class 11",
      rating: 5
    },
    {
      text: "Engineering mathematics became so much easier with sir's visual teaching methods. The handwritten notes were extremely helpful for revision.",
      author: "Arjun Patel",
      grade: "Engineering Student",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-blue-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Achievements & Testimonials
          </h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Our students' success stories and achievements speak for the quality of education we provide.
          </p>
        </div>

        {/* Animated Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  {inView ? (
                    <AnimatedCounter 
                      end={achievement.number} 
                      suffix={achievement.suffix}
                      duration={2000}
                    />
                  ) : (
                    `0${achievement.suffix}`
                  )}
                </div>
                <div className="text-blue-200 text-sm md:text-base">
                  {achievement.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="relative">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-white italic mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="text-yellow-400 font-semibold text-lg">
                — {testimonials[currentTestimonial].author}
              </div>
              <div className="text-blue-200">
                {testimonials[currentTestimonial].grade}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-200"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-200"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    currentTestimonial === index ? 'bg-yellow-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AnimatedCounter: React.FC<{ end: number; suffix: string; duration: number }> = ({ 
  end, 
  suffix, 
  duration 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

export default Achievements;