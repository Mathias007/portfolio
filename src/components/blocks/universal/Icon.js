import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    // Contact
    faMapMarker,
    faPhone,
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
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faMapMarker,
    faPhone,
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
    faBriefcase
);

export default function Icon(props) {
    const { icon } = props;

    return <FontAwesomeIcon icon={icon} {...props} />;
}
