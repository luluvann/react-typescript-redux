import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ButtonComponent.scss'

export enum ButtonVariants {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    DELETE = "delete"
}

export interface Button {
    id?: number,
    icon?: IconProp,
    text?: string,
    variant: ButtonVariants,
    handleClick: ((event: React.MouseEvent<HTMLButtonElement>) => void) | (() => void)
}

type Props = {
    properties: Button,
}

function ButtonComponent(props: Props) {

    const genericHandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (typeof props.properties.handleClick === 'function') {
            props.properties.handleClick(event);
        }
    };

    return (
        <button className={`button ${props.properties.variant}`} onClick={genericHandleClick}>
            {props.properties.icon != null ? (<FontAwesomeIcon icon={props.properties.icon} />) : null}
            {props.properties.text}
        </button>
    );

}

export default ButtonComponent;
