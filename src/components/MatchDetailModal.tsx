import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, Zap, TrendingUp, Clock, MapPin } from "lucide-react";

interface Player {
  name: string;
  country: string;
  ranking: number;
  sets: number[];
}

interface MatchStats {
  aces: number;
  doubleFaults: number;
  firstServePercentage: number;
  firstServePointsWon: number;
  secondServePointsWon: number;
  breakPointsConverted: string;
  winners: number;
  unforcedErrors: number;
  totalPoints: number;
  gameTime: string;
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
  player1Stats: MatchStats;
  player2Stats: MatchStats;
}

interface MatchDetailModalProps {
  match: TennisMatch | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MatchDetailModal = ({ match, isOpen, onClose }: MatchDetailModalProps) => {
  if (!match) return null;

  const StatComparison = ({ 
    label, 
    player1Value, 
    player2Value, 
    player1Name, 
    player2Name, 
    isPercentage = false,
    icon: Icon 
  }: {
    label: string;
    player1Value: number;
    player2Value: number;
    player1Name: string;
    player2Name: string;
    isPercentage?: boolean;
    icon?: any;
  }) => {
    const total = player1Value + player2Value;
    const player1Percentage = total > 0 ? (player1Value / total) * 100 : 50;
    const player2Percentage = 100 - player1Percentage;

    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
            <span className="text-sm font-medium">{label}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="font-mono">{isPercentage ? `${player1Value}%` : player1Value}</span>
          <span className="font-mono">{isPercentage ? `${player2Value}%` : player2Value}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-muted rounded-full h-2 relative overflow-hidden">
            <div 
              className="bg-primary h-full transition-all duration-500" 
              style={{ width: `${player1Percentage}%` }}
            />
            <div 
              className="bg-accent h-full absolute top-0 right-0 transition-all duration-500" 
              style={{ width: `${player2Percentage}%` }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl">Match Details</DialogTitle>
            <Badge className={match.status === "live" ? "bg-destructive animate-pulse" : "bg-success"}>
              {match.status.toUpperCase()}
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Trophy className="h-4 w-4" />
              {match.tournament} - {match.round}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {match.court} ({match.surface})
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {match.startTime}
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="stats">Detailed Stats</TabsTrigger>
            <TabsTrigger value="momentum">Momentum</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Score Display */}
            <Card>
              <CardHeader>
                <CardTitle>Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{match.player1.name}</h3>
                        <p className="text-sm text-muted-foreground">#{match.player1.ranking}</p>
                      </div>
                      <div className="flex gap-2">
                        {match.player1.sets.map((set, index) => (
                          <span key={index} className="text-xl font-mono font-bold bg-muted px-3 py-1 rounded">
                            {set}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{match.player2.name}</h3>
                        <p className="text-sm text-muted-foreground">#{match.player2.ranking}</p>
                      </div>
                      <div className="flex gap-2">
                        {match.player2.sets.map((set, index) => (
                          <span key={index} className="text-xl font-mono font-bold bg-muted px-3 py-1 rounded">
                            {set}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Aces
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <StatComparison
                    label="Total Aces"
                    player1Value={match.player1Stats.aces}
                    player2Value={match.player2Stats.aces}
                    player1Name={match.player1.name}
                    player2Name={match.player2.name}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Winners
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <StatComparison
                    label="Total Winners"
                    player1Value={match.player1Stats.winners}
                    player2Value={match.player2Stats.winners}
                    player1Name={match.player1.name}
                    player2Name={match.player2.name}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Serving Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <StatComparison
                    label="First Serve Percentage"
                    player1Value={match.player1Stats.firstServePercentage}
                    player2Value={match.player2Stats.firstServePercentage}
                    player1Name={match.player1.name}
                    player2Name={match.player2.name}
                    isPercentage={true}
                  />
                  <StatComparison
                    label="First Serve Points Won"
                    player1Value={match.player1Stats.firstServePointsWon}
                    player2Value={match.player2Stats.firstServePointsWon}
                    player1Name={match.player1.name}
                    player2Name={match.player2.name}
                    isPercentage={true}
                  />
                  <StatComparison
                    label="Double Faults"
                    player1Value={match.player1Stats.doubleFaults}
                    player2Value={match.player2Stats.doubleFaults}
                    player1Name={match.player1.name}
                    player2Name={match.player2.name}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rally Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <StatComparison
                    label="Unforced Errors"
                    player1Value={match.player1Stats.unforcedErrors}
                    player2Value={match.player2Stats.unforcedErrors}
                    player1Name={match.player1.name}
                    player2Name={match.player2.name}
                  />
                  <StatComparison
                    label="Total Points Won"
                    player1Value={match.player1Stats.totalPoints}
                    player2Value={match.player2Stats.totalPoints}
                    player1Name={match.player1.name}
                    player2Name={match.player2.name}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="momentum" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Match Momentum
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Momentum tracking feature coming soon...</p>
                <div className="h-40 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Momentum Chart Placeholder</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};