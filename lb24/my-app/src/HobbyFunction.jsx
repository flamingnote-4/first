export default function Hobby({ title, children }) {
  return (
    <div className="center ">
      <h2 className="title">{title}</h2>
      <p className="text">{children}</p>
      <br />
    </div>
  );
}
