"use client";
/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

// @ts-ignore
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface Props {
  namespace: string;
  calllink: string;
}

export default function CalendarComponent({ namespace, calllink }: Props) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      // cal.ns[namespace]("ui", {
      //   styles: { branding: { brandColor: "#DB6332" } },
      //   hideEventTypeDetails: true,
      //   layout: "month_view",
      // });
      cal("ui", {
        styles: { branding: { brandColor: "#DB6332" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [namespace]);

  return (
    <>
      <div className="h-fit lg:w-full">
        <Cal
          namespace={namespace}
          calLink={calllink}
          style={{ width: "100%", height: "100%" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </>
  );
}
