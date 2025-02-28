import Countdown from "@/app/(home)/countdown";
import { getCountdownData, CountdownData } from "@/utils/getCountdownData";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const data: CountdownData = await getCountdownData();

  return {
    title: `PKL Countdown`,
    description: `PKL Countdown Timer ends on ${data.pklEnd}`,
  };
}

export default async function Page() {
  const data: CountdownData = await getCountdownData();

  return (
    <div className="relative flex flex-col items-center pt-20 md:pt-0 md:justify-center min-h-screen bg-gradient-to-r from-white to-gray-100 px-4 md:px-0">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        PKL Countdown
      </h1>
      <h2>End</h2>
      <div className="absolute bottom-4 opacity-70">
        <p className="text-gray-600 text-sm">
          Credit by <a href="https://romidev.tech/" className="text-gray-800 hover:text-gray-700">Romi Muharom</a>
        </p>
      </div>
    </div>
  );
}
