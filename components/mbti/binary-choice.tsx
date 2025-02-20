import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";

interface BinaryChoiceProps {
  name: string;
  options?: Array<{
    value: string;
    label: string;
    description?: string;
  }>;
}

export function BinaryChoice({ name, options }: BinaryChoiceProps) {
  const { register, watch } = useFormContext();
  const value = watch(name);

  return (
    <div className="grid grid-cols-2 gap-6">
      {options?.map((option) => (
        <motion.label
          key={option.value}
          className={`relative flex flex-col items-center p-3 sm:p-6 rounded-xl cursor-pointer
            border-2 transition-colors
            ${value === option.value 
              ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' 
              : 'border-gray-200 hover:border-purple-200 dark:border-gray-700'
            }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <input
            type="radio"
            value={option.value}
            {...register(name)}
            className="sr-only"
          />
          <span className="text-md sm:text-lg font-medium mb-2">{option.label}</span>
          {option.description && (
            <span className="text-sm text-gray-600 dark:text-gray-400 text-center">
              {option.description}
            </span>
          )}
        </motion.label>
      ))}
    </div>
  );
}
