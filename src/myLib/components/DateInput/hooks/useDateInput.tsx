import { getLocalTimeZone } from '@internationalized/date';
export const useDateInput = () => {
    const calculateAge = (date: any) => {
        const today = new Date();
        const birth = date.toDate(getLocalTimeZone());
        let age = today.getFullYear() - birth.getFullYear();
        const m = today.getMonth() - birth.getMonth();
        const dayAdjust = today.getDate() - birth.getDate();
        if (m < 0 || (m === 0 && dayAdjust < 0)) age--;
        return age;
    };

    const formatToISO = (date: any) => {
        if (!date) return "--";
        const d = date.toDate(getLocalTimeZone());
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    return {
        calculateAge,
        formatToISO
    }

}