import { Carousel } from "react-bootstrap";
import styles from "../styles/ProjectGallery.module.css";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { BaseUrl } from "./BaseeUrl";
import Image from "next/image";

const ProjectGallery = ({ gallery, projectName }) => {
    return (
        <Carousel>
        {gallery.images.map((image, i) => {
            return (
            <Carousel.Item key={image.id}>
                <Image
                className={`d-block w-100 ${styles.gallery}`}
                src={`/${image.image?.slice(1)}`}
                alt={image.title}
                />
                <Carousel.Caption className={styles.caption + "  bg-secondary bg-opacity-50"}>
                <h3>
                    {
                        image.title?.length > 20 ? image.title.slice(0, 20) + "..." : image.title ? image.title : projectName + " " + (i+1)
                    }
                </h3>
                <p>{image.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
            );
        })}
        </Carousel>
    );
    };

export default ProjectGallery;
