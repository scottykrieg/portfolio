import Link from "next/link";

export default function Custom404() {
  return (
    <div>
      <h1>404 Error. Oops.....</h1>
      <br></br>
      <h3>
        Please click <Link href="/">here</Link> to go back to the home page.
      </h3>
    </div>
  );
}
