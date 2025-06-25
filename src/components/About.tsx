import React from 'react';
import { User, Target, BookOpen, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: User,
      title: 'Personalized Learning Plans',
      description: 'Customized study plans tailored to each student\'s unique learning style and academic goals.'
    },
    {
      icon: Target,
      title: 'Experienced Educator',
      description: 'Years of teaching experience with deep subject knowledge and proven pedagogical methods.'
    },
    {
      icon: BookOpen,
      title: 'Proven Track Record',
      description: 'Consistent results with students achieving excellent scores in board exams and competitive tests.'
    },
    {
      icon: Lightbulb,
      title: 'Visual & Hands-On Aids',
      description: 'Interactive learning materials and practical demonstrations to make complex concepts easy to understand.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Welcome to Vipul's Home Private Tuition! We provide personalized, high-quality in-home tuition 
              designed for school and college students. With years of teaching experience and a strong academic 
              background, we help students improve understanding, boost confidence, and achieve their academic goals.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to make learning engaging, effective, and enjoyable through innovative teaching 
              methods and personalized attention that brings out the best in every student.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <IconComponent className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;