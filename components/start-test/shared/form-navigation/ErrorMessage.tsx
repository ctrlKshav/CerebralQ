interface ErrorMessageProps {
  message?: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;
  return (
    <div className="text-sm text-red-500 text-center">
      {message}
    </div>
  );
}
