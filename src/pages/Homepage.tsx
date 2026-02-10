import React from "react";
import { PageLayout } from "../components/PageLayout";

const byline = [
  {
    name: "Chloe Rogers",
    url: "https://www.latimes.com/people/nobody",
  },
];

export const Homepage = () => (
  <PageLayout>
    <div>
      <div className="container">
        <h1 className="headline">This is not a headline ok</h1>
        <div className="attribution">
          <p className="byline">
            By{" "}
            {byline.map((author, i) => (
              <span key={i} className="author">
                <a href={author.url}>{author.name}</a>
                {i < byline.length - 2
                  ? ", "
                  : i < byline.length - 1
                  ? " and "
                  : ""}
              </span>
            ))}
          </p>
        </div>
      </div>

      <br />

      <div className="container">
        <p className="copy">
         Okayyyy this is fun.
        </p>
        <p className="copy">
          Let's see if this works...
        </p>
      </div>
    </div>
  </PageLayout>
);
