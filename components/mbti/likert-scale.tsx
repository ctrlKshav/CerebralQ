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
  const { register, watch } = useFormContext();
  const selectedValue = watch(name);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-5 gap-4">
        {options.map((option) => {
          const isSelected = selectedValue === option.value;
          return (
            <motion.div
              key={option.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                relative rounded-lg cursor-pointer
                ${isSelected 
                  ? 'bg-purple-50 dark:bg-purple-900/20 ring-2 ring-purple-500' 
                  : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }
              `}
            >
              <label className="block p-4 text-center cursor-pointer">
                <input
                  type="radio"
                  value={option.value}
                  {...register(name)}
                  className="text-xl mr-2 cursor-pointer"
                />
                <span className={`block text-sm font-medium mb-1
                  ${isSelected 
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