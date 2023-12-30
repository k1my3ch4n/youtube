import styles from "./Sidebar.module.scss";

const SideBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>expand button</div>
      <div className={styles.items}>Home</div>
      <div className={styles.items}>Shorts</div>
      <div className={styles.items}>구독</div>
      <div className={styles.items}>Youtube Music</div>
      <div className={styles.items}>나</div>
      <div className={styles.items}>오프라인 저장</div>
    </div>
  );
};

export default SideBar;
