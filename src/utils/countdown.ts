export interface CreateCountdown {
  countdown: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export const createCountdown = ({ endDate, timezoneOffset }: { endDate: Date; timezoneOffset: number }): CreateCountdown => {
  const now = new Date();
  const end = new Date(endDate);
  const difference = end.getTime() - now.getTime();

  const countdown = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };

  return { countdown };
};
