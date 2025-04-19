
import { Target} from 'lucide-react';

function Aim() {
  const aims = [
    {
      title: "xxxxxxx",
      description: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    },
    {
      title: "xxxxx",
      description: "xxxxxxxxxxxxxxxxxxxxx",
    },
    {
      title: "xxxxxx",
      description: "xxxxxxxxxxxxxxxxxx",
    }
  ];

  return (
    <div className="mt-[80vh] mb-[10vh] text-white flex justify-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-16">
          <Target className="w-8 h-8 text-purple-500" />
          <h1 className="text-4xl font-bold text-center">What is our aim?</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aims.map((aim, index) => (
            <div key={index} className="flex items-center gap-4 p-6 rounded-lg bg-opacity-10 bg-white backdrop-blur-sm">
              <div className="w-16 h-16 rounded-lg bg-gray-700 flex items-center justify-center">
                
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">{aim.title}</h3>
                <p className="text-gray-400">{aim.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Aim;