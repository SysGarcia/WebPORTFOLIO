import React from "react";

interface Item {
  dateRange: string;
  title: string;
  link?: string;
  description: string;
  work?: boolean;
  study?: boolean;
}

interface Props {
  items: Item[];
}

const TimeFrame: React.FC<Props> = ({ items }) => {
  return (
    <ol
      className="relative border-s border-button_secondary mt-6 ml-3"
      id="side-bar-studies"
    >
      {items.map((item, index) => (
        <li key={index} className="mb-10 ms-4">
          <div
            className="absolute w-3 h-3 mt-0 border-button_secondary bg-button_primary border"
            style={{ insetInlineStart: "-0.38rem" }}
          />
          <time
            className="mb-1 text-sm leading-none text-button_secondary "
            style={{ display: "inherit" }}
          >
            {item.dateRange}
          </time>
          <div class="flex gap-y-2 flex-col">
          <h3 className="text-lg font-normal text-text_primary gap-x-2 flex justify-normal items-center">
            {item.work && (
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 220.168 220.168"
                fill="currentColor"
              >
                <path d="M31.622,100.402v-0.624c0-4.143,3.358-7.5,7.5-7.5h37.725c4.142,0,7.5,3.357,7.5,7.5v0.624h51.476v-0.624 c0-4.143,3.358-7.5,7.5-7.5h37.725c4.142,0,7.5,3.357,7.5,7.5v0.624h31.622V79.259c0-14.337-11.664-26-26-26h-36.171V29.495 c0-4.143-3.358-7.5-7.5-7.5H69.671c-4.142,0-7.5,3.357-7.5,7.5v23.765H26c-14.336,0-26,11.663-26,26v21.143H31.622z M77.171,36.995 h65.825v16.265H77.171V36.995z M220.168,115.402v56.771c0,14.337-11.664,26-26,26H26c-14.336,0-26-11.663-26-26v-56.771h31.622 v3.896c0,4.143,3.358,7.5,7.5,7.5h37.725c4.142,0,7.5-3.357,7.5-7.5v-3.896h51.476v3.896c0,4.143,3.358,7.5,7.5,7.5h37.725 c4.142,0,7.5-3.357,7.5-7.5v-3.896H220.168z" />
              </svg>
            )}
            {item.study && (
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  
                  d="M5 0C3.34315 0 2 1.34315 2 3V13C2 14.6569 3.34315 16 5 16H14V14H4V12H14V0H5Z"
                />
              </svg>
            )}
            {item.title}
          </h3>

          {item.link && (
            <h4 className="text-sm font-normal underline text-button_terciary">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.link}
              </a>
            </h4>
          )}

          <p className="text-sm text-text_secondary">
            {item.description}
          </p>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default TimeFrame;
