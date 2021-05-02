import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faMapMarker,
    faPhone,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

library.add(faMapMarker, faPhone, faEnvelope);

export default function Icon(props) {
    const { icon } = props;

    return <FontAwesomeIcon icon={icon} />;
}
