import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
import { MBTIResponse } from "@/schema/mbti";
import { saveProgress } from "@/lib/mbtiStorage";

const options = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly Agree" },
];

interface LikertScaleProps {
  name: `answers.${string}.selectedScore`;
  currentSectionId: number;
}

export function LikertScale({ name, currentSectionId }: LikertScaleProps) {
  const { register, watch, setError, clearErrors, getValues } =
    useFormContext<MBTIResponse>();
  const selectedValue = watch(name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearErrors(name);
    register(name).onChange(e);

    const localStorageData = {
      ...getValues(),
      currentSectionId: currentSectionId,
    };
    saveProgress(localStorageData);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-5 text-xl py-2">
        {options.map((option) => {
          const isSelected = Number(selectedValue) === option.value;
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
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-gray-700 dark:text-gray-300"
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
