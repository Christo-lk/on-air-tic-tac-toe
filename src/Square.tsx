type Props = {
    value: string;
    clickHandler: () => void;
}

const Sqaure: React.FC<Props> = ({ value, clickHandler }) => {
    return (
        <div className="square" onClick={clickHandler}>{value}</div>
    )
}

export default Sqaure 