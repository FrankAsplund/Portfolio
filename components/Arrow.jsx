/* import React from "react";

export default function Arrow() {
  return (
    <div className="arrow">
      <svg viewBox="0 0 60 48">
        <polygon
          className="arrow-top"
          points="28.2,18.6 1.1,1.1 1.6,0 28.2,16.9 54.8,0 55.4,1.1"
        />
        <polygon
          className="arrow-middle"
          points="28.2,28.9 0.7,12.2 2.2,10.6 28.2,24.6 54.1,10.6 55.6,12.2"
        />
        <polygon
          className="arrow-bottom"
          points="28.2,39.3 0,22.3 3,20.1 28.2,34.3 54.3,20.1 57.3,22.3"
        />
      </svg>
      <style jsx>{`
        .arrow {
          position: fixed;
          width: 75px;
          height: 65px;
          &:hover {
            polygon {
              fill: #fff;
              transition: all 0.2s ease-out;

              &.arrow-bottom {
                transform: translateY(-18px);
              }

              &.arrow-top {
                transform: translateY(18px);
              }
            }
          }
          polygon {
            fill: #fff;
            transition: all 0.2s ease-out;

            &.arrow-middle {
              opacity: 0.75;
            }

            &.arrow-top {
              opacity: 0.5;
            }
          }
        }
      `}</style>
    </div>
  );
} */
