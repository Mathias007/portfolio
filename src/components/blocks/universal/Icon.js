import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    // Contact
    faHome,
    faEnvelope,

    // Timeline
    faEthernet,
    faDragon,
    faScroll,
    faHatWizard,
    faDungeon,
    faRing,
    faBookDead,
    faUniversity,
    faLaptopCode,
    faBookOpen,
    faGraduationCap,
    faAward,
    faGavel,
    faBriefcase,
    faTimes,
    faBars,
} from "@fortawesome/free-solid-svg-icons";

import {
    faDiscord,
    faGithub,
    faSteam,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(
    // fas
    faTimes,
    faBars,
    faHome,
    faEnvelope,
    faEthernet,
    faDragon,
    faScroll,
    faHatWizard,
    faDungeon,
    faRing,
    faBookDead,
    faUniversity,
    faLaptopCode,
    faBookOpen,
    faGraduationCap,
    faAward,
    faGavel,
    faBriefcase,

    // fab
    faDiscord,
    faGithub,
    faSteam,
    faLinkedin
);

export default function Icon(props) {
    const { icon } = props;

    return <FontAwesomeIcon icon={icon} {...props} />;
}
