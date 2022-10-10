import { Fragment } from "react";
import ErrorText from "./../Common/ErrorText";

const ErrorHandle = ({ errors }) => {
    return (
        <Fragment>
            {errors.map((error, index) => {
                if (!error.valid)
                    return (
                        <ErrorText key={index} width="11em">
                            {error.errorMessage}
                        </ErrorText>
                    );
                else return null;
            })}
        </Fragment>
    );
};

export default ErrorHandle;
