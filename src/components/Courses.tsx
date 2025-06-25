import React, { useState } from 'react';
import { Book, Calculator, Atom, Microscope } from 'lucide-react';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('grades5-10');

  const courseData = {
    'grades5-10': {
      title: 'Grades 5-10',
      subtitle: 'Foundation & Secondary Education',
      description: 'Complete subject coverage for all major educational boards',
      subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi/Marathi'],
      boards: ['SSC', 'CBSE', 'ICSE'],
      icon: Book
    },
    'grades11-12': {
      title: 'Grades 11-12',
      subtitle: 'Higher Secondary & Board Preparation',
      description: 'Specialized coaching for science subjects and board exam preparation',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics'],
      boards: ['SSC', 'CBSE', 'ICSE'],
      icon: Calculator
    },
    'engineering': {
      title: 'Engineering Year 1',
      subtitle: 'First Year Engineering Support',
      description: 'Comprehensive support for engineering fundamentals',
      subjects: ['Engineering Mechanics', 'Engineering Mathematics', 'Basic Electrical Engineering', 'Engineering Chemistry', 'Engineering Physics'],
      boards: ['All Universities'],
      icon: Atom
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Courses Offered
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive curriculum coverage across different educational levels with personalized attention and expert guidance.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-gray-100 rounded-xl p-2 max-w-2xl mx-auto">
          {Object.entries(courseData).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex-1 min-w-0 ${
                activeTab === key
                  ? 'bg-blue-900 text-white shadow-lg'
                  : 'hover:bg-white text-gray-600 hover:shadow-md'
              }`}
            >
              <span className="hidden sm:inline">{data.title}</span>
              <span className="sm:hidden">{data.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          {Object.entries(courseData).map(([key, data]) => {
            const IconComponent = data.icon;
            return activeTab === key ? (
              <div key={key} className="text-center">
                <div className="bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mb-8 mx-auto">
                  <IconComponent className="h-10 w-10 text-yellow-400" />
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {data.title}
                </h3>
                <p className="text-xl text-blue-900 font-medium mb-6">
                  {data.subtitle}
                </p>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  {data.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Subjects Covered
                    </h4>
                    <ul className="space-y-2">
                      {data.subjects.map((subject, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Educational Boards
                    </h4>
                    <ul className="space-y-2">
                      {data.boards.map((board, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {board}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={scrollToContact}
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Enroll Now
                </button>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;