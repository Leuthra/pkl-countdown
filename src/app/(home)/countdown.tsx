"use client";

import { createCountdown, CreateCountdown } from "@/utils/countdown";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

interface Props {
  endDate: Date;
}

export default function Countdown({ endDate }: Props) {
  const [countdown, setCountdown] = useState<CreateCountdown["countdown"] | null>(null);

  const updateCountdown = () => {
    const countdown = createCountdown({
      endDate,
      timezoneOffset: 8,
    });
    setCountdown(countdown.countdown);
  };

  useEffect(() => {
    const interval = setInterval(updateCountdown, 1000); // Updates countdown every 1 second

    return () => clearInterval(interval);
  }, [endDate]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!countdown) {
    return <></>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div>
          <p className="text-2xl font-semibold text-gray-800">Days</p>
          <p className="text-6xl font-bold text-gray-800 tabular-nums">
            {countdown.days.toString().padStart(2, "0")}
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-gray-800">Hours</p>
          <p className="text-6xl font-bold text-gray-800 tabular-nums">
            {countdown.hours.toString().padStart(2, "0")}
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-gray-800">Minutes</p>
          <p className="text-6xl font-bold text-gray-800 tabular-nums">
            {countdown.minutes.toString().padStart(2, "0")}
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-gray-800">Seconds</p>
          <p className="text-6xl font-bold text-gray-800 tabular-nums">
            {countdown.seconds.toString().padStart(2, "0")}
          </p>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 mt-6">
        The countdown will end on{" "}
        {endDate.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
        🌟
      </p>
    </div>
  );
}
