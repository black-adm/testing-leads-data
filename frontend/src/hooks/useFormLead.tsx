import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useFormLead() {
    const [step, setStep] = useState<number>(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function nextStep() {
        setStep((prevStep) => prevStep + 1);
    }

    function previewStep() {
        setStep((prevStep) => prevStep - 1);
    }

    return {
        step,
        loading,
        error,
        navigate,
        nextStep,
        previewStep,
        setLoading,
        setError
    };
}
