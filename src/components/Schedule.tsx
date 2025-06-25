import React, { useState } from 'react';
import { Clock, Calendar, Users, Calculator } from 'lucide-react';

const Schedule = () => {
  const [feeCalculator, setFeeCalculator] = useState({
    subjects: 1,
    siblings: false,
    combo: false
  });

  const scheduleData = [
    { day: 'Monday', morning: '7:00 AM - 12:00 PM', evening: '4:00 PM - 8:00 PM', notes: 'All subjects available' },
    { day: 'Tuesday', morning: '7:00 AM - 12:00 PM', evening: '4:00 PM - 8:00 PM', notes: 'Focus on Mathematics & Science' },
    { day: 'Wednesday', morning: '7:00 AM - 12:00 PM', evening: '4:00 PM - 8:00 PM', notes: 'All subjects available' },
    { day: 'Thursday', morning: '7:00 AM - 12:00 PM', evening: '4:00 PM - 8:00 PM', notes: 'Focus on Languages & Social Studies' },
    { day: 'Friday', morning: '7:00 AM - 12:00 PM', evening: '4:00 PM - 8:00 PM', notes: 'All subjects available' },
    { day: 'Saturday', morning: '8:00 AM - 1:00 PM', evening: '2:00 PM - 6:00 PM', notes: 'Doubt-solving sessions' },
    { day: 'Sunday', morning: '9:00 AM - 12:00 PM', evening: '3:00 PM - 6:00 PM', notes: 'Revision & Test sessions' }
  ];

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
            Schedule & Fees
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Flexible timings designed to accommodate students' school schedules with competitive and transparent pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Schedule Table */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="h-6 w-6 text-blue-900 mr-3" />
              Weekly Schedule
            </h3>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-900 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Day</th>
                      <th className="px-4 py-3 text-left font-semibold">Morning</th>
                      <th className="px-4 py-3 text-left font-semibold">Evening</th>
                      <th className="px-4 py-3 text-left font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {scheduleData.map((schedule, index) => (
                      <tr key={index} className="hover:bg-white transition-colors duration-200">
                        <td className="px-4 py-3 font-medium text-gray-900">{schedule.day}</td>
                        <td className="px-4 py-3 text-gray-600 text-sm">{schedule.morning}</td>
                        <td className="px-4 py-3 text-gray-600 text-sm">{schedule.evening}</td>
                        <td className="px-4 py-3 text-gray-500 text-sm">{schedule.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-yellow-600 mr-2" />
                <span className="text-yellow-800 font-medium">Flexible Timings Available</span>
              </div>
              <p className="text-yellow-700 text-sm mt-1">
                Schedule can be adjusted based on student's school timings and preferences.
              </p>
            </div>
          </div>

          {/* Fee Calculator */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;