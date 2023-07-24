import { memo, useEffect } from "react";
import gsap from "gsap";

type Props = {};

const WatchFace: React.FC<Props> = () => {
  const dotAnimation = () => {
    const path = document.querySelector<SVGPathElement>(".watchline");
    const circle = document.querySelector<SVGCircleElement>(".circle");

    const val = { distance: 0 }; // ToDo:: Calculate this value based on time spent in fasting.
    console.log(path.getTotalLength());
    // Create a tween
    gsap.to(val, {
      // Animate from distance 0 to the total distance
      distance: path.getTotalLength(),
      // Make the animation lasts 5 seconds
      duration: 5,
      // Function call on each frame of the animation
      onUpdate: () => {
        // Query a point at the new distance value
        const point = path.getPointAtLength(100);
        // Update the circle coordinates
        circle.setAttribute("cx", point.x.toString());
        circle.setAttribute("cy", point.y.toString());
      },
    });
  };

  useEffect(() => {
    dotAnimation();
  }, []);

  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_6_24)">
          <path
            d="M176.758 35.9054C191.774 53.8882 200 76.5724 200 100H195C195 77.7438 187.186 56.1938 172.92 39.1101C158.655 22.0264 138.845 10.4936 116.945 6.52367C95.0457 2.55378 72.4475 6.39887 53.0933 17.3881C33.739 28.3773 18.8575 45.8131 11.0451 66.6533C3.23259 87.4935 2.98517 110.415 10.346 131.419C17.7067 152.423 32.2084 170.176 51.3209 181.581C70.4334 192.985 92.9434 197.317 114.923 193.821C136.904 190.324 156.958 179.222 171.589 162.45L175.357 165.737C159.956 183.391 138.846 195.078 115.709 198.759C92.572 202.439 68.8773 197.879 48.7589 185.874C28.6404 173.87 13.3755 155.182 5.62732 133.073C-2.12087 110.963 -1.86043 86.8352 6.36321 64.8982C14.5869 42.9611 30.2516 24.6077 50.6245 13.0401C70.9973 1.47249 94.7849 -2.57498 117.837 1.60385C140.889 5.78269 161.742 17.9225 176.758 35.9054Z"
            fill="#1E1E1E"
            fillOpacity="0.17"
            strokeDasharray="0 1"
          />
          <path
            d="M170.178 161.219L166.399 157.923C152.829 173.478 134.228 183.776 113.842 187.019C93.455 190.262 72.577 186.244 54.8501 175.666C37.1233 165.088 23.673 148.623 16.8458 129.141C10.0187 109.66 10.2482 88.4002 17.4942 69.0709C24.7403 49.7416 38.5429 33.57 56.494 23.3774C74.445 13.1849 95.4049 9.61859 115.717 13.3007C136.029 16.9827 154.403 27.6795 167.634 43.5246C180.865 59.3697 188.113 79.3573 188.113 100H193.127C193.127 78.1824 185.467 57.0573 171.483 40.3103C157.499 23.5634 138.079 12.2578 116.611 8.3662C95.1433 4.47456 72.9906 8.24386 54.0178 19.0165C35.0451 29.7891 20.4569 46.8811 12.7985 67.3106C5.13999 87.74 4.89744 110.21 12.1131 130.8C19.3288 151.39 33.5447 168.793 52.2804 179.972C71.0162 191.152 93.0825 195.399 114.629 191.971C136.176 188.544 155.836 177.66 170.178 161.219Z"
            fill="#1E1E1E"
            fillOpacity="0.17"
            className="watchline"
          />
        </g>
        <circle
          cx={0} // Initial X position of the dot
          cy={0} // Initial Y position of the dot
          r={3} // Radius of the dot
          fill="black"
          className="circle "
        />
        <defs>
          <filter
            id="filter0_i_6_24"
            x="0"
            y="0"
            width="202"
            height="204"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_6_24"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default memo(WatchFace);
