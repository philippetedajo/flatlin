import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="px-10 flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:items-center text-white bg-black"
      style={{ height: "50px" }}
    >
      <ul className="flex flex-col text-center sm:flex-row">
        <li>
          <p className="mr-2.5 lg:mr-10">@2020 Flatline</p>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
