import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Form } from "./Form";
import { Button } from "./ui/button";
import { Popover } from "./ui/popover";
import { MessageCircleIcon } from "lucide-react";
import tailwindStyles from "../index.css?inline";
import { FC } from "react";

export interface FeedBackFormProps {
  projectId: string;
}
export const FeedBackForm: FC<FeedBackFormProps> = ({ projectId }) => {
  return (
    <>
      <style>{tailwindStyles}</style>
      <div className="widget fixed bottom-4 right-4 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="rounded-full shadow-lg hover:scale-105">
              <MessageCircleIcon className="size-5 mr-2" />
              Feedback
            </Button>
          </PopoverTrigger>
          <PopoverContent className="widget rounded-lg bg-card p-4 shadow-lg w-full max-w-md">
            {<style>{tailwindStyles}</style>}
            <Form projectId={projectId} />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};
