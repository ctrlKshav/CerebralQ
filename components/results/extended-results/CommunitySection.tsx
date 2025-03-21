import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users } from "lucide-react";

interface CommunitySectionProps {
  username?: string;
  type?: string;
  sectionNumber?: number;
}

const CommunitySection = ({ 
  username = "there", 
  type = "ENTJ", 
  sectionNumber = 9 
}: CommunitySectionProps) => {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-mbti-purple text-white text-lg font-bold shadow-md">
                {sectionNumber}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-mbti-purple">
                Community Connection
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              Find Your Tribe
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700">
              You don't have to figure this out alone, {username}! Come hang out with other {type}s and career starters in our growing community. Share your best strategies for success, swap ideas, and let's build something awesome together.
            </p>
          </div>
        </div>

        {/* Main content with image - full width layout */}
        <div className="glass-card rounded-xl p-0 mb-16 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:w-3/5">
              <div className="flex items-center mb-6">
                
                <h3 className="text-xl md:text-2xl font-bold">
                  Let's Make It Happen
                </h3>
              </div>
              
              <ul className="space-y-6 ml-4">
                <li className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-mbti-purple text-white text-base grid place-items-center mr-4 mt-1 flex-shrink-0">1</div>
                  <p className="text-gray-700 text-base md:text-lg mt-0.5">
                    Drop your MBTI type in our community chat—say hi to other Commanders who get you!
                  </p>
                </li>
                <li className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-mbti-purple text-white text-base grid place-items-center mr-4 mt-1 flex-shrink-0">2</div>
                  <p className="text-gray-700 text-base md:text-lg mt-0.5">
                    Join our weekly "Leadership Goals" chat to share your latest plans and ambitions.
                  </p>
                </li>
              </ul>
              
              <div className="mt-10">
                <Button size="lg" className="bg-mbti-purple hover:bg-mbti-purple/90 text-white py-6 px-8 rounded-full text-lg font-medium">
                  Join Our Community!
                </Button>
              </div>
            </div>
            
            {/* Image section */}
            <div className="md:w-2/5 h-auto sm:min-h-[350px] relative">
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Diverse group of people in a community setting"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
