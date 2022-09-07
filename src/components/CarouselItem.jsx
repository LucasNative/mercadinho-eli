import styles from "./CarouselItem.module.css";
export function CarouselItem({ slide }) {
  return (
    <div className={styles.carouselItem}>
      <img src={slide} />
    </div>
  );
}
