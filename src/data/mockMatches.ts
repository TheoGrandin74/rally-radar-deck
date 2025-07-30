export const mockMatches = [
  {
    id: "1",
    tournament: "Australian Open",
    round: "Quarterfinals",
    court: "Rod Laver Arena",
    status: "live" as const,
    startTime: "14:30",
    surface: "Hard",
    player1: {
      name: "Novak Djokovic",
      country: "SRB",
      ranking: 1,
      sets: [6, 4, 2]
    },
    player2: {
      name: "Carlos Alcaraz",
      country: "ESP",
      ranking: 2,
      sets: [4, 6, 4]
    },
    player1Stats: {
      aces: 8,
      doubleFaults: 2,
      firstServePercentage: 68,
      firstServePointsWon: 74,
      secondServePointsWon: 52,
      breakPointsConverted: "3/7",
      winners: 24,
      unforcedErrors: 18,
      totalPoints: 89,
      gameTime: "2h 15m"
    },
    player2Stats: {
      aces: 12,
      doubleFaults: 4,
      firstServePercentage: 72,
      firstServePointsWon: 78,
      secondServePointsWon: 48,
      breakPointsConverted: "4/8",
      winners: 31,
      unforcedErrors: 22,
      totalPoints: 94,
      gameTime: "2h 15m"
    }
  },
  {
    id: "2",
    tournament: "Australian Open",
    round: "Quarterfinals",
    court: "Margaret Court Arena",
    status: "completed" as const,
    startTime: "11:00",
    surface: "Hard",
    player1: {
      name: "Jannik Sinner",
      country: "ITA",
      ranking: 4,
      sets: [7, 6, 6]
    },
    player2: {
      name: "Daniil Medvedev",
      country: "RUS",
      ranking: 3,
      sets: [6, 4, 2]
    },
    player1Stats: {
      aces: 15,
      doubleFaults: 3,
      firstServePercentage: 71,
      firstServePointsWon: 79,
      secondServePointsWon: 55,
      breakPointsConverted: "5/9",
      winners: 38,
      unforcedErrors: 25,
      totalPoints: 116,
      gameTime: "2h 45m"
    },
    player2Stats: {
      aces: 9,
      doubleFaults: 5,
      firstServePercentage: 64,
      firstServePointsWon: 69,
      secondServePointsWon: 44,
      breakPointsConverted: "2/6",
      winners: 29,
      unforcedErrors: 31,
      totalPoints: 98,
      gameTime: "2h 45m"
    }
  },
  {
    id: "3",
    tournament: "Australian Open",
    round: "Round of 16",
    court: "Court 7",
    status: "upcoming" as const,
    startTime: "19:00",
    surface: "Hard",
    player1: {
      name: "Alexander Zverev",
      country: "GER",
      ranking: 6,
      sets: [0, 0, 0]
    },
    player2: {
      name: "Taylor Fritz",
      country: "USA",
      ranking: 12,
      sets: [0, 0, 0]
    },
    player1Stats: {
      aces: 0,
      doubleFaults: 0,
      firstServePercentage: 0,
      firstServePointsWon: 0,
      secondServePointsWon: 0,
      breakPointsConverted: "0/0",
      winners: 0,
      unforcedErrors: 0,
      totalPoints: 0,
      gameTime: "0h 0m"
    },
    player2Stats: {
      aces: 0,
      doubleFaults: 0,
      firstServePercentage: 0,
      firstServePointsWon: 0,
      secondServePointsWon: 0,
      breakPointsConverted: "0/0",
      winners: 0,
      unforcedErrors: 0,
      totalPoints: 0,
      gameTime: "0h 0m"
    }
  },
  {
    id: "4",
    tournament: "Australian Open",
    round: "Semifinals",
    court: "Rod Laver Arena",
    status: "completed" as const,
    startTime: "09:30",
    surface: "Hard",
    player1: {
      name: "Stefanos Tsitsipas",
      country: "GRE",
      ranking: 7,
      sets: [4, 6, 3]
    },
    player2: {
      name: "Karen Khachanov",
      country: "RUS",
      ranking: 18,
      sets: [6, 4, 6]
    },
    player1Stats: {
      aces: 6,
      doubleFaults: 6,
      firstServePercentage: 59,
      firstServePointsWon: 71,
      secondServePointsWon: 41,
      breakPointsConverted: "1/5",
      winners: 22,
      unforcedErrors: 28,
      totalPoints: 87,
      gameTime: "2h 32m"
    },
    player2Stats: {
      aces: 11,
      doubleFaults: 2,
      firstServePercentage: 67,
      firstServePointsWon: 76,
      secondServePointsWon: 58,
      breakPointsConverted: "3/6",
      winners: 33,
      unforcedErrors: 19,
      totalPoints: 103,
      gameTime: "2h 32m"
    }
  },
  {
    id: "5",
    tournament: "ATP Masters 1000 Miami",
    round: "Final",
    court: "Stadium Court",
    status: "live" as const,
    startTime: "16:00",
    surface: "Hard",
    player1: {
      name: "Rafael Nadal",
      country: "ESP",
      ranking: 5,
      sets: [3, 6]
    },
    player2: {
      name: "Casper Ruud",
      country: "NOR",
      ranking: 8,
      sets: [6, 3]
    },
    player1Stats: {
      aces: 4,
      doubleFaults: 1,
      firstServePercentage: 73,
      firstServePointsWon: 81,
      secondServePointsWon: 61,
      breakPointsConverted: "2/4",
      winners: 19,
      unforcedErrors: 12,
      totalPoints: 67,
      gameTime: "1h 48m"
    },
    player2Stats: {
      aces: 7,
      doubleFaults: 3,
      firstServePercentage: 69,
      firstServePointsWon: 75,
      secondServePointsWon: 47,
      breakPointsConverted: "1/3",
      winners: 23,
      unforcedErrors: 16,
      totalPoints: 64,
      gameTime: "1h 48m"
    }
  }
];