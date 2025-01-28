"use client";

import React from "react";
import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educDatas } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import TimelineElement from "./TimelineElement";
import SectionHeading from "./section-heading";

export default function Educations() {
  const { ref } = useSectionInView("Educations");
  return (
    <section
      className="scroll-mt-28 mb-28 sm:mb-40"
      id="educations" ref={ref}
    ><SectionHeading>My educations</SectionHeading>
      <VerticalTimeline lineColor="">
        {educDatas.map((item, index) => {
          return ( <TimelineElement key={index} item={item} /> );
        })}
      </VerticalTimeline>
    </section>
  );
}