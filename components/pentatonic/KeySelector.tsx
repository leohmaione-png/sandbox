"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { keys, type Key } from "@/lib/data/scales";

interface KeySelectorProps {
  selectedKey: Key;
  onKeyChange: (key: Key) => void;
}

export function KeySelector({ selectedKey, onKeyChange }: KeySelectorProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Tom:</label>
      <div className="flex flex-wrap gap-2">
        {keys.map((key) => (
          <Button
            key={key}
            variant={selectedKey === key ? "default" : "outline"}
            size="sm"
            onClick={() => onKeyChange(key)}
            className={cn(
              "min-w-[3rem]",
              selectedKey === key && "bg-primary text-primary-foreground"
            )}
          >
            {key}
          </Button>
        ))}
      </div>
    </div>
  );
}
