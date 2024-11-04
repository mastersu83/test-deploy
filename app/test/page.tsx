import Link from "next/link";

const Test = () => {
  return (
    <div className="">
      Page
      <Link href={"/"}>
        <button>back</button>
      </Link>
    </div>
  );
};

export default Test;
