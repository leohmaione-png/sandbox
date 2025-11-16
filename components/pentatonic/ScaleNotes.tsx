"use client";

import { Card } from "@/components/ui/card";
import { scaleData, type Key } from "@/lib/data/scales";

interface ScaleNotesProps {
  selectedKey: Key;
}

export function ScaleNotes({ selectedKey }: ScaleNotesProps) {
  const scale = scaleData[selectedKey];

  return (
    <Card className="p-6">
      <h4 className="mb-2 font-semibold">Notas da Escala</h4>
      <p className="mb-4 text-sm text-muted-foreground">
        Tom: <span className="font-medium text-foreground">{selectedKey}</span>
      </p>
      <div className="mb-6 flex flex-wrap gap-2">
        {scale.notes.map((note, index) => (
          <span
            key={index}
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            {note}
          </span>
        ))}
      </div>
      <div className="space-y-3 rounded-lg bg-muted p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">Fórmula Menor:</span>
          <span className="font-mono">1 - ♭3 - 4 - 5 - ♭7</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">Blue Note:</span>
          <span className="font-mono">1 - ♭3 - 4 - ♭5 - 5 - ♭7</span>
        </div>
      </div>
    </Card>
  );
}
