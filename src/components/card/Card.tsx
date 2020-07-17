import React from "react";
import CountUp from "react-countup";

import { GlobalSummary, CountrySummary } from "../../types/types";

interface ICardProps {
  summary?: GlobalSummary | undefined;
  countrySummary?: CountrySummary | undefined;
}

const Card = (props: ICardProps) => {
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
          <div className="card">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">
                CONFIRMED
              </h6>
              <h2 className="card-title">
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
              <h6 className="card-subtitle mb-2 text-muted">
                {props.summary
                  ? props.summary!.Date
                  : props.countrySummary!.Date}
              </h6>
              <p className="card-text">
              Total number of infected cases <strong>{props.summary ? "Globally" : `in ${props.countrySummary!.Country}`}</strong>              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12">
          <div className="card">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">
                DEATHS
              </h6>
              <h2 className="card-title">
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
              <h6 className="card-subtitle mb-2 text-muted">
                {props.summary
                  ? props.summary!.Date
                  : props.countrySummary!.Date}
              </h6>
              <p className="card-text">
              Total number of deaths <strong>{props.summary ? "Globally" : `in ${props.countrySummary!.Country}`}</strong>              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12">
          <div className="card">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">
                RECOVERED
              </h6>
              <h2 className="card-title">
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
              <h6 className="card-subtitle mb-2 text-muted">
                {props.summary
                  ? props.summary!.Date
                  : props.countrySummary!.Date}
              </h6>
              <p className="card-text">
                Total number of recovered cases <strong>{props.summary ? "Globally" : `in ${props.countrySummary!.Country}`}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
