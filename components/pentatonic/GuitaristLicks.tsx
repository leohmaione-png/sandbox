"use client";

import { useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LickCard } from "./LickCard";
import { guitarists } from "@/lib/data/licks";
import { transposeLick } from "@/lib/utils/transpose";
import { type Key, transposeOffsets } from "@/lib/data/scales";

interface GuitaristLicksProps {
  selectedKey: Key;
  selectedPosition: string;
}

export function GuitaristLicks({ selectedKey, selectedPosition }: GuitaristLicksProps) {
  const offset = transposeOffsets[selectedKey];

  // Transpose all licks for the current key
  const transposedGuitarists = useMemo(() => {
    return guitarists.map(guitarist => ({
      ...guitarist,
      licks: guitarist.licks.map(lick => ({
        ...lick,
        transposedTab: transposeLick(lick.tab, offset)
      }))
    }));
  }, [offset]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Licks por Guitarrista</h2>
        <p className="mt-2 text-muted-foreground">
          Aprenda frases organizadas do básico ao avançado no estilo de cada mestre
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

      <Tabs defaultValue="zakk" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          {guitarists.map(guitarist => (
            <TabsTrigger key={guitarist.id} value={guitarist.id}>
              {guitarist.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {transposedGuitarists.map(guitarist => (
          <TabsContent key={guitarist.id} value={guitarist.id} className="space-y-6">
            {/* Guitarist intro */}
            <Card className="p-6">
              <div className="mb-3">
                <h3 className="mb-2 text-xl font-bold">{guitarist.style}</h3>
                <div className="flex flex-wrap gap-2">
                  {guitarist.tags.map(tag => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {guitarist.description}
              </p>
            </Card>

            {/* Licks grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {guitarist.licks.map(lick => (
                <LickCard
                  key={lick.id}
                  lick={lick}
                  transposedTab={(lick as any).transposedTab}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
