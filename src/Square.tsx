// import { SquareType } from "./App"

type Props = {
    value: string;
    clickHandler: () => void;
}

const Sqaure: React.FC<Props> = ({ value, clickHandler }) => {

    return (
        <div className="square" onClick={clickHandler}>O</div>
    )
}

export default Sqaure 