import { CardContent } from "./styles";

import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

export function Card(props) {
    return (
        <CardContent>
            <div className="card__item">
                <img src="" alt="" /> {/*img será passada via parametro tambem através do backend*/}
            </div>
            <div className="card__item flex">
                <div className="card__title"><p>{props.title}</p></div>
                <div className="card__price">
                    <p>R${props.price}</p>
                    <p>{props.split}</p>
                </div>
                <LocalShippingOutlinedIcon
                    style={{ color: "#0D9E00"}}
                />
            </div>
        </CardContent>
    )
}