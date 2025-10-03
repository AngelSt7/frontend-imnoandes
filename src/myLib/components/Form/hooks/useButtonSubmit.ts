import toast from "react-hot-toast";

interface ButtonSubmitProps {
    isFormComplete: boolean;
    onSubmit: () => void;
    incompleteStepsDetails?: Array<{
        stepIndex: number;
        stepName?: string;
        missingFields: string[];
    }>;
}

export const useButtonSubmit = ({ isFormComplete, onSubmit, incompleteStepsDetails }: ButtonSubmitProps) => {
    const handleClick = () => {
        if (!isFormComplete) {
            if (incompleteStepsDetails && incompleteStepsDetails.length > 0) {
                const firstIncomplete = incompleteStepsDetails[0];
                toast.error( `Completa ${firstIncomplete.stepName || `Paso ${firstIncomplete.stepIndex + 1}`} para continuar`);
            } else {
                toast.error("El formulario no está completo");
            }
            return;
        }
        onSubmit();
    };

    return {
        handleClick
    }
}