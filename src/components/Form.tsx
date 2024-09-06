import { Rating } from "./Rating";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useForm } from "@/hooks/useForm";
import { Button } from "./ui/button";
import { FC } from "react";
import { Loader2Icon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormProps {
  projectId: string;
}
export const Form: FC<FormProps> = ({ projectId }) => {
  const { submitForm, rating, updateRating, isSubmitted, isSubmitting } =
    useForm({ projectId });

  if (isSubmitted) {
    return <SubmittedSuccess />;
  }

  return (
    <div>
      <h3 className="font-bold text-lg text-center">Send us your feedback</h3>
      <form className="space-y-2" onSubmit={submitForm}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="feedback">Feedback</Label>
          <Textarea
            id="feedback"
            name="feedback"
            placeholder="Enter your feedback"
            className="min-h-28"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <Rating rating={rating} onRatingChange={updateRating} />
          <Button type="submit" disabled={isSubmitting}>
            <Loader2Icon
              className={cn(
                "size-4 mr-1 animate-spin",
                isSubmitting ? "block" : "hidden"
              )}
            />
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

const SubmittedSuccess = () => (
  <div>
    <h3 className="text-lg font-bold">Thank you for your feedback!</h3>
    <p className="text-muted-foreground mt-2">
      We appreciate your feedback. It helps us to improve our product better
      services to our customers.
    </p>
  </div>
);
