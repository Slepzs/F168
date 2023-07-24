import Link from "next/link";
import React, { memo, useEffect, useState } from "react"; // Import useState
import Layout from "~components/Organism/Layout";
import { useTimerStore } from "../../utils/store";
import { DateTime } from "luxon"; // Import Luxon's DateTime and Duration
import Card from "~components/Atoms/Card";
import WatchTimer from "~components/Atoms/svg/WatchTimer";
import Times from "~components/Atoms/Times";

const Homepage: React.FC = () => {
  const { timer, startTimer, stopTimer } = useTimerStore();
  /*   const [time, setTime] = useState<string>("0"); // Use state to manage time */
  /*   let intervalId: NodeJS.Timeout | null = null;
   */

  return (
    <Layout>
      <div>
        <div></div>
        <div>
          <Card>
            <div className="p-4 sm:p-12 grid justify-center relative">
              <WatchTimer />
              {/*    <Times times={timer} /> */}
            </div>
          </Card>
        </div>

        <Card classes="py-4 px-2 mt-8">
          <div className="grid grid-cols-2 gap-4">
            <button
              className="rounded-md"
              onClick={() => {
                startTimer();
              }}
            >
              Start
            </button>
            <button
              className="rounded-md"
              onClick={() => {
                stopTimer();
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
