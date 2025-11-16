"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Pause, Loader2 } from "lucide-react";
import { Lick, LickLevel } from "@/lib/data/licks";
import { useLickPlayer } from "@/hooks/useLickPlayer";
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
  const { play, stop, isPlaying, isLoading } = useLickPlayer(transposedTab, lick.tempo);

  const handlePlayClick = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
  };

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
          <div className="flex items-center gap-2">
            <h4 className="text-lg font-semibold">{lick.title}</h4>
            <Button
              size="sm"
              variant="ghost"
              onClick={handlePlayClick}
              disabled={isLoading}
              className="h-8 w-8 p-0"
              title={isPlaying ? "Stop" : "Play lick"}
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
          </div>
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
