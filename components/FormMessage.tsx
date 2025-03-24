import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Ban, CircleAlert, CircleCheck, InfoIcon } from "lucide-react"

export type AuthPagesMessage =
  | { success: string }
  | { error: string }
  | { info: string };

type AuthPagesFormMessageProps = {
  authActionResultType: string;
  authActionResultMessage: string;
};

export function AuthPagesFormMessage({ authActionResultType, authActionResultMessage }: AuthPagesFormMessageProps) {
  type AlertVariant = "default" | "destructive" | "success";
  let icon, title, variant: AlertVariant, description;

  switch (authActionResultType) {
    case "success":
      icon = <CircleCheck className="h-4 w-4" />
      title = "Success"
      variant = "success"
      description = authActionResultMessage
      break;
    case "error":
      icon = <CircleAlert className="h-4 w-4" />
      title = "Error"
      variant = "destructive"
      description = authActionResultMessage
      break;
    case "info":
      icon = <InfoIcon className="h-4 w-4" />
      title = "Information"
      variant = "default"
      description = authActionResultMessage
      break;
    default:
      icon = null;
      title = "";
      variant = "default";
      description = "";
      break;
  }

  return (
    <Alert variant={variant} className="w-1/2 mx-auto text-center">
      {icon}
      <AlertTitle className="sr-only">{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}