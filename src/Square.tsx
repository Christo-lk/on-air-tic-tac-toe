// import { SquareType } from "./App"
import { SquareType } from "./redux/reducers/squareReducer"

type Props = {
    value: any;
    clickHandler: () => void;
}

const Sqaure: React.FC<Props> = ({ value, clickHandler }) => {
    return (
        <div className="square" onClick={clickHandler}>{value}</div>
    )
}

export default Sqaure 