"use client";

import { useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LickCard } from "./LickCard";
import { lickCategories } from "@/lib/data/licks";
import { transposeLick } from "@/lib/utils/transpose";
import { type Key, transposeOffsets } from "@/lib/data/scales";

interface GuitaristLicksProps {
  selectedKey: Key;
  selectedPosition: string;
}

export function GuitaristLicks({ selectedKey, selectedPosition }: GuitaristLicksProps) {
  const offset = transposeOffsets[selectedKey];

  // Transpose all licks for the current key
  const transposedCategories = useMemo(() => {
    return lickCategories.map(category => ({
      ...category,
      licks: category.licks.map(lick => ({
        ...lick,
        transposedTab: transposeLick(lick.tab, offset)
      }))
    }));
  }, [offset]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">🎸 Licks Clássicos de Blues & Rock</h2>
        <p className="mt-2 text-muted-foreground">
          Aprenda licks fundamentais organizados por nível de dificuldade, com e sem blue notes
        </p>
        <div className="mt-4 flex gap-4 text-sm">
          <span className="text-muted-foreground">
            Tom: <span className="font-medium text-foreground">{selectedKey}</span>
          </span>
          <span className="text-muted-foreground">
            Posição: <span className="font-medium text-foreground">Posição {selectedPosition}</span>
          </span>
        </div>
      </div>

      <Tabs defaultValue="beginner" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {lickCategories.map(category => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {transposedCategories.map(category => (
          <TabsContent key={category.id} value={category.id} className="space-y-6">
            {/* Category intro */}
            <Card className="p-6 bg-muted/50">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                <Badge variant="outline" className="text-base px-4 py-2">
                  {category.licks.length} licks
                </Badge>
              </div>
            </Card>

            {/* Blue Notes Info */}
            {category.id === 'beginner' && (
              <Card className="p-6 border-2 border-primary/20 bg-primary/5">
                <h4 className="text-base font-semibold mb-2 flex items-center gap-2">
                  <span>💡</span>
                  O que são Blue Notes?
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  As <strong>blue notes</strong> são notas "fora" da pentatônica tradicional que adicionam o sabor característico do blues.
                  A principal é a <strong>b5 (quinta diminuta)</strong> - em Am, seria Eb (casa 6 na corda G na posição 1).
                  Essas notas criam tensão e aquele som "sujo" típico do blues. Experimente adicionar e remover para ouvir a diferença!
                </p>
              </Card>
            )}

            {/* Licks grid */}
            <div className="grid gap-6">
              {category.licks.map(lick => (
                <div key={lick.id} className="relative">
                  {/* Blue Note indicator */}
                  {lick.hasBlueNotes && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <Badge variant="default" className="shadow-lg">
                        Blue Notes ♯
                      </Badge>
                    </div>
                  )}
                  <LickCard
                    lick={lick}
                    transposedTab={(lick as any).transposedTab}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
