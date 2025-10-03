import { lazy } from "react";

export const StepOne = lazy(() =>
    import("../components/StepOne/StepOne")
);
export const StepTwo = lazy(() =>
    import("../components/StepTwo/StepTwo")
);
export const StepThree = lazy(() =>
    import("../components/StepThree/StepThree")
);
export const StepFour = lazy(() =>
    import("../components/StepFour/StepFour")
);