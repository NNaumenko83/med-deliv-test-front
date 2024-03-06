import { HistoryProductsListItem } from '../HistoryProductsListItem/HistoryProductsListItem';
import productsPropType from './HistoryProductsList.props';
import { StyledHistoryProductsList } from './HistoryProductsList.styled';

function HistoryProductsList({ products }) {
    return (
        <StyledHistoryProductsList>
            {products.map(product => (
                <HistoryProductsListItem
                    key={product.product.id}
                    product={product}
                />
            ))}
        </StyledHistoryProductsList>
    );
}

// HistoryProductsList.propTypes = productsPropType;

export default HistoryProductsList;
