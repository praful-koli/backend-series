import { Oval } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <Oval
        height={80}
        width={80}
        color="url(#instaGradient)"
        visible={true}
        ariaLabel="instagram-loading"
        secondaryColor="transparent"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />

      <svg width="0" height="0">
        <defs>
          <linearGradient id="instaGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#feda75" />
            <stop offset="25%" stopColor="#fa7e1e" />
            <stop offset="50%" stopColor="#d62976" />
            <stop offset="75%" stopColor="#962fbf" />
            <stop offset="100%" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
