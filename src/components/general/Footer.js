import React from "react";

import Icon from "../blocks/universal/Icon";

export default function Footer() {
    return (
        <footer className="copyright">
            <p className="copyright__author">
                Copyright © 2021 Mateusz Mathias Stawowski. Wszystkie prawa
                zastrzeżone.
            </p>
            <span className="copyright__source">
                <a
                    href={`${process.env.REACT_APP_GITHUB_URL}portfolio`}
                    target="__blank"
                    className="source__link"
                >
                    <Icon
                        icon={["fab", "github"]}
                        className="source__icon"
                        title="Zobacz kod strony na Githubie"
                    />
                </a>
            </span>
        </footer>
    );
}
