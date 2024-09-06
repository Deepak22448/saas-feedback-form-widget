import { supabase } from "@/supabase-client";
import { FormEvent, useState } from "react";

const DEFAULT_RATING = 3;
interface FormData {
  name: string;
  email: string;
  feedback: string;
}
interface useFormProps {
  projectId: string;
}
export const useForm = ({ projectId }: useFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(DEFAULT_RATING);

  const updateRating = (newRating: number) => {
    setRating(newRating);
  };
  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(form.entries()) as unknown as FormData;
    await supabase.rpc("add_feedback", {
      p_project_id: projectId,
      p_message: data.feedback,
      p_user_name: data.name,
      p_user_email: data.email,
      p_rating: rating,
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return { isSubmitting, submitForm, isSubmitted, rating, updateRating };
};
