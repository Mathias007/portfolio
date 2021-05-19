import React, { Suspense, useState, useEffect } from "react";
import axios from "axios";

import BlockHeading from "./heading/BlockHeading";
import Loading from "./universal/Loading";

import { paths } from "../../config/names";
const { about } = paths;

const AboutContentBox = React.lazy(() => import("./boxes/AboutContentBox"));

export default function About() {
    const [dataLoading, setDataLoading] = useState(false);
    const [aboutData, setAboutData] = useState([]);

    useEffect(() => {
        setDataLoading(true);

        async function fetchAboutData() {
            const result = await axios(
                `${process.env.REACT_APP_SERVER_URL}${about}`
            );

            setAboutData(result.data.aboutData);
        }

        if (dataLoading) {
            fetchAboutData();
        }
        return () => {
            setDataLoading(false);
        };
    }, [aboutData, dataLoading]);

    return (
        <article className="portfolio__block about" id="about">
            <BlockHeading
                headingBlockClass="about__heading"
                headingTitle="O mnie, czyli historia pewnego pasjonata"
            />

            <div className="about__content block-content">
                {aboutData
                    ? aboutData.map((element, index) => {
                          const {
                              _id,
                              subheader,
                              paragraph,
                              imagePath,
                              imageDescription,
                          } = element;

                          return (
                              <Suspense fallback={<Loading />} key={_id}>
                                  <AboutContentBox
                                      id={_id}
                                      index={index}
                                      contentSubheader={subheader}
                                      contentText={paragraph}
                                      imagePath={imagePath}
                                      imageDescription={imageDescription}
                                  />
                              </Suspense>
                          );
                      })
                    : null}
            </div>
        </article>
    );
}
