import './PaginatorComponent.scss'

export interface PaginatorProps {
    totalNumberOfItems: number,
    numberOfItemsToDisplayPerPage: number,
    currentPage: number,
    displayOptions: number[],
}

type Props = {
    properties: PaginatorProps;
    handleOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handlePageChange: (pageClicked: number) => void;
}

function PaginatorComponent(props: Props) {
    let numberOfPages = Math.ceil(props.properties.totalNumberOfItems / props.properties.numberOfItemsToDisplayPerPage);

    let isDisabled: boolean = (numberOfPages === 1)
    let isDisabledPrevious: boolean = (props.properties.currentPage === 1)
    let isDisabledNext: boolean = (props.properties.currentPage == numberOfPages)


    const pageElements = [];
    for (let i = 1; i <= numberOfPages; i++) {
        pageElements.push(<li className={`page-item ${props.properties.currentPage === i ? 'selected' : ''}`} ><a onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { event.preventDefault(); props.handlePageChange(i) }} className="page-link" href={`/${i}`}>{i}</a></li>);
    }

    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <a className={`page-link ${isDisabled || isDisabledPrevious ? 'disabled' : ''}`}
                        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { event.preventDefault(); props.handlePageChange(props.properties.currentPage - 1) }}>
                        Précedent
                    </a>
                </li>
                {pageElements}
                <li className="page-item">
                    <a className={`page-link ${isDisabled || isDisabledNext ? 'disabled' : ''}`}
                        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { event.preventDefault(); props.handlePageChange(props.properties.currentPage + 1) }}>
                        Suivant
                    </a>
                </li>
            </ul>

            <div className='dropdown__container'>
                <select name="itemsPerPage" id="itemsPerPage" onChange={props.handleOptionChange}>
                    {props.properties.displayOptions.map((option) => (
                        <option value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </nav>
    );
}

export default PaginatorComponent;