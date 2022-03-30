import React from "react"
import { APP_NAME, YEAR_RELEASED, } from "../constants"

const Footer = () => (
    <footer className="footer" style={styles.footer}>
        <div className="container text-center">
            <span className="text-muted">
                {APP_NAME} &copy; {YEAR_RELEASED}&nbsp;
                <a target="_blank" href="https://github.com/kkamara/mrvl">
                    Github
                </a>
            </span>
        </div>
    </footer>
)

const styles = {
    footer: {
        marginTop: 30
    }
}

export default Footer
