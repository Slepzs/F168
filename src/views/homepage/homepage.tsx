import Link from "next/link";
import React, { memo, useEffect, useState } from "react"; // Import useState
import Layout from "~components/Organism/Layout";
import { useTimeStore, useStore } from "../../utils/store";
import { DateTime } from "luxon"; // Import Luxon's DateTime and Duration
import Card from "~components/Atoms/Card";
import WatchTimer from "~components/Atoms/svg/WatchTimer";
import Times from "~components/Atoms/Times";

const Homepage: React.FC = () => {
  const timer = useStore(useTimeStore, (state) => state);
  const [time, setTime] = useState<string>("0"); // Use state to manage time
  let intervalId: NodeJS.Timeout | null = null;

  useEffect(() => {
    if (timer?.timerActive && timer?.time) {
      const startTime = timer?.time
        ? DateTime.fromISO(timer?.time)
        : DateTime.now();

      intervalId = setInterval(() => {
        // calculate time passed since start timer
        const timePassed = DateTime.now()
          .diff(startTime)
          .shiftTo("hours", "minutes", "seconds");
        const formattedTime = timePassed.toFormat("hh:mm:ss"); // Format the time passed as "hh:mm:ss"
        setTime(formattedTime);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId); // Clean up the interval on component unmount
      }
    };
  }, [timer?.timerActive, timer?.time]);

  return (
    <Layout>
      <div>
        <div></div>
        <div>
          <Card>
            <div className="p-4 sm:p-12 grid justify-center relative">
              <WatchTimer />
              <Times times={time} />
            </div>
          </Card>
        </div>

        <Card classes="py-4 px-2 mt-8">
          <div className="grid grid-cols-2 gap-4">
            <button
              className="rounded-md"
              onClick={() => {
                timer?.changeTimerStatus();
                if (time?.length === 1) {
                  timer?.setTime();
                }
              }}
            >
              Start
            </button>
            <button
              className="rounded-md"
              onClick={() => {
                clearInterval(intervalId!);
                timer?.changeTimerStatus();
              }}
            >
              Stop
            </button>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default memo(Homepage);
