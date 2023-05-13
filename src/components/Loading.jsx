import { ColorRing } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="loader">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#f44336", "#ffd966"]}
      />
    </div>
  );
}
