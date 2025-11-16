import { Card } from "@/components/ui/card";

export function ExercisesSection() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">Exercícios Técnicos</h2>
        <p className="mt-2 text-muted-foreground">
          Desenvolva velocidade, força e precisão
        </p>
      </div>
      <Card className="p-12">
        <p className="text-center text-muted-foreground">
          Seção em desenvolvimento...
        </p>
      </Card>
    </section>
  );
}
