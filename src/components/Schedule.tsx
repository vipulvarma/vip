import React, { useState } from 'react';
import { Clock, Users, Calculator } from 'lucide-react';

const Schedule = () => {
  const [feeCalculator, setFeeCalculator] = useState({
    subjects: 1,
    siblings: false,
    combo: false
  });

  const calculateFee = () => {
    let baseFee = 2000; // Base fee per subject
    let totalFee = baseFee * feeCalculator.subjects;
    
    if (feeCalculator.siblings) {
      totalFee *= 0.85; // 15% discount for siblings
    }
    
    if (feeCalculator.combo && feeCalculator.subjects >= 3) {
      totalFee *= 0.90; // 10% discount for combo of 3+ subjects
    }
    
    return Math.round(totalFee);
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Fees & Demo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Competitive and transparent pricing with free demo sessions for all students.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Fee Calculator */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
              <Calculator className="h-6 w-6 text-blue-900 mr-3" />
              Fee Calculator
            </h3>

            <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Subjects
                  </label>
                  <select
                    value={feeCalculator.subjects}
                    onChange={(e) => setFeeCalculator({...feeCalculator, subjects: parseInt(e.target.value)})}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num} Subject{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={feeCalculator.siblings}
                      onChange={(e) => setFeeCalculator({...feeCalculator, siblings: e.target.checked})}
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">Sibling Discount (15%)</span>
                  </label>
                </div>

                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={feeCalculator.combo}
                      onChange={(e) => setFeeCalculator({...feeCalculator, combo: e.target.checked})}
                      disabled={feeCalculator.subjects < 3}
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">Combo Discount (10% for 3+ subjects)</span>
                  </label>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-900">Estimated Monthly Fee:</span>
                    <span className="text-2xl font-bold text-blue-900">₹{calculateFee()}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    *Final fees may vary based on specific requirements and location
                  </p>
                </div>
              </div>
            </div>

            {/* Demo Class CTA */}
            <div className="mt-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-blue-900 mr-2" />
                <span className="text-blue-900 font-bold text-lg">First Session Free!</span>
              </div>
              <p className="text-blue-800 mb-4">
                Experience our teaching methodology with a complimentary demo session
              </p>
              <button
                onClick={scrollToContact}
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full transition-colors duration-200"
              >
                Book Demo Class
              </button>
            </div>

            {/* Contact Info for Scheduling */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-medium">Flexible Timings Available</span>
              </div>
              <p className="text-blue-700 text-sm text-center">
                Schedule can be adjusted based on student's school timings and preferences. Contact us to discuss your preferred time slots.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
