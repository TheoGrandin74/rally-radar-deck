import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { TennisMatchCard } from "@/components/TennisMatchCard";
import { MatchDetailModal } from "@/components/MatchDetailModal";
import { mockMatches } from "@/data/mockMatches";
import { Trophy, Activity, Calendar, TrendingUp } from "lucide-react";

interface TennisMatch {
  id: string;
  tournament: string;
  round: string;
  court: string;
  status: "live" | "completed" | "upcoming";
  startTime: string;
  surface: string;
  player1: {
    name: string;
    country: string;
    ranking: number;
    sets: number[];
  };
  player2: {
    name: string;
    country: string;
    ranking: number;
    sets: number[];
  };
  player1Stats: any;
  player2Stats: any;
}

const Index = () => {
  const [selectedMatch, setSelectedMatch] = useState<TennisMatch | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMatchClick = (match: TennisMatch) => {
    setSelectedMatch(match);
    setIsModalOpen(true);
  };

  const liveMatches = mockMatches.filter(match => match.status === "live");
  const completedMatches = mockMatches.filter(match => match.status === "completed");
  const upcomingMatches = mockMatches.filter(match => match.status === "upcoming");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary rounded-xl shadow-lg">
              <Trophy className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                Tennis Dashboard
              </h1>
              <p className="text-muted-foreground">
                Track live matches and analyze player statistics
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-card p-3 rounded-lg shadow-sm">
              <Activity className="h-5 w-5 text-destructive" />
              <span className="font-semibold">{liveMatches.length}</span>
              <span className="text-sm text-muted-foreground">Live Matches</span>
            </div>
            <div className="flex items-center gap-2 bg-card p-3 rounded-lg shadow-sm">
              <Calendar className="h-5 w-5 text-success" />
              <span className="font-semibold">{completedMatches.length}</span>
              <span className="text-sm text-muted-foreground">Completed Today</span>
            </div>
            <div className="flex items-center gap-2 bg-card p-3 rounded-lg shadow-sm">
              <TrendingUp className="h-5 w-5 text-info" />
              <span className="font-semibold">{upcomingMatches.length}</span>
              <span className="text-sm text-muted-foreground">Upcoming</span>
            </div>
          </div>
        </div>

        {/* Match Tabs */}
        <Tabs defaultValue="live" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-card shadow-sm">
            <TabsTrigger value="live" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Live Matches
              {liveMatches.length > 0 && (
                <Badge variant="secondary" className="bg-destructive text-destructive-foreground animate-pulse">
                  {liveMatches.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Completed
              {completedMatches.length > 0 && (
                <Badge variant="secondary">
                  {completedMatches.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Upcoming
              {upcomingMatches.length > 0 && (
                <Badge variant="secondary">
                  {upcomingMatches.length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="live" className="space-y-4">
            {liveMatches.length > 0 ? (
              <div className="grid gap-4">
                {liveMatches.map((match) => (
                  <TennisMatchCard
                    key={match.id}
                    match={match}
                    onClick={handleMatchClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Activity className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-muted-foreground">
                  No live matches right now
                </h3>
                <p className="text-sm text-muted-foreground">
                  Check back later for live match updates
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {completedMatches.length > 0 ? (
              <div className="grid gap-4">
                {completedMatches.map((match) => (
                  <TennisMatchCard
                    key={match.id}
                    match={match}
                    onClick={handleMatchClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-muted-foreground">
                  No completed matches today
                </h3>
              </div>
            )}
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4">
            {upcomingMatches.length > 0 ? (
              <div className="grid gap-4">
                {upcomingMatches.map((match) => (
                  <TennisMatchCard
                    key={match.id}
                    match={match}
                    onClick={handleMatchClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-muted-foreground">
                  No upcoming matches scheduled
                </h3>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Match Detail Modal */}
        <MatchDetailModal
          match={selectedMatch}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default Index;