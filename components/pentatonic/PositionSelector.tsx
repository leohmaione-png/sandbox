"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { positions } from "@/lib/data/scales";

interface PositionSelectorProps {
  selectedPosition: string;
  onPositionChange: (position: string) => void;
}

export function PositionSelector({ selectedPosition, onPositionChange }: PositionSelectorProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="position-select" className="text-sm font-medium">
        Posição:
      </label>
      <Select value={selectedPosition} onValueChange={onPositionChange}>
        <SelectTrigger id="position-select" className="w-full md:w-[300px]">
          <SelectValue placeholder="Selecione a posição" />
        </SelectTrigger>
        <SelectContent>
          {positions.map((position) => (
            <SelectItem key={position.value} value={position.value}>
              {position.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
