import { Errors } from "@/src/components";

interface ErrorProps {
  message?: string;
}

export const ErrorComponentsRegistry: Record<string, React.FC<ErrorProps>> = {
  default: ({ message }) =>
    message ? <Errors>{message}</Errors> : null,

  fancy: ({ message }) =>
    message ? (
      <div className="bg-red-100 text-red-700 p-2 rounded">{message}</div>
    ) : null,
};
