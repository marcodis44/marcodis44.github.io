import img from "../assets/IMG_5997.png";

const Picture = () => {
  return (
    <div className="w-80 h-80 rounded-full">
      <img
        src={img}
        alt="Foto Marco Dispoto"
        className="rounded-full w-100 h-100 object-cover bg-orange"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Picture;
