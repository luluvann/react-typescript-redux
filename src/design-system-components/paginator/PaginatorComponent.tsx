import './PaginatorComponent.scss'

type Props = {
    numberOfPages: number,
    currentPage: number,
    displayOptions: number[],
    handleOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handlePageChange: (pageClicked: number) => void;
}

function PaginatorComponent(props: Props) {

    let isDisabled: boolean = (props.numberOfPages === 1)
    let isDisabledPrevious: boolean = (props.currentPage === 1)
    let isDisabledNext: boolean = (props.currentPage == props.numberOfPages)

    const pageElements = [];
    for (let i = 1; i <= props.numberOfPages; i++) {
        pageElements.push(<li className={`page-item ${props.currentPage === i ? 'selected' : ''}`} ><a onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { event.preventDefault(); props.handlePageChange(i) }} className="page-link" href={`/${i}`}>{i}</a></li>);
    }

    return (
        <nav>
            {props.numberOfPages}
            <ul className="pagination">
                <li className="page-item"><a className={`page-link ${isDisabled || isDisabledPrevious ? 'disabled' : ''}`} onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { event.preventDefault(); props.handlePageChange(props.currentPage - 1) }} href="#">Précedent</a></li>
                {pageElements}
                <li className="page-item"><a className={`page-link ${isDisabled || isDisabledNext ? 'disabled' : ''}`} onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { event.preventDefault(); props.handlePageChange(props.currentPage + 1) }}  href="#">Suivant</a></li>
            </ul>

            <div className='dropdown__container'>
                <select name="itemsPerPage" id="itemsPerPage" onChange={props.handleOptionChange}>
                    {props.displayOptions.map((option) => (
                        <option value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </nav>
    );
}

export default PaginatorComponent;