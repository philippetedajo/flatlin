import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="px-10 flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:items-center"
      style={{ height: "50px" }}
    >
      <ul className="flex flex-col text-center sm:flex-row">
        <li>
          <p className="mr-2.5 lg:mr-10">@2020 Nextwind </p>
        </li>
        <li>
          <Link href="/privacy">
            <a>Privacy policies</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
