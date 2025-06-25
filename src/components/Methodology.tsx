import React, { useState } from 'react';
import { Brain, RefreshCw, HelpCircle, Trophy, Eye, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const Methodology = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(0);

  const methodologySteps = [
    {
      icon: Brain,
      title: 'Concept-Based Learning',
      description: 'Focus on understanding fundamentals rather than rote memorization',
      details: 'We build strong conceptual foundations by explaining the "why" behind every topic. Students learn to think critically and apply knowledge across different scenarios, making learning meaningful and long-lasting.'
    },
    {
      icon: RefreshCw,
      title: 'Daily Revision & Weekly Tests',
      description: 'Structured revision schedule with regular assessments',
      details: 'Systematic daily revision ensures concepts stay fresh in memory. Weekly tests help identify knowledge gaps early and track progress consistently, allowing for timely course corrections.'
    },
    {
      icon: HelpCircle,
      title: 'Doubt-Solving Sessions',
      description: 'Dedicated time for clearing student queries and confusion',
      details: 'No question is too small or too big. We encourage students to ask questions freely and provide detailed explanations until complete clarity is achieved. This builds confidence and eliminates learning barriers.'
    },
    {
      icon: Trophy,
      title: 'Board & Entrance Exam Preparation',
      description: 'Targeted preparation for board exams and competitive tests',
      details: 'Strategic preparation aligned with exam patterns and syllabus requirements. Practice with previous years\' papers, mock tests, and time management techniques to excel in actual examinations.'
    },
    {
      icon: Eye,
      title: 'Visual Aids & Digital Content',
      description: 'Interactive learning materials and multimedia resources',
      details: 'Complex concepts become simple with visual representations, diagrams, animations, and interactive digital content. This multi-sensory approach caters to different learning styles and improves retention.'
    },
    {
      icon: FileText,
      title: 'Handwritten Notes & Worksheets',
      description: 'Comprehensive study materials and practice exercises',
      details: 'Carefully crafted handwritten notes and custom worksheets provide additional practice and serve as excellent revision material. Students receive personalized study materials tailored to their needs.'
    }
  ];

  const toggleExpansion = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <section id="methodology" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Teaching Methodology
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven teaching approach combines traditional methods with modern techniques to ensure 
            comprehensive understanding and excellent academic results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {methodologySteps.map((step, index) => {
            const IconComponent = step.icon;
            const isExpanded = expandedItem === index;
            
            return (
              <div 
                key={index}
                className="mb-6 last:mb-0"
              >
                <div 
                  className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-300 ${
                    isExpanded ? 'border-blue-500 shadow-xl' : 'border-transparent hover:shadow-xl'
                  }`}
                >
                  <button
                    onClick={() => toggleExpansion(index)}
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-xl"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                          isExpanded ? 'bg-blue-900' : 'bg-gray-100 group-hover:bg-blue-900'
                        }`}>
                          <IconComponent className={`h-6 w-6 transition-colors duration-300 ${
                            isExpanded ? 'text-yellow-400' : 'text-blue-900'
                          }`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {step.title}
                          </h3>
                          <p className="text-gray-600">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      <div className="ml-4">
                        {isExpanded ? (
                          <ChevronUp className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <div className="px-6 pb-6">
                      <div className="pl-16">
                        <div className="border-l-2 border-yellow-400 pl-6">
                          <p className="text-gray-700 leading-relaxed">
                            {step.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Methodology;