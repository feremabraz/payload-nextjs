"use client";

import { useState } from "react";
import { toast } from "sonner";

interface UseFormSubmissionOptions {
  endpoint: string;
  successMessage?: string;
  onSuccess?: (data: unknown) => void;
  onError?: (error: string) => void;
}

interface FormSubmissionState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

export function useFormSubmission({
  endpoint,
  successMessage = "Form submitted successfully",
  onSuccess,
  onError,
}: UseFormSubmissionOptions) {
  const [state, setState] = useState<FormSubmissionState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const submitForm = async (formData: FormData) => {
    setState({ isSubmitting: true, isSuccess: false, error: null });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Submission failed");
      }

      setState({ isSubmitting: false, isSuccess: true, error: null });
      toast.success(successMessage);

      if (onSuccess) {
        onSuccess(result);
      }

      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred";
      setState({ isSubmitting: false, isSuccess: false, error: errorMessage });
      toast.error(errorMessage);

      if (onError) {
        onError(errorMessage);
      }

      throw error;
    }
  };

  const reset = () => {
    setState({ isSubmitting: false, isSuccess: false, error: null });
  };

  return {
    ...state,
    submitForm,
    reset,
  };
}
