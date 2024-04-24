import { defaults } from "autoprefixer";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red", width: '50px', height: '50px', borderRadius: '50%' }}
        onClick={onClick}
      />
    )
    }
    export default SampleNextArrow;