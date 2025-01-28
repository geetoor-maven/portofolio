"use client";

import React from "react";
import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import TimelineElement from "./TimelineElement";
import SectionHeading from "./section-heading";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  return (
    <section
      className="scroll-mt-28 mb-28 sm:mb-40"
      id="experience" ref={ref}
    ><SectionHeading>My experiences</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          return ( <TimelineElement key={index} item={item} /> );
        })}
      </VerticalTimeline>
    </section>
  );
}