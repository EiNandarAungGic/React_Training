import React, { useContext } from "react";
import JobHeader from "./JobHeader";
import JobMainContent from "./JobMainContent";
import jobsData from "../jobsData";
import JobSearch from "./JobSearch";
import { CounterContext } from "../contexts/CounterProvider";

export default function JobBody() {
  const { data } = useContext(CounterContext);

  const filteredDataArray = jobsData.filter((obj1) => {
    if (!obj1.languages) {
      return false;
    }

    const langsInDataArray = obj1.languages.some((lang) =>
      data.some((obj2) => obj2.role && obj2.role.includes(lang))
    );

    return langsInDataArray;
  });

  const jobElement = (
    filteredDataArray.length !== 0 ? filteredDataArray : jobsData
  ).map((job) => (
    <JobMainContent key={job.id} languages={job.languages} {...job} />
  ));

  return (
    <main className="bg-teal-50">
      <JobHeader />
      {data.length !== 0 && <JobSearch />}
      {jobElement}
    </main>
  );
}
