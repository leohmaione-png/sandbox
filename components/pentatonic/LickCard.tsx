"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lick, LickLevel } from "@/lib/data/licks";
import { cn } from "@/lib/utils";

interface LickCardProps {
  lick: Lick;
  transposedTab: string;
}

const levelColors: Record<LickLevel, string> = {
  beginner: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
  intermediate: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
  advanced: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20"
};

const levelLabels: Record<LickLevel, string> = {
  beginner: "Iniciante",
  intermediate: "Intermediário",
  advanced: "Avançado"
};

export function LickCard({ lick, transposedTab }: LickCardProps) {

  return (
    <Card className="p-6">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1">
          <Badge
            variant="outline"
            className={cn("mb-2", levelColors[lick.level])}
          >
            {levelLabels[lick.level]}
          </Badge>
          <h4 className="text-lg font-semibold">{lick.title}</h4>
        </div>
        <span className="text-sm font-medium text-muted-foreground">
          {lick.tempo}
        </span>
      </div>

      <div className="mb-4 overflow-x-auto">
        <pre className="rounded-lg bg-muted p-4 font-mono text-xs sm:text-sm">
          {transposedTab}
        </pre>
      </div>

      {lick.notes && (
        <p className="mb-2 text-sm italic text-muted-foreground">
          {lick.notes}
        </p>
      )}

      <p className="text-sm text-foreground">
        {lick.description}
      </p>
    </Card>
  );
}
