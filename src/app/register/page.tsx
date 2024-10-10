import Link from "next/link";

const page = () => {
  return (
    <div className="mx-auto text-center">
      {" "}
      <h1 className="text-2xl font-bold">Bond Pet Care | Register Page</h1>
      <Link href="/login" className="btn">
        Already an user ? | Login Now
      </Link>
    </div>
  );
};

export default page;
