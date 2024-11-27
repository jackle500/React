import styles from "./AppNav.module.css";
import Sidebar from "./Sidebar";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <Sidebar />
    </nav>
  );
}

export default AppNav;
