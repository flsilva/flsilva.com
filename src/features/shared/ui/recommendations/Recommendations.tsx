"use client";

import "client-only";
import { H1, SmallText } from "../typography/Typography";
import { ClassNamePropsOptional } from "../ClassNameProps";
import { Recommendation } from "./Recommendation";

export const Recommendations = ({ className }: ClassNamePropsOptional) => (
  <div
    className={className}
    onClick={() =>
      window.open(
        "https://www.linkedin.com/in/flsilva/details/recommendations/?detailScreenTabIndex=0",
        "_self"
      )
    }
  >
    <H1 className="text-center">Recommendations</H1>
    <SmallText className="block text-center">Tap to see on LinkedIn</SmallText>
    <div className="mt-12">
      <div
        id="recommendations-list"
        className="flex flex-col gap-12 cursor-pointer md:flex-row md:gap-8 gtm-linkedin-recommendations-link"
      >
        <Recommendation
          image="/images/people/kate-frucher-thumb.jpg"
          name="Kate Frucher"
          position="Managing Director | Co–Founder"
        >
          Flavio is both fast and thorough. But I was particularly struck by the
          deep thoughtfulness and helpfulness he brought to the team, and by the
          smile and positive spirit he shared, every day.
        </Recommendation>
        <Recommendation
          image="/images/people/seyi-moon-thumb.jpg"
          name="Seyi Moon"
          position="Manager"
        >
          Flavio not only has superb communication skills, but he&#39;s also a
          proactive problem solver. He will go above and beyond what is asked of
          him to make sure the team and the project will succeed.
        </Recommendation>
        <Recommendation
          image="/images/people/richard-broo-thumb.jpg"
          name="Richard Broo"
          position="Co-Founder"
        >
          Flavio came in a freelance developer to help us develop a large
          platform MVP for a client. He proved himself beyond valuable in ideas
          and execution. I would recommend him for any project challenge, as he
          will rise to the occasion.
        </Recommendation>
      </div>
    </div>
  </div>
);
