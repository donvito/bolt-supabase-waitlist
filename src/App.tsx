import React from 'react';
import { Rocket } from 'lucide-react';
import WaitlistForm from './components/WaitlistForm';
import WaitlistCounter from './components/WaitlistCounter';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-12 text-center">
        <div className="space-y-6">
          <div className="inline-flex items-center justify-center space-x-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full">
            <Rocket className="h-5 w-5" />
            <span className="font-medium">Coming Soon</span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900">
            Join the Future of Innovation
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be among the first to experience our revolutionary platform. 
            Sign up now and get early access when we launch.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <WaitlistForm />
          <WaitlistCounter />
        </div>

        <div className="pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Early Access',
                description: 'Be the first to try our platform and shape its future'
              },
              {
                title: 'Exclusive Benefits',
                description: 'Get special perks and features only available to waitlist members'
              },
              {
                title: 'Regular Updates',
                description: 'Stay informed about our progress and launch timeline'
              }
            ].map((feature, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
