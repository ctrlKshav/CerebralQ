import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";

const options = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly Agree" },
];

interface LikertScaleProps {
  name: string;
}

export function LikertScale({ name }: LikertScaleProps) {
  const { register, watch, clearErrors } = useFormContext();
  const selectedValue = watch(name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearErrors(name);
    register(name).onChange(e);
    
    // Find the current question card container
    const currentCard = e.currentTarget.closest('.question-card');
    // Find the next question card
    const nextCard = currentCard?.nextElementSibling;
    
    // If there's a next question, scroll to it
    if (nextCard) {
        nextCard.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-5 text-xl py-2">
        {options.map((option) => {
          const isSelected = selectedValue === option.value;
          return (
            <motion.div
              key={option.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                relative rounded-lg cursor-pointer            
              `}
            >
              <label className="flex lg:flex-col items-center justify-start lg:justify-center gap-4 py-4 sm:py-2">
                <input
                  type="radio"
                  value={option.value}
                  {...register(name)}
                  onChange={handleChange}
                  className="form-control h-6 w-6"
                />
                <span
                  className={`font-semibold ${
                    isSelected 
                      ? 'text-purple-600 dark:text-purple-400' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {option.label}
                </span>
              </label>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}