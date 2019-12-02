import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import clone from 'clone';
import Button from '@iso/components/uielements/button';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import Card from '@iso/components/Card/Card';
import { ButtonWrapper } from '@iso/components/Card/CardModal.style';
import basicStyle from '@iso/assets/styles/constants';
import cardActions from '@iso/redux/card/actions';
import { createColumns } from './config';
import SimpleTable from '../../Tables/AntTables/TableViews/SimpleView';

const { addCard, editCard, deleteCard } = cardActions;
export default function Cards() {
  const dispatch = useDispatch();
  const { cards } = useSelector(state => state.Cards);
  const [state, setState] = React.useState({
    editView: false,
    selectedCard: null,
    modalType: '',
  });
  const columns = createColumns(editColumn, value =>
    dispatch(deleteCard(value))
  );
  function editColumn(card) {
    setState({
      editView: true,
      selectedCard: clone(card),
      modalType: 'edit',
    });
  }
  function addColumn() {
    setState({
      editView: true,
      selectedCard: {
        id: new Date().getTime(),
        key: new Date().getTime(),
        number: '',
        name: '',
        expiry: '',
        cvc: '',
      },
      modalType: 'add',
    });
  }
  function handleCancel() {
    setState({
      editView: false,
      selectedCard: null,
    });
  }
  function submitCard(card) {
    if (state.modalType === 'edit') {
      dispatch(editCard(state.selectedCard));
    } else {
      dispatch(addCard(state.selectedCard));
    }
    setState({
      editView: false,
      selectedCard: null,
    });
  }
  function updateCard(selectedCard) {
    setState({ ...state, selectedCard });
  }
  const { rowStyle, colStyle, gutter } = basicStyle;
  const { editView, selectedCard, modalType } = state;
  const newCards = clone(cards);
  const createNumber = number => {
    const length = number.length;
    let newNumber = '';
    for (let i = 0; i < length - 4; i++) {
      newNumber = `*${newNumber}`;
    }
    for (let i = length - 4; i < length; i++) {
      newNumber = `${newNumber}${number.charAt(i)}`;
    }
    return newNumber;
  };
  newCards.forEach((card, index) => {
    newCards[index].number = createNumber(card.number);
  });
  return (
    <LayoutWrapper>
      <PageHeader>Cards</PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={24} sm={24} xs={24} style={colStyle}>
          <Box>
            <ButtonWrapper className="isoButtonWrapper">
              <Button type="primary" className="" onClick={addColumn}>
                Add New Card
              </Button>
            </ButtonWrapper>

            <SimpleTable columns={columns} dataSource={cards} />
            {selectedCard && (
              <Card
                editView={editView}
                modalType={modalType}
                selectedCard={selectedCard}
                handleCancel={handleCancel}
                submitCard={submitCard}
                updateCard={updateCard}
              />
            )}
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
