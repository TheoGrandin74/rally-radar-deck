import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Trophy, Users } from "lucide-react";

interface Player {
  name: string;
  country: string;
  ranking: number;
  sets: number[];
}

interface TennisMatch {
  id: string;
  tournament: string;
  round: string;
  court: string;
  status: "live" | "completed" | "upcoming";
  startTime: string;
  player1: Player;
  player2: Player;
  surface: string;
}

interface TennisMatchCardProps {
  match: TennisMatch;
  onClick: (match: TennisMatch) => void;
}

export const TennisMatchCard = ({ match, onClick }: TennisMatchCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "bg-destructive text-destructive-foreground animate-pulse";
      case "completed":
        return "bg-success text-success-foreground";
      case "upcoming":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getWinner = () => {
    if (match.status !== "completed") return null;
    const p1Sets = match.player1.sets.filter(set => set > match.player2.sets[match.player1.sets.indexOf(set)]).length;
    const p2Sets = match.player2.sets.filter(set => set > match.player1.sets[match.player2.sets.indexOf(set)]).length;
    return p1Sets > p2Sets ? 1 : 2;
  };

  const winner = getWinner();

  return (
    <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={() => onClick(match)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Badge className={getStatusColor(match.status)}>
              {match.status.toUpperCase()}
            </Badge>
            {match.status === "live" && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3 w-3" />
                LIVE
              </div>
            )}
          </div>
          <div className="text-sm text-muted-foreground">
            {match.court} • {match.surface}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              {match.tournament} - {match.round}
            </div>
            <div className="text-sm text-muted-foreground">
              {match.startTime}
            </div>
          </div>

          {/* Player 1 */}
          <div className={`flex items-center justify-between p-3 rounded-lg ${winner === 1 ? 'bg-success/10 border border-success/20' : 'bg-muted/30'}`}>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className={`font-semibold ${winner === 1 ? 'text-success' : ''}`}>
                  {match.player1.name}
                </span>
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  #{match.player1.ranking}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {match.player1.sets.map((set, index) => (
                <span key={index} className={`text-sm font-mono ${winner === 1 ? 'font-bold' : ''}`}>
                  {set}
                </span>
              ))}
            </div>
          </div>

          {/* Player 2 */}
          <div className={`flex items-center justify-between p-3 rounded-lg ${winner === 2 ? 'bg-success/10 border border-success/20' : 'bg-muted/30'}`}>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className={`font-semibold ${winner === 2 ? 'text-success' : ''}`}>
                  {match.player2.name}
                </span>
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  #{match.player2.ranking}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {match.player2.sets.map((set, index) => (
                <span key={index} className={`text-sm font-mono ${winner === 2 ? 'font-bold' : ''}`}>
                  {set}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Users className="h-4 w-4 mr-1" />
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};