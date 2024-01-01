import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/avatar.png"}
        width={637}
        height={578}
        alt="AVA"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
