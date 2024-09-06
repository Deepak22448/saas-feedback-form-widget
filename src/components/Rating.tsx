import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import { FC } from "react";

interface RatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}
export const Rating: FC<RatingProps> = ({ rating, onRatingChange }) => {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon
          key={index}
          className={cn(
            "size-5 cursor-pointer",
            rating > index ? "fill-primary" : "fill-muted"
          )}
          onClick={() => onRatingChange(index + 1)}
        />
      ))}
    </div>
  );
};
