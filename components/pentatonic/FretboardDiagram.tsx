"use client";

import { useMemo } from "react";
import { Card } from "@/components/ui/card";
import { type Key, diagramPositions, transposeOffsets } from "@/lib/data/scales";
import { diagramTemplates } from "@/lib/data/diagram-templates";
import { generateDiagramPattern, generateFullFretboard } from "@/lib/utils/diagram-generator";

interface FretboardDiagramProps {
  selectedKey: Key;
  selectedPosition: string;
}

export function FretboardDiagram({ selectedKey, selectedPosition }: FretboardDiagramProps) {
  const diagramData = useMemo(() => {
    const template = diagramTemplates[selectedPosition];

    if (!template) {
      return {
        title: 'Posição 1 - Padrão Box',
        subtitle: 'Casa 5',
        info: 'Posição mais usada no blues. Memorize este padrão primeiro!',
        fretboard: ''
      };
    }

    if (selectedPosition === 'full') {
      const offset = transposeOffsets[selectedKey];
      return {
        title: `${template.title} em ${selectedKey}`,
        subtitle: 'Todo o braço',
        info: template.info,
        fretboard: generateFullFretboard(offset)
      };
    }

    // Get the starting fret for this key and position
    const posKey = `pos${selectedPosition}` as keyof typeof diagramPositions[Key];
    const startingFret = diagramPositions[selectedKey][posKey];

    // Generate the diagram with real fret numbers
    const fretboard = template.pattern
      ? generateDiagramPattern(template.pattern, startingFret)
      : '';

    return {
      title: `${template.title} em ${selectedKey}`,
      subtitle: `Casa ${startingFret}`,
      info: template.info,
      fretboard
    };
  }, [selectedKey, selectedPosition]);

  return (
    <Card className="p-6">
      <div className="mb-4">
        <h4 className="text-lg font-semibold">
          {diagramData.title}
        </h4>
        <span className="text-sm text-muted-foreground">{diagramData.subtitle}</span>
      </div>
      <div className="overflow-x-auto">
        <pre className="rounded-lg bg-muted p-4 font-mono text-xs sm:text-sm">
          {diagramData.fretboard}
        </pre>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        {diagramData.info}
      </p>
    </Card>
  );
}
