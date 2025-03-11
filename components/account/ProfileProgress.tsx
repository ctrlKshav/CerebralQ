import { CheckCircle2, AlertCircle } from "lucide-react";

export function ProfileProgress() {
  const steps = [
    { name: "Profile Picture", completed: true },
    { name: "Bio", completed: true },
    { name: "Personality Test", completed: true },
    { name: "IQ Assessment", completed: true },
    { name: "Connect Friends", completed: false },
    { name: "Complete 20 Tests", completed: false },
  ];

  const completedSteps = steps.filter(step => step.completed).length;
  const progress = (completedSteps / steps.length) * 100;

  return (
    <div className="bg-card/80 dark:bg-card/30 rounded-xl p-6 backdrop-blur-sm border border-border shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          <h3 className="text-lg font-semibold text-foreground">Profile Completion</h3>
        </div>
        <span className="text-sm text-muted-foreground">{completedSteps}/{steps.length} Complete</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-emerald-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            {step.completed ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            )}
            <span className={step.completed ? "text-foreground" : "text-muted-foreground"}>
              {step.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}