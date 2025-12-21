import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.text}>Page Not Found</p>
      <Link to="/" style={styles.link}>
        Go back home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
  },
  title: {
    fontSize: "10rem",
    margin: 0,
    color: "#ffffff",
  },
  text: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "#ffffff",
  },
  link: {
    color: "#ffffff",
    textDecoration: "underline",
    fontWeight: "bold",
  },
};


export default NotFound;
