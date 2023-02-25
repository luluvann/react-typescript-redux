import './MultipleSelectComponent.scss'

type Props = {
    options: string[];
    handleOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function MultipleSelectComponent(props: Props) {

    return (
        <div className='select__container'>
            <select className="select" name="select" multiple onChange={props.handleOptionChange} >
                {props.options.map((option) => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </div>
    );

}

export default MultipleSelectComponent;
