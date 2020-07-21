import React from "react";
import CountUp from "react-countup";
import Card from "react-bootstrap/Card";

import { GlobalSummary, CountrySummary } from "../../types/types";

interface ICardProps {
  summary?: GlobalSummary | undefined;
  countrySummary?: CountrySummary | undefined;
}

const SummaryCard = (props: ICardProps) => {
  if (!props.summary && !props.countrySummary) {
    return (
      <div
        style={{ height: "100vh" }}
        className="row justify-content-center align-items-center"
      >
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row justify-content-center my-3">
        <div className="col-md-3 col-12">
          <Card>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                CONFIRMED
              </Card.Subtitle>
              <Card.Title>
                <h2>
                  <CountUp
                    start={0}
                    end={
                      props.summary
                        ? props.summary!.TotalConfirmed
                        : props.countrySummary!.TotalConfirmed
                    }
                    duration={2}
                    separator=","
                  />
                </h2>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {props.summary
                  ? props.summary!.Date
                  : props.countrySummary!.Date}
              </Card.Subtitle>
              <Card.Text>
                Total number of infected cases{" "}
                <strong>
                  {props.summary
                    ? "Globally"
                    : `in ${props.countrySummary!.Country}`}
                </strong>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 col-12">
          <Card>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">DEATHS</Card.Subtitle>
              <Card.Title>
                <h2>
                  <CountUp
                    start={0}
                    end={
                      props.summary
                        ? props.summary!.TotalDeaths
                        : props.countrySummary!.TotalDeaths
                    }
                    duration={2}
                    separator=","
                  />
                </h2>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {props.summary
                  ? props.summary!.Date
                  : props.countrySummary!.Date}
              </Card.Subtitle>
              <Card.Text>
                Total number of infected cases{" "}
                <strong>
                  {props.summary
                    ? "Globally"
                    : `in ${props.countrySummary!.Country}`}
                </strong>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 col-12">
          <Card>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                CONFIRMED
              </Card.Subtitle>
              <Card.Title>
                <h2>
                  <CountUp
                    start={0}
                    end={
                      props.summary
                        ? props.summary!.TotalRecovered
                        : props.countrySummary!.TotalRecovered
                    }
                    duration={2}
                    separator=","
                  />
                </h2>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {props.summary
                  ? props.summary!.Date
                  : props.countrySummary!.Date}
              </Card.Subtitle>
              <Card.Text>
                Total number of infected cases{" "}
                <strong>
                  {props.summary
                    ? "Globally"
                    : `in ${props.countrySummary!.Country}`}
                </strong>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
};

export default SummaryCard;
