import { Fragment } from "react";
import Notice from "../../../Common/Notice";

const Notices = ({ requiredPath }) => {
    return (
        <Fragment>
            <Notice>All nodes must have unique names</Notice>
            {requiredPath ? <Notice>All edges must have a value</Notice> : null}
        </Fragment>
    );
};

export default Notices;
