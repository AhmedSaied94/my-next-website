import React from "react";
import styles from "../styles/ContactMe.module.css";
import { Stack } from "react-bootstrap";
import {
  TbBrandFacebook,
  TbBrandTwitter,
  TbBrandLinkedin,
  TbBrandWhatsapp,
  TbBrandGithub,
  TbBrandGmail,
} from "react-icons/tb";

const ContactMe = () => {
  return (
    <Stack
      id="contactme"
      className={`${styles.stack} py-5 text-center`}
      gap={3}
    >
      <h1>Contact with me</h1>
      <p className="w-50 text-secondary align-self-center">
        I’m not currently taking on new client work but feel free to contact me
        for any other inquiries.
      </p>
      <Stack className="align-self-center py-4" direction="horizontal" gap={3}>
        <a href="https://facebook.com/ahmed-said95" target="_">
          <TbBrandFacebook className={styles.icon} />
        </a>
        <a href="https://twitter.com/AhmedSaied94" target="_">
          <TbBrandTwitter className={styles.icon} />
        </a>
        <a href="https://wa.link/u55712" target="-">
          <TbBrandWhatsapp className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/ahmed-saied94/" target="_">
          <TbBrandLinkedin className={styles.icon} />
        </a>
        <a href="https://github.com/AhmedSaied94" target="_">
          <TbBrandGithub className={styles.icon} />
        </a>
        <a href="mailto:ahmed.saeed311294@gmail.com" target="_">
          <TbBrandGmail className={styles.icon} />
        </a>
      </Stack>
    </Stack>
  );
};

export default ContactMe;
